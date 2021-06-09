import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
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
    let scriptElement = document.querySelector('script[src="https://use.fontawesome.com/b070c8f1df.js"]');

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.src = 'https://use.fontawesome.com/b070c8f1df.js';
      document.body.appendChild(scriptElement);
    }

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);

    const heroTitle = document.querySelector('.hero__title');
    const heroTagline = document.querySelector('.hero__tagline');
    heroTitle.innerHTML = `This is ${restaurant.name}`;
    heroTagline.innerHTML = 'Let\'s the details below!';

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating
      }
    });
  }
};

export default Detail;
