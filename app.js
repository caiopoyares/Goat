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



