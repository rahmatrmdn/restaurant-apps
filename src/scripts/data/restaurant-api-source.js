import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantApiSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json().restaurant;
  }
}

export default TheRestaurantApiSource;
