'use strict';

(function () {
  var form = document.querySelector('.feedback__form');

  if (typeof (form) !== 'undefined' && form !== null) {
    var userName = form.querySelector('[name=username]');
    var userPhone = form.querySelector('[name=phone]');
    // var userText = form.querySelector('[name=feedback-question]');
    var consentCheckbox = form.querySelector('[name=user-consent]');

    form.addEventListener('submit', function (evt) {
      if (!userName.value || !userPhone.value || !consentCheckbox.checked) {
        evt.preventDefault();
      } else {
        form.submit();
      }
    });
  }
})();

/*eslint-disable*/

'use strict';

(function () {

  var maskedInputs = document.querySelectorAll('input[data-mask]');

  var setMask = function(input) {
    Array.prototype.forEach.call(maskedInputs, function(input) {
      var maskOption = {
        mask: input.getAttribute('data-mask')
      };
      IMask(input, maskOption);
    });
  }

  setMask();
}());

'use strict';

(function () {
  var popup = document.querySelector('.popup');

  if (typeof (popup) !== 'undefined' && popup !== null) {
    var openPopupButton = document.querySelector('.page-header__callback');
    var closePopupButton = document.querySelector('.popup__close');
    var popupForm = document.querySelector('.popup__form');
    var overlay = document.querySelector('.overlay');

    var userName = popup.querySelector('[name=user-name]');
    var userTel = popup.querySelector('[name=user-tel]');
    var userText = popup.querySelector('[name=feedback-question]');
    var checkboxPopup = popup.querySelector('.popup__consent-input');

    var isStorageSupport = true;
    var storageName = '';
    var storageTel = '';
    var storageMessage = '';

    try {
      storageName = localStorage.getItem('userName');
      storageTel = localStorage.getItem('userTel');
      storageMessage = localStorage.getItem('userText');
    } catch (err) {
      isStorageSupport = false;
    }

    openPopupButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('popup__hidden');
      overlay.classList.remove('overlay__hidden');

      document.body.style.overflow = 'hidden';

      if (storageName) {
        userName.value = storageName;
        if (storageTel) {
          userTel.value = storageTel;
          userText.value = storageMessage;
        } else {
          userTel.focus();
        }
        userText.focus();
      } else {
        userName.focus();
      }
    });

    var closePopup = function () {
      popup.classList.add('popup__hidden');
      overlay.classList.add('overlay__hidden');
      document.body.style.overflow = 'visible';
    };

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        document.body.style.overflow = 'visible';
        if (!popup.classList.contains('popup__hidden')) {
          closePopup();
        }
      }
    });

    closePopupButton.addEventListener('click', function () {
      closePopup();
    });

    if (popup.classList.contains('popup__hidden')) {
      overlay.addEventListener('click', function () {
        closePopup();
      });
    }

    popupForm.addEventListener('submit', function (evt) {
      if (!userName.value || !userTel.value || !checkboxPopup.checked) {
        evt.preventDefault();
      } else {
        if (isStorageSupport) {
          localStorage.setItem('userName', userName.value);
          localStorage.setItem('userTel', userTel.value);
          localStorage.setItem('userText', userText.value);
        }
      }
    });
  }
})();

'use strict';

(function () {
  var buttonToAdvantages = document.querySelector('.page-main__scroll-down');
  var blockAdvantages = document.querySelector('.advantages');

  var buttonToConsultation = document.querySelector('.page-main__consult');
  var blockConsultation = document.querySelector('.page-main__feedback');

  function scrollTo(element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }

  if (typeof (buttonToAdvantages) !== 'undefined' && buttonToAdvantages !== null) {
    buttonToAdvantages.addEventListener('click', function () {
      scrollTo(blockAdvantages);
    });
  }

  if (typeof (buttonToConsultation) !== 'undefined' && buttonToConsultation !== null) {
    buttonToConsultation.addEventListener('click', function () {
      scrollTo(blockConsultation);
    });
  }
})();

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

    titleSitemap.addEventListener('click', function () {
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
    });
  }

  if (typeof (titleContact) !== 'undefined' && titleContact !== null) {
    titleContact.addEventListener('click', function () {
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
    });
  }
})();
