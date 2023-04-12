import { generateRandomNumber, Person, Dog } from "./file1";

const randomNumber = generateRandomNumber(1, 100);
console.log("Random number: ", randomNumber);

const person = new Person("Alice", 30);
console.log("Person details: ", person.getDetails());

Dog.makeSound();
