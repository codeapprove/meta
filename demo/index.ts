import { greet, add, subtract, Person, Animal } from './utils';

function main(): void {
  greet('World');

  // Wow, so math
  console.log("2 + 3 =", add(2, 3));
  console.log("10 - 7 =", subtract(10, 7));

  // Very types
  const person: Person = { name: 'Alice', age: 25 };
  console.log(person);

  // Much object oriented
  const animal: Animal = new Animal('Dog');
  animal.makeSound();
}

main();
