const fetchChallengesTable = document.querySelector("#fetchAllChallengesTable");

fetch("./data/data.json")
  .then((response) => response.json())
  .then((datas) => {
    console.log(datas);
    let challengesDatas = datas.challenges;
    sortDataChallenges(challengesDatas);
  })
  .catch((error) => console.error(error));

// Data display at grid form

let createTableGridContainer = () => {
  tableGridContainer = document.createElement("div");
  tableGridContainer.className = "tableGridContainer";
  fetchChallengesTable.appendChild(tableGridContainer);
};

let createTableGridHeader = () => {
  let tableGridHeader = document.createElement("div");
  let tableGridHeaderTitle = document.createElement("div");
  tableGridHeaderTitle.textContent = innerHtmlTh;
  tableGridHeader.className = "tableGridHeader grid-item";
  tableGridHeaderTitle.className = "tableGridHeaderTitle grid-item";

  tableGridHeader.appendChild(tableGridHeaderTitle);
  tableGridContainer.appendChild(tableGridHeader);

  let createTableHeaderDescription = () => {
    let tableGridHeaderDescription = document.createElement("div");
    tableGridHeaderDescription.textContent = innerHtmlThD;
    tableGridHeaderDescription.className =
      "tableGridHeaderDescription grid-item";
    tableGridHeader.appendChild(tableGridHeaderDescription);
  };

  innerHtmlThD ? createTableHeaderDescription() : {};
};

let createTableGridBody = () => {
  let tableGridBody = document.createElement("div");
  let tableGridBodyDescription = document.createElement("div");
  let tableGridBodyTitle = document.createElement("div");

  tableGridBodyTitle.textContent = innerHtmlTh;
  tableGridBodyDescription.textContent = innerHtmlThD;

  tableGridBody.className = "tableGridBody grid-item";
  tableGridBodyTitle.className = "tableGridBodyTitle grid-item";
  tableGridBodyDescription.className = "tableGridBodyDescription grid-item";

  tableGridBody.appendChild(tableGridBodyTitle);
  tableGridBody.appendChild(tableGridBodyDescription);
  tableGridContainer.appendChild(tableGridBody);
};

let createTableGridButtons = () => {
  let tableGridButtonContainer = document.createElement("div");
  let cheatSheetButton = document.createElement("button");
  let toChallengeButton = document.createElement("button");
  let addChallengeButton = document.createElement("button");

  cheatSheetButton.textContent = "Cheatsheet";
  toChallengeButton.textContent = "View a Solution";
  addChallengeButton.textContent = "+ Add a new challenge";

  tableGridButtonContainer.className = "tableGridButtonContainer grid-item";
  cheatSheetButton.className = "tableGridButton grid-item";
  toChallengeButton.className = "tableGridButton grid-item";
  addChallengeButton.className = "tableGridButton grid-item";

  tableGridContainer.appendChild(tableGridButtonContainer);
  tableGridButtonContainer.appendChild(cheatSheetButton);
  tableGridButtonContainer.appendChild(toChallengeButton);
  tableGridButtonContainer.appendChild(addChallengeButton);
};

const sortDataChallenges = (challengesDatas) => {
  challengesDatas.forEach((challengesData) => {
    if (challengesData.name === "basicJsChallenges") {
      let basicChallengesData = challengesData.allChallenges;
      console.log(basicChallengesData);
      createTableGridContainer();

      basicChallengesData.forEach((basicChallengeData) => {
        innerHtmlTh = basicChallengeData.title;
        innerHtmlThD = basicChallengeData.content;
        //createTableHead();
        createTableGridHeader();
        createTableGridButtons();

        let basicChallengesDetails = basicChallengeData.challenge;
        basicChallengesDetails.forEach((basicChallengesDetail) => {
          innerHtmlTh = basicChallengesDetail.challengeTitle;
          innerHtmlThD = basicChallengesDetail.challengeDescription;
          //createTableBody();
          createTableGridBody();
        });
        //createTableButtons();
      });
    } else {
      let particularChallengesDetails = challengesData.allChallenges;
      innerHtmlTh = challengesData.title;
      innerHtmlThD = "";
      createTableGridHeader();

      particularChallengesDetails.forEach((particularChallengesDetail) => {
        innerHtmlTh = particularChallengesDetail.title;
        innerHtmlThD = particularChallengesDetail.content;
        //createTableBody();
        createTableGridBody();
      });
    }
  });
};

// Data display at table form

// let table = document.createElement("table");
// fetchChallengesTable.appendChild(table);

// const createTable = () => {
//   createTableHead();
//   createTableBody();
//   createTableButtons();
// };

// const createTableHead = () => {
//   let tableHead = document.createElement("thead");

//   let tableTh = document.createElement("th");
//   tableTh.textContent = innerHtmlTh;

//   tableHead.appendChild(tableTh);
//   table.appendChild(tableHead);
// };

// const createTableBody = () => {
//   let tableBody = document.createElement("tbody");
//   let tableBodyRow = document.createElement("tr");
//   let tableBodyCell = document.createElement("td");

//   tableBodyRow.textContent = innerHtmltableBodyRow;
//   tableBodyCell.textContent = innerHtmltableBodyCell;

//   tableBodyRow.appendChild(tableBodyCell);
//   tableBody.appendChild(tableBodyRow);
//   table.appendChild(tableBody);
// };

// const createTableButtons = () => {
//   let buttonRow = document.createElement("tr");

//   let cheatSheetButton = document.createElement("button");
//   let toChallengeButton = document.createElement("button");
//   let addChallengeButton = document.createElement("button");

//   cheatSheetButton.textContent = "Cheatsheet";
//   toChallengeButton.textContent = "View a Solution";
//   addChallengeButton.textContent = "Add a new challenge";

//   buttonRow.appendChild(cheatSheetButton);
//   buttonRow.appendChild(toChallengeButton);
//   buttonRow.appendChild(addChallengeButton);
//   table.appendChild(buttonRow);
// };

// const sortDataChallenges = (challengesDatas) => {
//     challengesDatas.forEach((challengesData) => {
//       if (challengesData.name === "basicJsChallenges") {
//         let basicChallengesData = challengesData.allChallenges;
//         console.log(basicChallengesData);
//         createTableGridContainer();

//         basicChallengesData.forEach((basicChallengeData) => {
//           innerHtmlTh = basicChallengeData.title;
//           innerHtmlThD = basicChallengeData.content;
//           createTableHead();
//           createTableGridHeader();

//           let basicChallengesDetails = basicChallengeData.challenge;
//           basicChallengesDetails.forEach((basicChallengesDetail) => {
//             innerHtmltableBodyRow = basicChallengesDetail.challengeTitle;
//             innerHtmltableBodyCell = basicChallengesDetail.challengeDescription;
//             createTableBody();
//           });
//           createTableButtons();
//         });
//       } else {
//         let particularChallengesDetails = challengesData.allChallenges;
//         innerHtmlTh = challengesData.title;
//         createTableHead();

//         particularChallengesDetails.forEach((particularChallengesDetail) => {
//           innerHtmltableBodyRow = particularChallengesDetail.title;
//           innerHtmltableBodyCell = particularChallengesDetail.content;
//           createTableBody();
//         });
//       }
//     });
//   };
