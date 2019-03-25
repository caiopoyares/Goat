/* // REST PARAMETER
function sum(...numbers) {
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  })
}
console.log(sum(1,2,3,4,5));






// SPREAD OPERATOR
array1 = [1,2,3,4];
array2 = [...array1,5,6,7]
console.log(array2);






// DESTRUCTURING
// with arrays
const names = ['caio', 'laura', 'beatriz'];
const [caito, laura, bia] = names;
console.log(bia);

// with objects
const caio = {
  name: 'Caio',
  age: 25,
  job: 'Front End Developer'
}
const { name, age: caioAge, job: caioJob } = caio;

console.log(caioAge);






// CLASSES
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise`;
  }
}

class Dog extends Animal {
  constructor(name, breed = 'Boxer') {
    super(name);
    this.breed = breed;
  }
}

const zion = new Dog('Zion', 'Chiuaua');
 */


/* const navbarItem = document.querySelector('.drop'); */


const UI = (function() {
  const DOMStrings = {
    sliderBox: document.querySelector('.hero-images'),
    sliderImages: document.querySelectorAll('.slider'),
    sliderBtnPrev: document.querySelector('.btn-prev'),
    sliderBtnPrev: document.querySelector('.btn-next')
  }

  return {
    nextSlide: function(e) {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        if(current.nextElementSibling) {
          current.nextElementSibling.classList.add('current');
        } else {
          console.log(DOMStrings.sliderImages[0])
          //Slider images is a node list
          DOMStrings.sliderImages[0].classList.add('current');
      }
    },
    prevSlide: function(e) {
      const current = document.querySelector('.current');
      current.classList.remove('current');
      if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
      } else {
        //Slider images is a node list
        const slides = DOMStrings.sliderImages;
        slides[slides.length - 1].classList.add('current');
    }
  }
}
})();

const controller = (function(ui) {

  const loadEventListeners = () => {
    document.querySelector('.btn-prev').addEventListener('click', ui.prevSlide);
    document.querySelector('.btn-next').addEventListener('click', ui.nextSlide);
  }

  return {
    init: function() {
      loadEventListeners();
    }
  }
})(UI);

controller.init()