const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('There is No Favorite', '.hero__title');
});

Scenario('liking then unliking a restaurant', async ({ I }) => {
  I.see('There is No Favorite', '.hero__title');

  // like a restaurant
  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  // unlike that restaurant
  I.seeElement('.restaurant-item');

  I.seeElement('.restaurant-item__title a');

  const likedRestaurantThatWillBeUnliked = locate('.restaurant-item__title a').first();
  const likedRestaurantNameThatWillBeUnliked = await I.grabTextFrom(likedRestaurantThatWillBeUnliked);
  I.click(likedRestaurantThatWillBeUnliked);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/');
  I.seeElement('.restaurant-item');

  const unlikedRestaurantNameThatTheFirstRestaurantBefore = await I.grabTextFrom(locate('.restaurant-item__title a').first());

  assert.strictEqual(likedRestaurantNameThatWillBeUnliked, unlikedRestaurantNameThatTheFirstRestaurantBefore);
});
