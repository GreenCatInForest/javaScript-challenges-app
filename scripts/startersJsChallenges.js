let allNavItems = document.querySelectorAll(".navStartersJsChallenges");
console.log(allNavItems);
let allChallengesItems = document.querySelectorAll(".challengeSection");
console.log(allChallengesItems);

let showChallenge = (event) => {
  let clickedNavItem = event.target;
  let clickedNavItemId = clickedNavItem.id.substring(3);

  allChallengesItems.forEach((challengesItem) => {
    if (clickedNavItemId.toLowerCase() === challengesItem.id.toLowerCase()) {
      challengesItem.classList.add("startersJsChallengesVisible");
    } else challengesItem.classList.remove("startersJsChallengesVisible");
  });
};

// let showChallenge = () => {
//   if variablesJsDataTypes.classList.replace(
//     "startersJsChallengesHidden",
//     "startersJsChallengesVisible"
//   );
//   operatorsJs.classList.replace(
//     "startersJsChallengesHidden",
//     "startersJsChallengesVisible"
//   );
// };

navVariablesJsDataTypes.addEventListener("click", showChallenge);
navOperatorsJs.addEventListener("click", showChallenge);
navConditionalsJs.addEventListener("click", showChallenge);
navLoopsJs.addEventListener("click", showChallenge);
navFunctionsJs.addEventListener("click", showChallenge);
