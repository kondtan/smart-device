'use strict';

(function () {

  var titleSitemap = document.querySelector('.sitemap h2');
  var sitemapButton = document.querySelector('.sitemap__button');
  var sitemapList = document.querySelector('.sitemap ul');

  var titleContact = document.querySelector('.contact h2');
  var buttonContact = document.querySelector('.contact__button');
  var contactBlock = document.querySelector('.contact__block');

  titleSitemap.addEventListener('click', function () {
    if (sitemapButton.classList.contains('toggle--hidden')) {  // -
      sitemapButton.classList.remove('toggle--hidden');
      sitemapButton.classList.add('toggle--show');
      sitemapList.classList.toggle('form--hidden');
    } else {
      sitemapButton.classList.add('toggle--hidden');
      sitemapButton.classList.remove('toggle--show');
      sitemapList.classList.toggle('form--hidden');
    }
  });

  titleContact.addEventListener('click', function () {
    if (buttonContact.classList.contains('toggle--hidden')) {
      buttonContact.classList.remove('toggle--hidden');
      buttonContact.classList.add('toggle--show');
      contactBlock.classList.toggle('form--hidden');
    } else {
      buttonContact.classList.add('toggle--hidden');
      buttonContact.classList.remove('toggle--show');
      contactBlock.classList.toggle('form--hidden');
    }
  });
})();
