fetch("./data/basicJsChallenges.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displaybasicJSChallenges(data);
  })
  .catch((error) => console.error("Error fetching data:", error));

let displaybasicJSChallenges = (data) => {
  basicJsChallengesContainer;
};
