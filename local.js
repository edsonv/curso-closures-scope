const helloWorld = () => {
  const hello = 'Hello World'; // esta variable tiene scope local
  console.log(hello);
};

helloWorld();

// console.log(hello); // hello is not defined

var scope = "I'm global";

const functionScope = () => {
  var scope = "I'm just a local variable"; // aqupi se aplica el ámbito léxico
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
console.log(scope);