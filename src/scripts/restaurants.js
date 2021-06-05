export function showRestaurants(data) {

    let restaurants = "", i;
    let restaurantsElement = document.querySelector(".restaurants");

    data.restaurants.forEach(function callback(restaurant, index) {
        restaurants += `
             <div class="restaurant-item" tabindex="0" >
                    <div class="container">
                        <img class="restaurant-item__thumbnail"
                         src="${restaurant.pictureId}"
                         alt="Gambar ${restaurant.name}">
                         <div class="text-top-left background-text-img">${restaurant.city}</div>
                    </div>
                    <div class="restaurant-item__content">
                        <p class="restaurant-item__date">Rating: ${restaurant.rating}</p>
                        <h1 class="restaurant-item__title"><a class="restaurant-name" href="#">${restaurant.name}</a></h1>
                        <p class="restaurant-item__description">${restaurant.description}</p>
                    </div>
             </div>
        `;
    })

    restaurantsElement.innerHTML = restaurants;
}