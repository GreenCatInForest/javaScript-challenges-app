let fetchChallengesTable = document.querySelector("#fetchAllChallengesTable");

fetch("./data/data.json")
  .then((response) => response.json())
  .then((datas) => {
    let dataChallenges = datas.challenges;
    // sortDataChallenges(dataChallenges);
    // createButtonFunctions();
    testDataChallenges(dataChallenges);
  })
  .catch((error) => console.error(error));

//Data display at grid form

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

createButtonFunctions = () => {
  let goToCheatSheet = () => {
    window.open(buttonLink);
  };

  let goToChallenges = () => {
    window.open(goToChallengesLink);
  };

  let goAddChallenge = () => {
    window.open(buttonLink);
  };

  fetchChallengesTable.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("cheatSheetButton")) {
      goToCheatSheet();
    } else if (target.classList.contains("toChallengeButton")) {
      goToChallenges();
    } else if (target.classList.contains("addChallengeButton")) {
      goAddChallenge();
    }
  });
};

createTableGridContainer();

const testDataChallenges = (challengesDatas) => {
  console.log(challengesDatas);
  challengesDatas.forEach((challengesData) => {
    goToChallengesLink = challengesData.pageLink;
    innerHtmlTh = challengesData.title;
    createTableGridHeader();
    createTableGridButtons();
    createButtonFunctions();
  });
};

// const sortDataChallenges = (challengesDatas) => {
//   console.log(challengesDatas);
//   createTableGridContainer();

//   challengesDatas.forEach((challengesData) => {
//     if (challengesData.name === "basicJsChallenges") {
//       console.log(challengesData);
//       innerHtmlTh = challengesData.title;
//       innerHtmlThD = challengesData.content;
//       goToChallengesLink = challengesData.pageLink;
//       buttonLink = challengesData.cheatSheetLink;
//       console.log(challengesData.name + goToChallengesLink + buttonLink);
//       createTableGridHeader(challengesData);
//       createTableGridButtons(challengesData);
//     } else {
//       console.log(challengesData);
//       innerHtmlTh = challengesData.title;
//       innerHtmlThD = challengesData.content;
//       goToChallengesLink = challengesData.pageLink;
//       buttonLink = challengesData.cheatSheetLink;
//       console.log(challengesData.name + goToChallengesLink + buttonLink);
//       createTableGridHeader(challengesData);
//       createTableGridButtons(challengesData);
//     }
//     createButtonFunctions(); // Move this call outside the loop
//   });
// };
// for content creating

//   challengesDatas.forEach((challengesData) => {
//     console.log(challengesData);
//     if (challengesData.name === "basicJsChallenges") {
//       let basicChallengesData = challengesData.allChallenges;
//       console.log(basicChallengesData);

//       basicChallengesData.forEach((basicChallengeData) => {
//         innerHtmlTh = basicChallengeData.title;
//         innerHtmlThD = basicChallengeData.content;
//         goToChallengesLink = challengesData.pageLink;
//         buttonLink = challengesData.cheatSheetLink;
//         console.log(
//           challengesData.name +
//             challengesData.content +
//             basicChallengeData.projectLink +
//             buttonLink
//         );
//         createTableGridHeader();
//         createTableGridButtons();

//         let toChallengeButton =
//           tableGridContainer.querySelector(".toChallengeButton");
//         toChallengeButton.setAttribute("dataLink", goToChallengesLink);
//         console.log(challengesData.pageLink);

//         let basicChallengesDetails = basicChallengeData.challenge;

//         basicChallengesDetails.forEach((basicChallengesDetail) => {
//           innerHtmlTh = basicChallengesDetail.challengeTitle;
//           innerHtmlThD = basicChallengesDetail.challengeDescription;

//           createTableGridBody();
//         });
//       });
//     } else {
//       let otherChallenges = [];
//       challengesDatas.forEach((challengesData) => {
//         if (challengesData.name !== "basicJsChallenges") {
//           otherChallenges.push(challengesData);
//           console.log(otherChallenges);
//         }
//       });
//       console.log(challengesData);
//       challengesDatas.forEach((challengesData) => {
//         console.log(challengesData);
//       });

//       let particularChallengesDetails = challengesData.allChallenges;
//       innerHtmlTh = challengesData.title;
//       console.log(innerHtmlTh);
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
// };

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
