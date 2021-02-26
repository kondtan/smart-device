'use strict';

(function () {

  var titleSitemap = document.querySelector('.sitemap h2');
  var sitemapButton = document.querySelector('.sitemap__button');
  var sitemapList = document.querySelector('.sitemap__list');

  var titleContact = document.querySelector('.contact h2');
  var contactButton = document.querySelector('.contact__button');
  var contactBlock = document.querySelector('.contact__block');

  if (typeof (titleSitemap) !== 'undefined' && titleSitemap !== null) {
    sitemapButton.classList.remove('toggle--no-js');
    sitemapButton.classList.add('toggle--hidden');
    contactButton.classList.remove('toggle--no-js');
    contactButton.classList.add('toggle--hidden');

    sitemapList.classList.add('content--hidden');
    contactBlock.classList.add('content--hidden');

    var toggleSitemap = function () {
      if (sitemapButton.classList.contains('toggle--hidden')) {
        sitemapButton.classList.remove('toggle--hidden');
        sitemapButton.classList.add('toggle--show');
        sitemapList.classList.toggle('content--hidden');

        contactButton.classList.remove('toggle--show');
        contactButton.classList.add('toggle--hidden');
        contactBlock.classList.add('content--hidden');
        contactBlock.classList.remove('content--show');
      } else {
        sitemapButton.classList.add('toggle--hidden');
        sitemapButton.classList.remove('toggle--show');
        sitemapList.classList.toggle('content--hidden');
      }
    };
  }

  if (typeof (titleContact) !== 'undefined' && titleContact !== null) {
    var toggleContact = function () {
      if (contactButton.classList.contains('toggle--hidden')) {
        contactButton.classList.remove('toggle--hidden');
        contactButton.classList.add('toggle--show');
        contactBlock.classList.toggle('content--hidden');

        sitemapButton.classList.remove('toggle--show');
        sitemapButton.classList.add('toggle--hidden');
        sitemapList.classList.add('content--hidden');
        sitemapList.classList.remove('content--show');
      } else {
        contactButton.classList.add('toggle--hidden');
        contactButton.classList.remove('toggle--show');
        contactBlock.classList.toggle('content--hidden');
      }
    };
  }

  titleSitemap.addEventListener('click', function () {
    toggleSitemap();
  });

  titleSitemap.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      toggleSitemap();
    }
  });

  titleContact.addEventListener('click', function () {
    toggleContact();
  });

  titleContact.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      toggleContact();
    }
  });
})();
