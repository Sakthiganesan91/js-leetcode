const people = [
  {
    name: "Sakthi",
    age: 28,
    state: "Tamil Nadu",
  },
  {
    name: "Ganesh",
    age: 23,
    state: "Tamil Nadu",
  },
  {
    name: "Virat",
    age: 13,
    state: "Tamil Nadu",
  },
  {
    name: "Kohli",
    age: 55,
    state: "Tamil Nadu",
  },
];

people.sort((a, b) => a.age - b.age);
console.log(people);
