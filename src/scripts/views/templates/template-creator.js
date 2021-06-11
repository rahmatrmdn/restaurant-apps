import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="latest">
      <div class="restaurant-item detail-card">
        <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="restaurant__info">
          <h3>Address</h3>
          <p>${restaurant.city}, ${restaurant.address}</p>
          <h3>Categories</h3>
          <p>${restaurantArraySplitter(restaurant.categories)}</p>
          <h3>Foods</h3>
          <p>${restaurantArraySplitter(restaurant.menus.foods)}</p>
          <h3>Drinks</h3>
          <p>${restaurantArraySplitter(restaurant.menus.drinks)}</p>
          <h3>Rating</h3> 
          <p>${restaurant.rating}</p>
        </div>
        <div class="restaurant__overview">
          <h3>Overview</h3>
          <p>${restaurant.description}</p>
        </div>
        <div class="restaurant__overview">
          <h3>Customer Reviews</h3>
          ${restaurantReviewsRender(restaurant.customerReviews)}
        </div>
      </div>
    </div>
`;

const createRestaurantEmptyDetailTemplate = () => `
    <div class="latest">
      <div class="restaurant-item detail-card">
        <div class="restaurant__info">
          <h3>Please Check Your Internet Connection</h3>
        </div>
    </div>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="restaurant-item" tabindex="0" >
       <div class="container">
         <img class="restaurant-item__header__poster" width="100%" height="350px" src="./images/placeholder.png" alt="skeleton">
       </div>
       <div class="restaurant-item__content">
          <h3 class="skeleton">Lorem ipsum dolor sit.</a></h3>
          <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
       </div>
   </div>
  `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
   <div class="restaurant-item" tabindex="0" >
     <div class="container">
       <img class="restaurant-item__thumbnail lazyload" src="./images/placeholder.png" alt="${restaurant.title}"
         data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
       <div class="text-top-left background-text-img">${restaurant.city}</div>
     </div>
     <div class="restaurant-item__content">
        <p class="restaurant-item__date">Rating: ${restaurant.rating}</p>
        <h1 class="restaurant-item__title"><a class="restaurant-name" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
        <p class="restaurant-item__description">${restaurant.description}</p>
     </div>
   </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="material-icons">favorite_border</i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="material-icons">favorite</i>
  </button>
`;

const restaurantArraySplitter = (array) => {
  return array.map((item) => {
    return item.name;
  }).join(', ');
};

const restaurantReviewsRender = (array) => {
  let reviewTemplate = '';
  array.forEach((review) => {
    reviewTemplate += `
          <p>${review.name} (${review.date}) says,<br>"${review.review}"</p>`;
  });
  return reviewTemplate;
};

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantEmptyDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonRestaurantTemplate
};
