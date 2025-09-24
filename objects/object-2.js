const obj = {
  name: "Sakthi",
  age: 23,
  state: "Tamil Nadu",
};

let keyToBeDeleted = "name";

console.log(obj);
if (keyToBeDeleted in obj) delete obj[keyToBeDeleted];
console.log(obj);
