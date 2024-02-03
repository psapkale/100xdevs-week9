interface Person {
   name: string;
   age: number;
   greet(phrase: string): void;
}

class Employee implements Person {
   name: string;
   age: number;

   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }

   greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
   }
}

// ? Summary
// ? You can use interfaces to aggregate data
// ? You can use interfaces to implement classes from