const fetchChallengesTable = document.querySelector("#fetchAllChallengesTable");
let table = document.createElement("table");
fetchChallengesTable.appendChild(table);

let createTable = () => {
  let tableHead = document.createElement("thead");
  let tableTh = document.createElement("th");

  let tableBody = document.createElement("tbody");
  let tableBodyRow = document.createElement("tr");
  let tableBodyCell = document.createElement("td");

  tableHead.appendChild(tableTh);
  tableBodyRow.appendChild(tableBodyCell);
  tableBody.appendChild(tableBodyRow);

  table.appendChild(tableHead);
  table.appendChild(tableBody);
};

const fetchDataChallenges = () => {
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);
      let challengesDatas = datas.challenges;
      sortDataChallenges(challengesDatas);
    })
    .catch((error) => console.error(error));
};

const sortDataChallenges = (challengesDatas) => {
  challengesDatas.forEach((challengesData) => {
    if (challengesData.name === "basicJsChallenges") {
      console.log("+");
    }
    console.log(challengesData.name);
  });
};

const displayChallengesTable = () => {
  fetchDataChallenges();
  createTable();
};

displayChallengesTable();
