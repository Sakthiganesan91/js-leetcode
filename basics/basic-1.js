const getDateTime = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date().getDay();
  const time = new Date().toTimeString();
  return days[date] + " " + time;
};

console.log(getDateTime());
