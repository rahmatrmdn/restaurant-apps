import CONFIG from '../../globals/config';

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
        <h1 class="restaurant-item__title"><a class="restaurant-name" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
        <p class="restaurant-item__description">${restaurant.description}</p>
     </div>
   </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  // createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonRestaurantTemplate
};
//
// <div class="restaurant-item">
//   <div class="restaurant-item__header">
//     <img class="restaurant-item__header__poster lazyload" width="100%" height="350px" src="./images/placeholder.png" alt="${restaurant.title}"
//          data-src="${restaurant.backdrop_path ? CONFIG.BASE_IMAGE_URL + restaurant.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
// <div class="restaurant-item__header__rating">
//         <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.vote_average}</span></p>
//       </div>
//   </div>
//   <div class="restaurant-item__content">
//     <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.title}</a></h3>
//     <p>${restaurant.overview}</p>
//   </div>
// </div>
