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
  console.log(table);

  mainChallengesArrayDatas.forEach((mainChallengeArrayData) => {
    let tableChallengesHeader = mainChallengeArrayData.name;
    let tableHead = document.createElement("thead");
    tableHead.innerHTML = `${tableChallengesHeader}`;
    table.appendChild(tableHead);
    console.log(mainChallengeArrayData);
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
