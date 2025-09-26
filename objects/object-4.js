const obj = {
  name: "Sakthi",
  age: 23,
  state: "Tamil Nadu",
};

Object.entries(obj).forEach(([key]) => {
  console.log(key + " " + obj[key]);
});
