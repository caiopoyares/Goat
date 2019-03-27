const UI = (function () {
  const DOMStrings = {
    sliderBox: document.querySelector('.header__caroussel'),
    sliderImages: document.querySelectorAll('.slide'),
    sliderBtnPrev: document.querySelector('.caroussel__btn-prev'),
    sliderBtnPrev: document.querySelector('.caroussel__btn-next'),
    mobileNavbar: document.querySelector('.mobile-button')
  }

  return {
    showMobileNavbar: function() {
      document.querySelector('body').classList.add('active');
    },
    closeMobileNavbar: function() {
      document.querySelector('body').classList.remove('active');
    },
    nextSlide: function (e) {
      // current variable will change each time you click the button, so don't use DOMString
      const current = document.querySelector('.current');
      current.classList.remove('current');
      if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
      } else {
        console.log(DOMStrings.sliderImages[0])
        //Slider images is a node list
        DOMStrings.sliderImages[0].classList.add('current');
      }
    },
    prevSlide: function (e) {
      // current variable will change each time you click the button, so don't use DOMString
      const current = document.querySelector('.current');
      current.classList.remove('current');
      if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
      } else {
        //Slider images is a node list
        const slides = DOMStrings.sliderImages;
        slides[slides.length - 1].classList.add('current');
      }
    }
  }
})();

const controller = (function (ui) {

  const loadEventListeners = () => {
    document.querySelector('.caroussel__btn-prev').addEventListener('click', ui.prevSlide);
    document.querySelector('.caroussel__btn-next').addEventListener('click', ui.nextSlide);
    document.querySelector('.mobile-button').addEventListener('click', ui.showMobileNavbar);
    document.querySelector('.close-menu-btn').addEventListener('click', ui.closeMobileNavbar);
  }

  return {
    init: function () {
      loadEventListeners();
    }
  }
})(UI);

controller.init()
