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


