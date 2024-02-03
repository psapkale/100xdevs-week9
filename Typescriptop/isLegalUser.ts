interface User {
   firstName: string;
   lastName: string;
   email: string;
   age: number;
}

function isLegalUser(user: User): boolean {
   return user.age >= 18;
}

const user = {
   firstName: 'harkirat',
   lastName: 'singh',
   email: 'email@gmail.com',
   age: 21,
};

console.log(isLegalUser(user));
