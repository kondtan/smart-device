'use strict';

(function () {
  var form = document.querySelector('.feedback__form');
  var userName = form.querySelector('[name=username]');
  var userPhone = form.querySelector('[name=phone]');
  var userText = form.querySelector('[name=feedback-question]');
  var checkboxPopup = form.querySelector('[name=user-consent]');

  if (form) {
    form.addEventListener('submit', function (evt) {
      if (!userName.value || !userPhone.value || !userText.value || !checkboxPopup.checked) {
        evt.preventDefault();
      } else {
        form.submit();
      }
    });
  } else {
    return;
  }
})();
