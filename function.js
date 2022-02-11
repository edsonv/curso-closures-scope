const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits();
// console.log(fruit); // la variable no se puede acceder

const anotherFunction = () => {
  // Las variables declaradas tienen scope local
  var x = 1;
  var x = 2; // Se ha reasignado la variable con var, mala práctica
  let y = 1;
  // let y = 2; // No se puede volver a reasignar
  console.log(x);
  console.log(y);
};

anotherFunction();