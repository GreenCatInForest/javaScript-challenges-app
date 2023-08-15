let cardHolderChallengesContainers = document.querySelectorAll(
  ".cardHolderChallengesContainer"
);
const currentPageUrl = window.location.pathname;

fetch("./data/data.json")
  .then((response) => response.json())
  .then((datas) => {
    dataChallenges = datas.challenges;
    displayCardChallengesContainer(dataChallenges);
  })
  .catch((error) => console.error("Error fetching data:", error));

const displayCardChallengesContainer = (dataChallenges) => {
  const matchedDataChallenges = dataChallenges.filter((dataChallenge) =>
    currentPageUrl.includes(dataChallenge.name)
  );

  matchedDataChallenges.forEach((matchedDataChallenge) => {
    matchedDataChallenge.allChallenges.forEach((challenge) => {
      const challengesContainerCard = document.createElement("div");
      challengesContainerCard.setAttribute("class", "challengesContainerCard");

      challengesContainerCard.innerHTML = `<h4>${challenge.title}</h4>
        <p>${challenge.content}</p>
        <img src="${challenge.image}" alt="${challenge.title}"/>
        <div>
        <a href="js-showcase-foundations.vercel.app">CheatSheet</a>
        <a href="${challenge.projectLink}">Explore</a>
        <a href="${challenge.projectGithubLink}">Github</a>
        </div>`;

      cardHolderChallengesContainers.forEach((cardHolderChallengesContainer) =>
        cardHolderChallengesContainer.appendChild(challengesContainerCard)
      );
    });
  });
};
