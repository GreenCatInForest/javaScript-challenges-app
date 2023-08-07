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

  mainChallengesArrayDatas.forEach((mainChallengeArrayData) => {
    // console.log(mainChallengeArrayData);

    // Table Header structure

    let tableChallengesHeader = mainChallengeArrayData.name;
    let tableHead = document.createElement("thead");
    let tableHeadRow = document.createElement("tr");
    let tableHeadCell = document.createElement("td");

    tableHeadRow.appendChild(tableHeadCell);
    tableHead.appendChild(tableHeadRow);
    table.appendChild(tableHead);

    // Table Inner Block structure
    let tableChallengesBody = document.createElement("tbody");
    let tableRow = document.createElement("tr");
    let tableCell = document.createElement("td");

    tableRow.appendChild(tableCell);
    tableChallengesBody.appendChild(tableRow);
    table.appendChild(tableChallengesBody);

    tableHeadRow.innerHTML = `${tableChallengesHeader}`;
    tableRow.innerHTML = `${mainChallengeArrayData.allChallenges}`;

    fetchAllChallengesTable.appendChild(table);
    console.log(table);
  });
};

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
