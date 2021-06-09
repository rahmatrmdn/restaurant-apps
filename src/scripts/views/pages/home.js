import RestaurantApiSource from '../../data/restaurant-api-source';
import {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate
} from '../templates/template-creator';

const ListRestaurants = {
  async render() {
    return `
      <section class="content">
          <div class="latest">
              <h1 tabindex="0" class="latest__label">Explore Restaurants</h1>
              <div class="restaurants">
                ${createSkeletonRestaurantTemplate(15)}
              </div>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurants();
    const restaurantsContainer = document.querySelector('.restaurants');
    const heroTitle = document.querySelector('.hero__title');
    const heroTagline = document.querySelector('.hero__tagline');

    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    heroTitle.innerHTML = 'Are You Hungry?';
    heroTagline.innerHTML = 'Let\'s visit our recommendation restaurants below!';
  }
};

export default ListRestaurants;
