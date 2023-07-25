let basicJsChallengesContainer = document.querySelector(
  "#basicJsChallengesContainer"
);

fetch("./data/basicJsChallenges.json")
  .then((response) => response.json())
  .then((datas) => {
    console.log(datas);
    displaybasicJSChallenges(datas);
  })
  .catch((error) => console.error("Error fetching data:", error));

let displaybasicJSChallenges = (datas) => {
  datas.forEach((data) => {
    let basicJsChallengesCard = document.createElement("div");
    basicJsChallengesCard.innerHTML = `
        <img src="${data.image}"/>`;
    basicJsChallengesContainer.appendChild(basicJsChallengesCard);
  });
};
