'use strict';

(function () {

  var titleSitemap = document.querySelector('.sitemap h2');
  var sitemapButton = document.querySelector('.sitemap__button');
  var sitemapList = document.querySelector('.sitemap__list');

  var titleContact = document.querySelector('.contact h2');
  var buttonContact = document.querySelector('.contact__button');
  var contactBlock = document.querySelector('.contact__block');

  titleSitemap.addEventListener('click', function () {
    if (sitemapButton.classList.contains('button-hidden')) {
      sitemapButton.classList.remove('button-hidden');
      sitemapButton.classList.add('button-show');
      sitemapList.classList.toggle('form-show');
    } else {
      sitemapButton.classList.add('button-hidden');
      sitemapButton.classList.remove('button-show');
      sitemapList.classList.toggle('form-show');
    }
  });

  titleContact.addEventListener('click', function () {
    if (buttonContact.classList.contains('button-hidden')) {
      buttonContact.classList.remove('button-hidden');
      buttonContact.classList.add('button-show');
      contactBlock.classList.toggle('form-show');
    } else {
      buttonContact.classList.add('button-hidden');
      buttonContact.classList.remove('button-show');
      contactBlock.classList.toggle('form-show');
    }
  });
})();
