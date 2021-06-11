import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <section class="content">
          <div class="latest">
              <h1 tabindex="0" class="latest__label">Explore Restaurants</h1>
              <div class="restaurants">
              </div>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const restaurantsContainer = document.querySelector('.restaurants');
    const latest = document.querySelector('.latest');
    const heroTitle = document.querySelector('.hero__title');
    const heroTagline = document.querySelector('.hero__tagline');

    if (restaurants.length === 0) {
      latest.style.display = 'none';
      heroTitle.innerHTML = 'There is No Favorite';
      heroTagline.innerHTML = 'Let\'s choose your favorite in restaurant\'s details';
    } else {
      latest.style.display = 'block';
      heroTitle.innerHTML = 'Your Favorite';
      heroTagline.innerHTML = 'Let\'s see Your Favorite Restaurants Below';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  }
};

export default Like;
