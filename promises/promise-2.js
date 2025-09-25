const Alert = (time) => {
  return new Promise((resolve, reject) => {
    if (time < 0) {
      reject("Error");
    }

    setTimeout(() => {
      resolve("Alert");
    }, time);
  });
};

Alert(2000)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

//async await

const execute = async () => {
  try {
    const response = await Alert(2000);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

execute();
