'use strict';

(function () {

  var inputTelPopup = document.getElementById('feedback-tel-popup');
  var feedbackTel = document.getElementById('feedback-phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false
  };

  var popupMask = new window.IMask(inputTelPopup, maskOptions);
  popupMask.value = inputTelPopup.value;

  var feedbackMask = new window.IMask(feedbackTel, maskOptions);
  feedbackMask.value = feedbackTel.value;

  inputTelPopup.addEventListener('focus', function () {
    inputTelPopup.value = '+7(';
  });

  feedbackTel.addEventListener('focus', function () {
    feedbackTel.value = '+7(';
  });

}());
