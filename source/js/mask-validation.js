'use strict';
(function () {

  var inputTelPopup = document.getElementById('feedback-tel-popup');
  var feedbackTel = document.getElementById('feedback-phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false
  };

  inputTelPopup.addEventListener('click', function () {
    var maskPopup = iMask(inputTelPopup, maskOptions);
    var maskFeedback = iMask(feedbackTel, maskOptions);
  });

}());
