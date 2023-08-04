const fetchAllChallengesTable = document.querySelector(
  "#fetchAllChallengesTable"
);

let dataAllChallengesTable = () => {
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
};

dataAllChallengesTable();
