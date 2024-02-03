type Input = number | string;

function firstEl(arr: Input[]) {
   return arr[0];
}

const value = firstEl([1, 2, 3, 'harkirat']); // typescript is not complaining
// value.toLowerCase(); // also can't access string functions

// ? solution - generics

function identity<T>(arg: T): T {
   return arg;
}

let output1 = identity<string>('myString');
let output2 = identity<number>(100);
console.log(typeof output1);
console.log(typeof output2);

// solution for original statement

function getFirstElement<T>(arr: T[]): T {
   return arr[0];
}

const sol1 = getFirstElement<number>([1, 2, 3]);
const sol2 = getFirstElement<string>(['harkirat', 'singh']);
console.log(sol1);
sol2.toLowerCase(); // can access string methods
console.log(sol2);

// const el = firstEl<string>(["harkirat", "singh"]) // define explicitly
// const el = firstEl(["harkirat", "singh"]) // either works
// ^ will allow ["harkirat", "singh", 1, 2], so prefer to explicitly mention the type
