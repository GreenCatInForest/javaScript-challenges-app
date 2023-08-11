const fetchChallengesTable = document.querySelector("#fetchAllChallengesTable");
let filterBasicChallengesDatas = [];
let filterOtherChallengesDatas = [];
let dataArrayGroupsBasicChallenges = [];
let dataListBasicChallenges = [];

fetch("./data/data.json")
  .then((response) => response.json())
  .then((datas) => {
    // let challengesDatas = datas.challenges;
    // console.log(datas.challenges);
    // sortDataChallenges(challengesDatas);
    iterateDataForButtons(datas);
  })
  .catch((error) => console.error(error));

let iterateDataForButtons = (datas) => {
  // All data JSON
  console.log(datas);

  // Array with all the challenges
  let dataChallenges = datas.challenges;
  console.log(dataChallenges);

  // Filter basic challenges from others challenges

  let dataFilterByNames = () => {
    dataChallenges.forEach((dataChallenge) => {
      dataChallenge.name === "basicJsChallenges"
        ? filterBasicChallengesDatas.push(dataChallenge)
        : filterOtherChallengesDatas.push(dataChallenge);
    });
  };
  dataFilterByNames();
  console.log(filterBasicChallengesDatas);
  console.log(filterOtherChallengesDatas);

  // Groups of basic challenges
  filterBasicChallengesDatas.forEach((filterBasicChallengesData) => {
    dataArrayGroupsBasicChallenges = filterBasicChallengesData.allChallenges;
  });
  console.log(dataArrayGroupsBasicChallenges);

  // List of basic challenges

  dataArrayGroupsBasicChallenges.forEach((dataArrayGroupsBasicChallenge) => {
    dataListBasicChallenges = dataArrayGroupsBasicChallenge.challenge;
  });
  console.log(dataListBasicChallenges);
};

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

// Button functions

let goToCheatSheet = () => {
  console.log("q");
  window.open("https://www.w3schools.com");
};

let goToChallenges = (goToChallengesLink) => {
  console.log(goToChallengesLink);
  window.open(goToChallengesLink);
};

let goAddChallenge = () => {
  console.log("b");
};

let createTableGridButtons = () => {
  let tableGridButtonContainer = document.createElement("div");
  let cheatSheetButton = document.createElement("button");
  let toChallengeButton = document.createElement("button");
  let addChallengeButton = document.createElement("button");

  tableGridButtonContainer.className = "tableGridButtonContainer";
  cheatSheetButton.className = "tableGridButton cheatSheetButton";
  toChallengeButton.className = "tableGridButton toChallengeButton";
  addChallengeButton.className = "tableGridButton addChallengeButton";

  cheatSheetButton.textContent = "Cheatsheet";
  toChallengeButton.textContent = "View a Solution";
  addChallengeButton.textContent = "+ Add a new challenge";

  tableGridContainer.appendChild(tableGridButtonContainer);
  tableGridButtonContainer.appendChild(cheatSheetButton);
  tableGridButtonContainer.appendChild(toChallengeButton);
  tableGridButtonContainer.appendChild(addChallengeButton);
};

// const sortDataChallenges = (challengesDatas) => {
//   console.log(challengesDatas);

//   challengesDatas.forEach((challengesData) => {
//     console.log(challengesData);
//     if (challengesData.name === "basicJsChallenges") {
//       createTableGridContainer();

//       let basicChallengesData = challengesData.allChallenges;
//       console.log(basicChallengesData);
//       basicChallengesData.forEach((basicChallengeData) => {
//         innerHtmlTh = basicChallengeData.title;
//         innerHtmlThD = basicChallengeData.content;
//         console.log(
//           challengesData.name +
//             challengesData.pageLink +
//             basicChallengeData.projectLink
//         );
//         createTableGridHeader();
//         createTableGridButtons();

//         let toChallengeButton =
//           tableGridContainer.querySelector(".toChallengeButton");
//         toChallengeButton.setAttribute("dataLink", challengesData.pageLink);
//         console.log(challengesData.pageLink);

//         let basicChallengesDetails = basicChallengeData.challenge;

//         basicChallengesDetails.forEach((basicChallengesDetail) => {
//           innerHtmlTh = basicChallengesDetail.challengeTitle;
//           innerHtmlThD = basicChallengesDetail.challengeDescription;

//           createTableGridBody();
//         });
//       });
//     } else {
//       let particularChallengesDetails = challengesData.allChallenges;
//       innerHtmlTh = challengesData.title;
//       innerHtmlThD = "";

//       createTableGridHeader();
//       createTableGridButtons();

//       particularChallengesDetails.forEach((particularChallengesDetail) => {
//         innerHtmlTh = particularChallengesDetail.title;
//         innerHtmlThD = particularChallengesDetail.content;

//         createTableGridBody();
//       });
//     }
//   });

//   fetchChallengesTable.addEventListener("click", (event) => {
//     const target = event.target;

//     if (target.classList.contains("cheatSheetButton")) {
//       goToCheatSheet();
//     } else if (target.classList.contains("toChallengeButton")) {
//       let goToChallengesLink = target.getAttribute("dataLink");
//       goToChallenges(goToChallengesLink);
//     } else if (target.classList.contains("addChallengeButton")) {
//       goAddChallenge();
//     }
//   });
// };

//!!!!!!!!!!!!!!!

//   let cheatSheetButtonsTest = document.querySelectorAll(".cheatSheetButton");
//   console.log(cheatSheetButtonsTest);
//   let toChallengeButtonsTest = document.querySelectorAll(".toChallengeButton");
//   let addChallengeButtonsTest = document.querySelectorAll(
//     ".addChallengeButton"
//   );

//   cheatSheetButtonsTest.forEach((button) => {
//     button.addEventListener("click", goToCheatSheet);
//   });

//   toChallengeButtonsTest.forEach((button) => {
//     button.addEventListener("click", goToChallenges);
//   });

//   addChallengeButtonsTest.forEach((button) => {
//     button.addEventListener("click", goAddChallenge);
//   });

// let handleCheatSheetButtonsTest = () => {};
// handleCheatSheetButtonsTest();

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
