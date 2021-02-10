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
