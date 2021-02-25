'use strict';

(function () {
  var titleSitemap = document.querySelector('.sitemap h2');
  var titleContact = document.querySelector('.contact h2');
  var sitemapButton = document.querySelector('.sitemap__button');
  var contactButton = document.querySelector('.contact__button');

  sitemapButton.tabIndex = -1;
  contactButton.tabIndex = -1;

  var checkWindowWidth = function (element) {
    if (window.innerWidth <= 767) {
      element.tabIndex = 0;
    } else {
      element.tabIndex = -1;
    }
  };

  checkWindowWidth(titleSitemap);
  checkWindowWidth(titleContact);

  window.addEventListener('resize', function () {
    checkWindowWidth(titleSitemap);
  });

  window.addEventListener('resize', function () {
    checkWindowWidth(titleContact);
  });
})();
