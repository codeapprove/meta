export function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  
  export function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  export function subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
  
  export interface Person {
    name: string;
    age: number;
  }
  
  export class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    makeSound(): void {
      console.log(`${this.name} makes a sound.`);
    }
  }
  