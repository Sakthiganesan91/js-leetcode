const getData = (n) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${n}`).then(
    (response) => {
      if (response.ok) return response.json();
      throw new Error("Error");
    }
  );
};

const arr = [1, 2, 3];

Promise.all(arr.map((num) => getData(num))).then((res) => {
  console.log(res);
});

//async-await

const fetchUsers = async () => {
  try {
    const results = await Promise.all(arr.map((num) => getData(num)));
    console.log(results);
  } catch (err) {
    console.error(err);
  }
};

fetchUsers();
