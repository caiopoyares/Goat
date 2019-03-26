const UI = (function () {
  const DOMStrings = {
    sliderBox: document.querySelector('.header__caroussel'),
    sliderImages: document.querySelectorAll('.slide'),
    sliderBtnPrev: document.querySelector('.caroussel__btn-prev'),
    sliderBtnPrev: document.querySelector('.caroussel__btn-next'),
    mobileNavbar: document.querySelector('.mobile-navbar'),
    mobileMenu: document.querySelector('.popup-menu')
  }

  return {
    dropdownMobileMenu: function(e) {
      if(e.target.parentElement.parentElement.classList.contains('mobile-navbar__items--drop')) {
        e.target.parentElement.parentElement.lastElementChild.classList.toggle('active');
      }
    },
    showMobileNavbar: function() {
      //insert active class in .popup-menu element
      DOMStrings.mobileMenu.classList.add('active');
    },
    closeMobileNavbar: function(e) {
      e.stopPropagation();
      // must use event delegation to remove popup
      document.querySelector('.popup-menu').classList.remove('active');
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
    document.querySelector('.mobile-navbar').addEventListener('click', ui.showMobileNavbar);
    document.querySelector('.close-popup').addEventListener('click', ui.closeMobileNavbar);
    document.querySelector('.popup-menu').addEventListener('click', ui.dropdownMobileMenu);
  }

  return {
    init: function () {
      loadEventListeners();
    }
  }
})(UI);

controller.init()
