const obj = {
  name: "Sakthi",
  age: 23,
  state: "Tamil Nadu",
};

let search = "name";

console.log(obj);
if (search in obj) {
  console.log("Key Found");
} else {
  console.log("Key not found");
}
