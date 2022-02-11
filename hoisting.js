//  se usa hoisting en la declaración
a = 2;
var a;
console.log(a); // 2

// No se puede usar hoisting en la inicialización
console.log(a);
var a = 2;

// Hoisting usando funciones
nameOfDog('Elmo');
function nameOfDog(name) {
  console.log(name);
}

// El hoisting funciona porque Javascript primero compila y luego ejecuta