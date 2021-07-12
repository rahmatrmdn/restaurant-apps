!function(n){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);for(l&&l(e);p.length;)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,s=1;s<t.length;s++){var u=t[s];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),n=o(o.s=t[0]))}return n}var r={},i={2:0},a=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([14,1,0]),t()}([,,,,,,,,function(n,e,t){var r=t(2),i=t(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},function(n,e,t){(e=t(3)(!1)).push([n.i,'* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}\n\n/* Top left text */\n.text-top-left {\n    position: absolute;\n    top: 8px;\n    font-weight: bold;\n    left: 16px;\n    color: #212121;\n}\n\n.container {\n    position: relative;\n    text-align: center;\n    color: white;\n}\n\nbody {\n    font-family: "Roboto", sans-serif;\n    font-size: 12px;\n    color: #424242;\n}\n\n/*\n * Header\n *\n */\n\n.header {\n    min-height: 56px;\n    transition: min-height 0.3s;\n}\n\n.header__inner {\n    width: 100%;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.header__title {\n    font-weight: 300;\n    font-size: 4em;\n    margin: 0.5em 0.25em;\n    display: inline-block;\n    color: #212121;\n}\n\n.header__menu {\n    font-size: 32px;\n    margin: 10px auto;\n    display: block;\n    min-width: 44px !important;\n    min-height: 44px !important;\n}\n\n.restaurant-name {\n    display: block;\n    min-width: 44px !important;\n    min-height: 44px !important;\n}\n\n/*\n * Top level navigation\n */\n\n.nav {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n}\n\n.nav__list {\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\n\n.nav__item {\n    box-sizing: border-box;\n    display: inline-block;\n    width: 24%;\n    text-align: center;\n    line-height: 24px;\n    text-transform: uppercase;\n}\n\n.nav a {\n    display: inline-block;\n    padding: 1.3em;\n    text-decoration: none;\n    color: #616161;\n}\n\n.nav a:hover {\n    text-decoration: underline;\n    color: #000;\n}\n\n\n/*\n * Jumbotron\n */\n\n.hero {\n    display: flex;\n    align-items: center;\n    min-height: 380px;\n    width: 100%;\n    text-align: center;\n    background-position: center;\n    background-color: #2c3e50;\n}\n\n.hero__inner {\n    margin: 0 auto;\n    max-width: 800px;\n}\n\n.hero__title {\n    color: #424242;\n    font-weight: 500;\n    font-size: 36px;\n}\n\n.hero__tagline {\n    color: #424242;\n    margin-top: 16px;\n    font-size: 18px;\n    font-weight: 300;\n}\n\n.background-text-hero {\n    background-color: rgba(255, 255, 255, 0.6);\n    border-radius: 8px;\n    padding: 24px;\n}\n\n.footer{\n    margin: 0 auto;\n    color: white;\n    font-size: 16px;\n}\n\n.background-text-img {\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 4px;\n    padding: 8px;\n}\n\n\n\n/*\n * main\n */\n\nmain {\n    width: 100%;\n    margin: 0 auto;\n}\n\n/*\n * content\n */\n\n.content {\n    padding: 32px;\n}\n\n/*\n * headline\n */\n\n.headline__figure {\n    width: 100%;\n}\n\n.headline__figure img {\n    width: 100%;\n}\n\n.headline__figure figcaption {\n    text-align: center;\n    color: #666666;\n    font-size: 13px;\n    font-weight: 400;\n    margin-top: 8px;\n}\n\n.headline__content {\n    width: 100%;\n    padding: 16px 0;\n}\n\n.headline__title {\n    font-size: 24px;\n    font-weight: 500;\n}\n\n.headline__description {\n    font-size: 12px;\n    margin-top: 12px;\n}\n\n.headline__button {\n    font-family: "Roboto", sans-serif;\n    text-transform: uppercase;\n    margin-top: 24px;\n    cursor: pointer;\n    padding: 8px 16px;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    background-color: #2c3e50;\n    transition: opacity 0.3s;\n}\n\n.headline__button:hover {\n    opacity: 0.8;\n}\n\n/*\n * latest\n */\n\n.latest {\n    width: 100%;\n    margin: 60px auto;\n    text-align: center;\n}\n\n.latest__label {\n    font-size: 32px;\n    font-weight: lighter;\n}\n\n.latest__label::after {\n    content: \'\';\n    margin-top: 16px;\n    display: block;\n    border-bottom: 1px solid #eeeeee;\n}\n\n/*\n * restaurant\n */\n\n.restaurants {\n    margin: 32px auto auto;\n    text-align: left;\n}\n\n/*Restaurant*/\n.restaurant {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 800px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 18px 16px;\n}\n\n.restaurant .restaurant__poster {\n    width: 100%;\n    max-width: 500px;\n    margin-top: 20px;\n    border-radius: 3%;\n    margin-bottom: 20px;\n}\n\n.detail-card h2 {\n    margin: 8px;\n    font-weight: 600;\n    font-size: 16px;\n    transition: 0.3s opacity;\n}\n\n.detail-card p {\n    font-size: 14px;\n    line-height: 1.5em;\n    margin-bottom: 10px;\n}\n\n.restaurant__overview {\n    border-top: 2px solid #2c3e50;\n}\n\n\n\n/*\n * restaurant item\n */\n\n.restaurant-item {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    width: 100%;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.detail-card {\n    padding: 30px;\n}\n\n.restaurant-item__content {\n    padding: 16px;\n}\n\n.restaurant-item__thumbnail {\n    width: 100%;\n    height: 270px;\n    object-fit: cover;\n    object-position: center;\n}\n\n.restaurant-item__date__author {\n    color: red;\n    text-decoration: none;\n}\n\n.restaurant-item__title {\n    font-weight: 500;\n    font-size: 16px;\n    margin-top: 16px;\n    transition: 0.3s opacity;\n}\n\n.restaurant-item__date {\n    font-size: 10px !important;\n    text-transform: uppercase;\n    color: #999;\n    font-weight: 500;\n}\n\n.restaurant-item__title:hover {\n    opacity: 0.5;\n}\n\n.restaurant-item__title a {\n    text-decoration: none;\n    color: inherit;\n}\n\n.restaurant-item__description {\n    margin-top: 16px;\n    font-size: 12px;\n    line-height: 1.5em;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n}\n\n/*\n * footer\n */\n\nfooter {\n    background-color: #2c3e50;\n    padding: 2em;\n    width: 100%;\n    text-align: center;\n}\n\nfooter ul {\n    margin: 0 auto;\n    display: inline-block;\n}\n\nfooter li {\n    display: inline-block;\n    margin: 0 1em;\n    font-size: 14px;\n}\n\nfooter a {\n    display: inline-block;\n    padding: 1.3em;\n    text-decoration: none;\n    color: #fff\n}\n\n/*\n   Like\n*/\n\n.like {\n    font-size: 18px;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    background-color: #db0000;\n    color: white;\n    border: 0;\n    border-radius: 50%;\n    width: 55px;\n    height: 55px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.skeleton {\n    user-select: none;\n    background-color: #eeeeee;\n    color: #eeeeee;\n}\n\n',""]),n.exports=e},function(n,e,t){var r=t(2),i=t(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},function(n,e,t){(e=t(3)(!1)).push([n.i,".restaurants {\r\n    display: grid;\r\n    grid-row-gap: 16px;\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n    .nav {\r\n        z-index: 10;\r\n        background-color: #fff;\r\n        width: 300px;\r\n        position: absolute;\r\n\r\n        /* This trasform moves the drawer off canvas. */\r\n        -webkit-transform: translate(-300px, 0);\r\n        transform: translate(-300px, 0);\r\n\r\n        /* Optionally, we animate the drawer. */\r\n        transition: transform 0.3s ease;\r\n    }\r\n\r\n    .background-text-hero {\r\n        background-color: rgba(255, 255, 255, 0.6);\r\n        border-radius: 0;\r\n        width: 100%;\r\n        padding: 24px;\r\n    }\r\n\r\n    .open {\r\n        -webkit-transform: translate(0, 0);\r\n        transform: translate(0, 0);\r\n    }\r\n\r\n    .nav__item {\r\n        display: list-item;\r\n        border-bottom: 1px solid #E0E0E0;\r\n        width: 100%;\r\n        text-align: left;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 455px) {\r\n    .headline__content {\r\n        padding: 16px 16px;\r\n    }\r\n\r\n    .headline__title {\r\n        font-size: 28px;\r\n    }\r\n\r\n    .headline__description {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n    .header__menu {\r\n        display: none;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n    .headline__content {\r\n        margin: 0 auto;\r\n        max-width: 650px;\r\n    }\r\n\r\n    .restaurant-item__content {\r\n        padding: 16px 32px 32px 32px;\r\n    }\r\n\r\n    .restaurant-item__title {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .restaurant-item__description {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .restaurant .restaurant__overview {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n    .restaurants {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 10px;\r\n        grid-row-gap: 16px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    .nav__list {\r\n        max-width: 800px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n    .headline {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .headline__content {\r\n        padding: 16px 32px;\r\n    }\r\n\r\n    .restaurants {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    main {\r\n        max-width: 1200px;\r\n    }\r\n}\r\n",""]),n.exports=e},function(n,e,t){var r=t(2),i=t(13);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},function(n,e,t){(e=t(3)(!1)).push([n.i,".skip-link {\r\n    background: #2c3e50;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    left: 0;\r\n    padding: 4px;\r\n    position: absolute;\r\n    transform: translateY(-99%);\r\n    transition: transform 0.3s;\r\n}\r\n\r\n.skip-link:focus {\r\n    transform: translateY(0%);\r\n}\r\n",""]),n.exports=e},function(n,e,t){"use strict";t.r(e);t(6),t(1),t(7),t(8),t(10),t(12);var r={init:function(n){var e=this,t=n.button,r=n.drawer,i=n.content,a=n.hero;t.addEventListener("click",(function(n){n.preventDefault(),e._toggleDrawer(n,r)})),i.addEventListener("click",(function(n){e._closeDrawer(n,r)})),a.addEventListener("click",(function(){r.classList.remove("open")}))},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("open")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("open")}},i={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},a={KEY:"012a46ae5c0688e76f342e07b1ee1afd",BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_SMALL_URL:"https://restaurant-api.dicoding.dev/images/small/",BASE_IMAGE_MEDIUM_URL:"https://restaurant-api.dicoding.dev/images/medium/",BASE_IMAGE_LARGE_URL:"https://restaurant-api.dicoding.dev/images/large/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:"RestaurantCatalogue-V3",DATABASE_NAME:"restaurant-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"},o={LIST_RESTAURANT:"".concat(a.BASE_URL,"list"),DETAIL:function(n){return"".concat(a.BASE_URL,"detail/").concat(n)}};function s(n,e,t,r,i,a,o){try{var s=n[a](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,i)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){s(a,r,i,o,u,"next",n)}function u(n){s(a,r,i,o,u,"throw",n)}o(void 0)}))}}function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var l=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r,i,a;return e=n,t=null,r=[{key:"listRestaurants",value:(a=u(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.LIST_RESTAURANT);case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.restaurants);case 7:case"end":return n.stop()}}),n)}))),function(){return a.apply(this,arguments)})},{key:"detailRestaurant",value:(i=u(regeneratorRuntime.mark((function n(e){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.DETAIL(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.restaurant);case 7:case"end":return n.stop()}}),n)}))),function(n){return i.apply(this,arguments)})}],t&&c(e.prototype,t),r&&c(e,r),n}(),d=function(n){return'\n    <div class="latest">\n      <div class="restaurant-item detail-card">\n        <img class="restaurant__poster" src="'.concat(a.BASE_IMAGE_LARGE_URL+n.pictureId,'" alt="').concat(n.name,'" />\n        <div class="restaurant__info">\n          <h2>Address</h2>\n          <p>').concat(n.city,", ").concat(n.address,"</p>\n          <h2>Categories</h2>\n          <p>").concat(m(n.categories),"</p>\n          <h2>Foods</h2>\n          <p>").concat(m(n.menus.foods),"</p>\n          <h2>Drinks</h2>\n          <p>").concat(m(n.menus.drinks),"</p>\n          <h2>Rating</h2> \n          <p>").concat(n.rating,'</p>\n        </div>\n        <div class="restaurant__overview">\n          <h2>Overview</h2>\n          <p>').concat(n.description,'</p>\n        </div>\n        <div class="restaurant__overview">\n          <h2>Customer Reviews</h2>\n          ').concat(h(n.customerReviews),"\n        </div>\n      </div>\n    </div>\n")},p=function(n){for(var e="",t=0;t<n;t+=1)e+='\n    <div class="restaurant-item" tabindex="0" >\n       <div class="container">\n         <img class="restaurant-item__header__poster" width="100%" height="350px" src="./images/placeholder.png" alt="skeleton">\n       </div>\n       <div class="restaurant-item__content">\n          <h2 class="skeleton">Lorem ipsum dolor sit.</a></h2>\n          <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>\n       </div>\n   </div>\n  ';return e},f=function(n){return'\n   <div class="restaurant-item" tabindex="0" >\n     <div class="container">\n       <img class="restaurant-item__thumbnail lazyload" src="./images/placeholder.png" alt="'.concat(n.title,'"\n         data-src="').concat(n.pictureId?a.BASE_IMAGE_SMALL_URL+n.pictureId:"https://picsum.photos/id/666/800/450?grayscale",'">\n       <div class="text-top-left background-text-img">').concat(n.city,'</div>\n     </div>\n     <div class="restaurant-item__content">\n        <p class="restaurant-item__date">Rating: ').concat(n.rating,'</p>\n        <h1 class="restaurant-item__title"><a class="restaurant-name" href="#/detail/').concat(n.id,'">').concat(n.name,'</a></h1>\n        <p class="restaurant-item__description">').concat(n.description,"</p>\n     </div>\n   </div>\n  ")},m=function(n){return n.map((function(n){return n.name})).join(", ")},h=function(n){var e="";return n.forEach((function(n){e+="\n          <p>".concat(n.name," (").concat(n.date,') says,<br>"').concat(n.review,'"</p>')})),e};function g(n,e,t,r,i,a,o){try{var s=n[a](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,i)}function v(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){g(a,r,i,o,s,"next",n)}function s(n){g(a,r,i,o,s,"throw",n)}o(void 0)}))}}var x={render:function(){return v(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <section class="content">\n          <div class="latest">\n              <h1 tabindex="0" class="latest__label">Explore Restaurants</h1>\n              <div class="restaurants">\n                '.concat(p(6),"\n              </div>\n          </div>\n      </section>\n    "));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return v(regeneratorRuntime.mark((function n(){var e,t,r,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.listRestaurants();case 2:e=n.sent,t=document.querySelector(".restaurants"),r=document.querySelector(".hero__title"),i=document.querySelector(".hero__tagline"),t.innerHTML="",e.forEach((function(n){t.innerHTML+=f(n)})),r.innerHTML="Are You Hungry?",i.innerHTML="Let's visit our recommendation restaurants below!";case 10:case"end":return n.stop()}}),n)})))()}},_=t(5);function w(n,e,t,r,i,a,o){try{var s=n[a](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,i)}function b(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){w(a,r,i,o,s,"next",n)}function s(n){w(a,r,i,o,s,"throw",n)}o(void 0)}))}}var y=a.DATABASE_NAME,k=a.DATABASE_VERSION,R=a.OBJECT_STORE_NAME,L=Object(_.a)(y,k,{upgrade:function(n){n.createObjectStore(R,{keyPath:"id"})}}),E={getRestaurant:function(n){return b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L;case 2:return e.abrupt("return",e.sent.get(R,n));case 3:case"end":return e.stop()}}),e)})))()},getAllRestaurants:function(){return b(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L;case 2:return n.abrupt("return",n.sent.getAll(R));case 3:case"end":return n.stop()}}),n)})))()},putRestaurant:function(n){return b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L;case 2:return e.abrupt("return",e.sent.put(R,n));case 3:case"end":return e.stop()}}),e)})))()},deleteRestaurant:function(n){return b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L;case 2:return e.abrupt("return",e.sent.delete(R,n));case 3:case"end":return e.stop()}}),e)})))()}};function A(n,e,t,r,i,a,o){try{var s=n[a](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,i)}function S(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){A(a,r,i,o,s,"next",n)}function s(n){A(a,r,i,o,s,"throw",n)}o(void 0)}))}}var T,M={init:function(n){var e=this;return S(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.likeButtonContainer,i=n.restaurant,e._likeButtonContainer=r,e._restaurant=i,t.next=5,e._renderButton();case 5:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var n=this;return S(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n._restaurant.id,e.next=3,n._isRestaurantExist(t);case 3:if(!e.sent){e.next=7;break}n._renderLiked(),e.next=8;break;case 7:n._renderLike();case 8:case"end":return e.stop()}}),e)})))()},_isRestaurantExist:function(n){return S(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getRestaurant(n);case 2:return t=e.sent,e.abrupt("return",!!t);case 4:case"end":return e.stop()}}),e)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n     <i class="material-icons">favorite_border</i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",S(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.putRestaurant(n._restaurant);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))},_renderLiked:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <i class="material-icons">favorite</i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",S(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.deleteRestaurant(n._restaurant.id);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))}};function P(n,e,t,r,i,a,o){try{var s=n[a](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,i)}function B(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){P(a,r,i,o,s,"next",n)}function s(n){P(a,r,i,o,s,"throw",n)}o(void 0)}))}}function C(n,e,t,r,i,a,o){try{var s=n[a](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,i)}function z(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){C(a,r,i,o,s,"next",n)}function s(n){C(a,r,i,o,s,"throw",n)}o(void 0)}))}}var O={"/":x,"/home":x,"/detail/:id":{render:function(){return B(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div tabindex="0" id="restaurant" class="restaurant"></div>\n      <div id="likeButtonContainer"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:(T=B(regeneratorRuntime.mark((function n(){var e,t,r,a,o,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector('link[src="https://fonts.googleapis.com/icon?family=Material+Icons"]'),(t=document.querySelector("#restaurant")).innerHTML='\n    <div class="latest">\n      <div class="restaurant-item detail-card">\n        <div class="restaurant__info">\n          <h2>Please Check Your Internet Connection</h2>\n        </div>\n    </div>\n',e||((e=document.createElement("link")).href="https://fonts.googleapis.com/icon?family=Material+Icons",e.rel="stylesheet",document.body.appendChild(e)),r=i.parseActiveUrlWithoutCombiner(),n.next=7,l.detailRestaurant(r.id);case 7:return a=n.sent,o=document.querySelector(".hero__title"),s=document.querySelector(".hero__tagline"),o.innerHTML="This is ".concat(a.name),s.innerHTML="Let's the details below!",n.next=14,d(a);case 14:return t.innerHTML=n.sent,n.next=17,M.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),restaurant:{id:a.id,name:a.name,city:a.city,description:a.description,pictureId:a.pictureId,rating:a.rating}});case 17:case"end":return n.stop()}}),n)}))),function(){return T.apply(this,arguments)})},"/like":{render:function(){return z(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <section class="content">\n          <div class="latest">\n              <h1 tabindex="0" class="latest__label">Explore Restaurants</h1>\n              <div class="restaurants">\n              </div>\n          </div>\n      </section>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return z(regeneratorRuntime.mark((function n(){var e,t,r,i,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.getAllRestaurants();case 2:e=n.sent,t=document.querySelector(".restaurants"),r=document.querySelector(".latest"),i=document.querySelector(".hero__title"),a=document.querySelector(".hero__tagline"),0===e.length?(r.style.display="none",i.innerHTML="There is No Favorite",a.innerHTML="Let's choose your favorite in restaurant's details"):(r.style.display="block",i.innerHTML="Your Favorite",a.innerHTML="Let's see Your Favorite Restaurants Below",e.forEach((function(n){t.innerHTML+=f(n)})));case 8:case"end":return n.stop()}}),n)})))()}}};function q(n,e,t,r,i,a,o){try{var s=n[a](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,i)}function I(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var j=function(){function n(e){var t=e.button,r=e.drawer,i=e.content,a=e.hero;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=t,this._drawer=r,this._content=i,this._hero=a,this._initialAppShell()}var e,t,a,o,s;return e=n,(t=[{key:"_initialAppShell",value:function(){r.init({button:this._button,drawer:this._drawer,content:this._content,hero:this._hero})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.parseActiveUrlWithCombiner(),t=O[e],n.next=4,t.render();case 4:return this._content.innerHTML=n.sent,n.next=7,t.afterRender();case 7:case"end":return n.stop()}}),n,this)})),s=function(){var n=this,e=arguments;return new Promise((function(t,r){var i=o.apply(n,e);function a(n){q(i,t,r,a,s,"next",n)}function s(n){q(i,t,r,a,s,"throw",n)}a(void 0)}))},function(){return s.apply(this,arguments)})}])&&I(e.prototype,t),a&&I(e,a),n}(),H=t(4),U=t.n(H);function D(n,e,t,r,i,a,o){try{var s=n[a](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(r,i)}var N=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,U.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){D(a,r,i,o,s,"next",n)}function s(n){D(a,r,i,o,s,"throw",n)}o(void 0)}))});return function(){return e.apply(this,arguments)}}(),G=new j({button:document.querySelector("#menu"),drawer:document.querySelector("#drawer"),content:document.querySelector("main"),hero:document.querySelector(".hero")});window.addEventListener("hashchange",(function(){G.renderPage()})),window.addEventListener("DOMContentLoaded",(function(){N(),G.renderPage()}))}]);