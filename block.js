const fruits = () => {
  if (true) {
    var fruits1 = 'apple'; // function scope
    let fruits2 = 'banana'; // block scope
    const fruits3 = 'kiwi'; // block scope
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1); // Se puede acceder a las variables cuendo son declaradas con var porque toman el scope de la función
  // console.log(fruits2); // No puede acceder a las variables porque tienen scope de bloque
  // console.log(fruits3); // No puede acceder a las variables porque tienen scope de bloque
};

fruits();

// let x = 1;
// {
//   let x = 2; // block scope
//   console.log(x);
// }
// console.log(x);

var x = 1;
{
  var x = 2; // global scope
  console.log(x);
}
console.log(x);

const anotherFunction = () => {
  // for (var i = 0; i < 10; i++) { // no se debe usar var para declarar i dentro del for
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // Si i esta definido con var siempre imprime i
    }, 1000);
  }
};

anotherFunction();