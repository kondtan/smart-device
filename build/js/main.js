'use strict';

(function () {
  var form = document.querySelector('.feedback');
  var userName = form.querySelector('[name=username]');
  var userPhone = form.querySelector('[name=phone]');
  var userText = form.querySelector('[name=feedback-question]');
  var checkboxPopup = form.querySelector('[name=user-consent]');

  form.addEventListener('submit', function (evt) {
    if (!userName.value || !userPhone.value || !userText.value || !checkboxPopup.checked) {
      evt.preventDefault();
    } else {
      form.submit();
    }
  });

})();


'use strict';
(function () {

  var inputTelPopup = document.getElementById('feedback-tel-popup');
  var feedbackTel = document.getElementById('feedback-phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false
  };

  inputTelPopup.addEventListener('click', function () {
    var maskPopup = IMask(inputTelPopup, maskOptions);
    var maskFeedback = IMask(feedbackTel, maskOptions);
  });

}());

'use strict';

(function () {
  var openPopupButton = document.querySelector('.page-header__callback');
  var popup = document.querySelector('.popup');
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

  openPopupButton.addEventListener('click', function () {
    popup.classList.remove('popup__hidden');
    overlay.classList.remove('overlay__hidden');

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

  var closeModal = function () {
    popup.classList.add('popup__hidden');
    overlay.classList.add('overlay__hidden');
  };

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!popup.classList.contains('popup__hidden')) {
        closeModal();
      }
    }
  });

  closePopupButton.addEventListener('click', function () {
    closeModal();
  });

  if (popup.classList.contains('popup__hidden')) {
    overlay.addEventListener('click', function () {
      closeModal();
    });
  }

  popupForm.addEventListener('submit', function (evt) {
    if (!userName.value || !userTel.value || !userText.value || !checkboxPopup.checked) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userTel', userTel.value);
        localStorage.setItem('userText', userText.value);
      }
    }
  });

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

  buttonToAdvantages.addEventListener('click', function () {
    scrollTo(blockAdvantages);
  });

  buttonToConsultation.addEventListener('click', function () {
    scrollTo(blockConsultation);
  });
})();

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
