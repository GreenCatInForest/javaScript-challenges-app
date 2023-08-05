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
  console.log("Here are the main challenges:");

  mainChallengesArrayDatas.forEach((mainChallengeArrayData) => {
    console.log(mainChallengeArrayData.name);
    console.log(mainChallengeArrayData.allChallenges);

    let groupChallengesArrayDatas = mainChallengeArrayData.allChallenges;
    console.log(groupChallengesArrayDatas);

    console.log("Here are the groups of challenges:");
    groupChallengesArrayDatas.forEach((groupChallengesArrayData) => {
      console.log(groupChallengesArrayData);
    });
  });
  //document.createElement
};

getDataAllChallengesTable();
