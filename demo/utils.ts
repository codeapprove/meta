export function greet(name: string): void {
    console.log(`Hi, ${name}!`);
}

export function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

export function divide(num1: number, num2: number): number {
    return num1 / num2;
}

export interface Person {
    name: string;
    age: number;
    email: string;
}

export class Animal {
    name: string;
    type: string;
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
    makeSound(): void {
        console.log(`${this.name} the ${this.type} makes a sound.`);
    }
}
