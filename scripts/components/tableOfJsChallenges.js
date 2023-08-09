const fetchAllChallengesTable = document.querySelector(
  "#fetchAllChallengesTable"
);

const getDataAllChallengesTable = () => {
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);
      let mainChallengesArrayDatas = datas.challenges;
      printAllChallengesTable(mainChallengesArrayDatas);
    })
    .catch((error) => console.error(error));
};
const printAllChallengesTable = (mainChallengesArrayDatas) => {
  let table = document.createElement("table");

  // Table Header

  let tableHeader = document.createElement("thead");
  let tableHeaderRow = document.createElement("tr");
  let tableHeaderCell = document.createElement("td");

  tableHeader.className = "tableHeader";
  tableHeaderRow.className = "tableHeaderRow";
  tableHeaderCell.className = "tableHeaderCell";

  tableHeaderRow.innerHTML = `Name`;
  tableHeaderCell.innerHTML = `Description`;

  tableHeaderRow.appendChild(tableHeaderCell);
  tableHeader.appendChild(tableHeaderRow);
  table.appendChild(tableHeader);

  // Table Body

  mainChallengesArrayDatas.forEach((mainChallengeArrayData) => {
    console.log(mainChallengeArrayData);

    let tableChallengesHeader = mainChallengeArrayData.name;
    let tableHead = document.createElement("thead");
    let tableHeadRow = document.createElement("tr");
    let tableHeadCell = document.createElement("td");

    tableHead.className = "tableHead";
    tableHeadRow.className = "tableHeadRow";
    tableHeadCell.className = "tableHeadCell";

    tableHeadRow.appendChild(tableHeadCell);
    tableHead.appendChild(tableHeadRow);
    table.appendChild(tableHead);

    let tableChallengesBody = document.createElement("tbody");
    tableHeadRow.innerHTML = `${tableChallengesHeader}`;

    let groupChallengesArrayDatas = mainChallengeArrayData.allChallenges;

    groupChallengesArrayDatas.forEach((groupChallengesArrayData) => {
      let tableRow = document.createElement("tr");
      let tableCell = document.createElement("td");
      tableRow.innerHTML = `${groupChallengesArrayData.title}`;
      tableCell.innerHTML = `${groupChallengesArrayData.content}`;

      tableChallengesBody.appendChild(tableRow);
      table.appendChild(tableChallengesBody);

      let addButtons = () => {
        let tableRowButton = document.createElement("tr");
        let tableCellButton = document.createElement("td");

        let tableCheatsheetButton = document.createElement("button");
        let tableToChallengeButton = document.createElement("button");
        let tableAddChallengeButton = document.createElement("button");

        tableRowButton.className = "tableRowButton";
        tableCellButton.className = "tableCellButton";
        tableCheatsheetButton.className = "tableCheatsheetButton";
        tableToChallengeButton.className = "tableToChallengeButton";
        tableAddChallengeButton.className = "tableAddChallengeButton";

        tableCheatsheetButton.innerHTML = "Cheatsheet";
        tableToChallengeButton.innerHTML = "See the solution";
        tableAddChallengeButton.innerHTML = "Propose your challenge";

        // tableHeadCellButton.appendChild(tableHeadCheatsheetButton);
        // tableHeadCellButton.appendChild(tableHeadToChallengeButton);
        // tableHeadCellButton.appendChild(tableAddChallengeButton);
        // tableHeadRowButton.appendChild(tableHeadCellButton);

        // table.appendChild(tableHeadRowButton);
      };

      addButtons(mainChallengeArrayData);

      if (groupChallengesArrayData) {
      }

      // Nested Table

      let listParticularChallenges = groupChallengesArrayData.challenge;
      if (listParticularChallenges) {
        listParticularChallenges.forEach((listParticularChallenge) => {
          let nestedTableRow = document.createElement("tr");
          let nestedTableCell = document.createElement("td");
          nestedTableRow.innerHTML = `${listParticularChallenge.challengeTitle}`;
          nestedTableCell.innerHTML = `${listParticularChallenge.challengeDescription}`;

          tableChallengesBody.appendChild(nestedTableRow);
          nestedTableRow.appendChild(nestedTableCell);
          tableRow.appendChild(tableCell);
        });
      } else {
        tableRow.appendChild(tableCell);
      }
    });

    fetchAllChallengesTable.appendChild(table);
    console.log(table);
  });
};

// Functionality Test for debugging
// const printAllChallengesTable = (mainChallengesArrayDatas) => {
//   console.log("Here are the main challenges:");

//   mainChallengesArrayDatas.forEach((mainChallengeArrayData) => {
//     console.log(mainChallengeArrayData.name);
//     console.log(mainChallengeArrayData.allChallenges);

//     let groupChallengesArrayDatas = mainChallengeArrayData.allChallenges;
//     console.log(groupChallengesArrayDatas);

//     console.log("Here are the groups of challenges:");
//     groupChallengesArrayDatas.forEach((groupChallengesArrayData) => {
//       console.log(
//         groupChallengesArrayData.title,
//         groupChallengesArrayData.content
//       );

//       let listParticularChallenges = groupChallengesArrayData.challenge;

//       if (listParticularChallenges) {
//         listParticularChallenges.forEach((listParticularChallenge) => {
//           console.log(
//             listParticularChallenge.challengeTitle +
//               " " +
//               listParticularChallenge.challengeDescription
//           );
//         });
//       }
//     });
//   });
//   //document.createElement
// };

getDataAllChallengesTable();
