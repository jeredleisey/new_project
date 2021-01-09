// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Jered',
  age: 34,
  hobbies: ['Guitar', 'Cooking', 'Games'],
  role: Role.ADMIN
};

let favoriteActivities: String[];
favoriteActivities = ['Board Games'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('is read only');
  
}
