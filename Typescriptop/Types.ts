type UserType = {
   firstName: string;
   lastName: string;
   age: number;
};

// But Types let you do a few other things.

// ? 1. Unions
type id = number | string;

function printId(id: id) {
   console.log(`Id is ${id}`);
}

printId(3);
printId('3');

// ? 2. Intersection
type EmployeeType = {
   name: string;
   startDate: Date;
};

type ManagerType = {
   name: string;
   department: string;
};

type TeamLead = EmployeeType & ManagerType;

const teamLead: TeamLead = {
   name: 'harkirat',
   startDate: new Date(),
   department: 'Software developer',
};

// ! You can not do this using interfaces
