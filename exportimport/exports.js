// exports.js

export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
// No semicolons after export class/function
export class User {
  constructor(name) {
    this.name = name;
  }
}
//No semicolons after export class/function
// export function sayHi(user) {
//     alert(`Hello, ${user}!`);
//   } 

  function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    console.log(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye}; // a list of exported variables