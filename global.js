var hello = "Hello";
var hello = "Hello +"; // var permite reasignación
let world = "Hello World";
// let world = 'Hello'; // let no permite reasignación
// const helloWorld = "Hello World!";
console.log(hello);

// const anotherFunction = () => {
//   console.log(hello);
//   console.log(world);
//   console.log(helloWorld);
// };

// anotherFunction();

const helloWorld = () => { // No se puede redeclarar una variable declarada con const
  globalVar = "I'm global"; // Mala práctica, esta variable se crea como global
};

helloWorld();
console.log(globalVar); // Se accede a una variable global

const anotherFunction = () => {
  var localVar = globalVar = "I'm global?"; // Aquí existe una exposición de la variable globalVar
};

anotherFunction();
console.log(globalVar);