const fetchChallengesTable = document.querySelector("#fetchAllChallengesTable");
let table = document.createElement("table");
fetchChallengesTable.appendChild(table);

fetch("./data/data.json")
  .then((response) => response.json())
  .then((datas) => {
    console.log(datas);
    let challengesDatas = datas.challenges;
    sortDataChallenges(challengesDatas);
  })
  .catch((error) => console.error(error));

const createTable = () => {
  createTableHead();
  createTableBody();
  tableHead.appendChild(tableBody);
};

//
const createTableHead = () => {
  let tableHead = document.createElement("thead");
  let tableTh = document.createElement("th");
  tableTh.textContent = innerHtmlTh;

  tableHead.appendChild(tableTh);
  table.appendChild(tableHead);
};

const createTableBody = () => {
  let tableBody = document.createElement("tbody");
  let tableBodyRow = document.createElement("tr");
  let tableBodyCell = document.createElement("td");

  tableBodyRow.textContent = innerHtmltableBodyRow;
  tableBodyCell.textContent = innerHtmltableBodyCell;

  tableBodyRow.appendChild(tableBodyCell);
  tableBody.appendChild(tableBodyRow);
  table.appendChild(tableBody);
};

const sortDataChallenges = (challengesDatas) => {
  challengesDatas.forEach((challengesData) => {
    if (challengesData.name === "basicJsChallenges") {
      let basicChallengesData = challengesData.allChallenges;
      console.log(basicChallengesData);

      basicChallengesData.forEach((basicChallengeData) => {
        innerHtmlTh = basicChallengeData.title;
        createTableHead();

        let basicChallengesDetails = basicChallengeData.challenge;
        basicChallengesDetails.forEach((basicChallengesDetail) => {
          innerHtmltableBodyRow = basicChallengesDetail.challengeTitle;
          innerHtmltableBodyCell = basicChallengesDetail.challengeDescription;
          createTableBody();
        });
      });
    } else {
      let particularChallengesDetails = challengesData.allChallenges;
      innerHtmlTh = challengesData.title;
      createTableHead();

      particularChallengesDetails.forEach((particularChallengesDetail) => {
        innerHtmltableBodyRow = particularChallengesDetail.title;
        innerHtmltableBodyCell = particularChallengesDetail.content;
        createTableBody();
      });
    }
  });
};

// const displayChallengesTable = () => {
//   createTable();
// };

// displayChallengesTable();

// let addButtons = (mainChallengesArrayDatas) => {
//       let tableRowButton = document.createElement("tr");
//       let tableCellButton = document.createElement("td");

//       let tableCheatSheetButton = document.createElement("button");
//       let tableToChallengeButton = document.createElement("button");
//       let tableAddChallengeButton = document.createElement("button");

//       tableRowButton.className = "tableRowButton";
//       tableCellButton.className = "tableCellButton";
//       tableCheatSheetButton.className = "tableCheatSheetButton";
//       tableToChallengeButton.className = "tableToChallengeButton";
//       tableAddChallengeButton.className = "tableAddChallengeButton";

//       tableCheatSheetButton.innerHTML = "Cheatsheet";
//       tableToChallengeButton.innerHTML = "See the solution";
//       tableAddChallengeButton.innerHTML = "Propose your challenge";

//       if (mainChallengesArrayDatas[0].name === "basicJsChallenges") {
//         tableCellButton.appendChild(tableCheatSheetButton);
//         tableCellButton.appendChild(tableToChallengeButton);
//         tableCellButton.appendChild(tableAddChallengeButton);
//         tableRowButton.appendChild(tableCellButton);
//         tbody.appendChild(tableRowButton);
//       }

//     tableHeadCellButton.appendChild(tableHeadCheatsheetButton);
//     tableHeadCellButton.appendChild(tableHeadToChallengeButton);
//     tableHeadCellButton.appendChild(tableAddChallengeButton);
//     tableHeadRowButton.appendChild(tableHeadCellButton);

//     table.appendChild(tableHeadRowButton);
//     };
