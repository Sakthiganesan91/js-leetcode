const obj = {
  name: "Sakthi",
  age: 23,
  state: "Tamil Nadu",
};

console.log(Object.values(obj));
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + " " + obj[key]);
});
