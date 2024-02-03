interface UserProps {
   firstName: string;
   lastName: string;
   age: number;
}

function filteredUsers(users: UserProps[]): UserProps[] | null {
   return users.filter((x) => x.age >= 18);
}

console.log(
   filteredUsers([
      {
         firstName: 'harkirat',
         lastName: 'Singh',
         age: 21,
      },
      {
         firstName: 'Raman',
         lastName: 'Singh',
         age: 16,
      },
   ])
);
