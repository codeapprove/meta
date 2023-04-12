export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

interface Animal {
  name: string;
  type: string;
  makeSound(): void;
}

export const Dog: Animal = {
  name: "Fido",
  type: "Dog",
  makeSound() {
    console.log("Woof!");
  },
};

// ... add more code if needed
