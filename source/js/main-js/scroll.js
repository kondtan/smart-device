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
