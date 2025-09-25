const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (response.ok) return response.json();
      throw new Error("Error");
    }
  );
};

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//async-await version

const getDataAsync = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getDataAsync();
