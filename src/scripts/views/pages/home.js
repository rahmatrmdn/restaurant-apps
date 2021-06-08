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
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      console.log(restaurant.pictureId);
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  }
};

export default ListRestaurants;
