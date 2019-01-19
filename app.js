/**-----------------------------------------------------     CONSTRUCTORS AND THIS    ---------------------------------------------------------*/
// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calcAge = function () {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// console.log(derek)

const derek = new Person('Derek', '8/4/1992')
console.log(derek.calcAge())

const sam = new Person('Sam', '6/6/1945')
console.log(sam.calcAge())

/**-----------------------------------------------------     BUILT IN CONSTRUCTORS    ---------------------------------------------------------*/
// String
const name1 = 'Bob';
const name2 = new String('Bob');
// name2.foo = 'bar' you shouldnt and wont do this very often
console.log(typeof name1) // string
console.log(typeof name2) // object

//Number
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num1) // number
console.log(typeof num2) // object


//Boolean
const bool1 = true;
const bool2 = new Boolean(true)
console.log(typeof bool1) // boolean
console.log(typeof bool2) // object

//Function
const getSum1 = function (x, y) {
  return x + y;
}
const getSum2 = new Function('x', 'y', 'return 1 + 1')
console.log(getSum1(1, 1)) //2
console.log(getSum2(1, 1)) //2

//Object
const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' })

//Array
const arr1 = [1, 2, 3]
const arr2 = new Array(1, 2, 3)

//Regex
const re1 = /\w+/
const re2 = new RegExp('\\w+') // need to escape character when doing it this way
console.log(re1)
console.log(re2)


/**-----------------------------------------------------     Prototypes    ---------------------------------------------------------*/
//Prototypes
/**
 * Each object in JS has a prototype, which is an object itsself 
 * All objects inherit their properties and methods from their prototype
 */
//Object.prototype
//Person2.prototype
function Person2(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calcAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}
Person2.prototype.calcAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person2.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
};

Person2.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
}

const john = new Person2('John', 'Doe', '8/4/1994')
const mary = new Person2('Mary', 'Shreut', 'June 4 1918')

console.log(mary.getFullName())// Mary Shreut
mary.getsMarried('Himler')
console.log(mary.getFullName())// Mary Himler
console.log(mary.hasOwnProperty('lastName')) // true
console.log(mary.hasOwnProperty('getFullName'))// false, not a property


/**-----------------------------------------------------     Prototypal Inheritance    ---------------------------------------------------------*/
/**
 * When we want to have one object inherit from another
 */
function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person3.prototype.greeting = function () {
  return `Hey ${this.firstName} ${this.lastName}`;
}
