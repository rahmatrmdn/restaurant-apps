import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestaurantDetailTemplate, createRestaurantEmptyDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div tabindex="0" id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  afterRender: async function () {
    // lazy load font awesome
    let linkElement = document.querySelector('link[src="https://fonts.googleapis.com/icon?family=Material+Icons"]');
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantEmptyDetailTemplate();

    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      linkElement.rel = 'stylesheet';
      document.body.appendChild(linkElement);
    }

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);

    const heroTitle = document.querySelector('.hero__title');
    const heroTagline = document.querySelector('.hero__tagline');
    heroTitle.innerHTML = `This is ${restaurant.name}`;
    heroTagline.innerHTML = 'Let\'s the details below!';

    restaurantContainer.innerHTML = await createRestaurantDetailTemplate(restaurant);

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating
      }
    });
  }
};

export default Detail;
