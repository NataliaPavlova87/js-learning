// Number
const n1 = 1;
const n2 = Infinity;
const n3 = NaN;
const n4 = 0.1;
const n5: 24 = 24;

// Кортежи Typles
const t1: [number, string] = [100, 'hello'];


// Enum
enum Roles {
    admin,
    user
}

const person = {
    role: Roles.admin
}

// Symbol BigInt
const s1: symbol = Symbol('hello');
const b1: bigint = 123n;

// Function
let sumFn: (n1: number, n2: number, callback: (d: any) => void) => number;

sumFn = (a: number, b: number): number => {
    return a + b;
}

// Union Types Объединенные типы
const u1: (string | number)[] = [123, 'hello'];

// Literal Types - то, что можно записать в одну строчку
type Action = 'text' | 'json';
type person = {age: number, name: string};

// Interfaces

interface Person {
    age: number
    name: number
}

interface Adress {
    street: string
}

interface User extends Person, Adress {}

// Type Guard

const isString = (val: string | boolean): val is string => {
    return typeof val === 'string'
}
