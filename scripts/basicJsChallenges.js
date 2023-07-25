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
    basicJsChallengesCard = document.createElement("div");
    basicJsChallengesCard.setAttribute("id", "basicJsChallengesCard");

    basicJsChallengesCard.innerHTML = `
    <h4>${data.title}</h4>
    <p>${data.content}</p>
    <img src="${data.image}" alt="${data.title}"/>
    <div>
    <a href="${data.projectLink}">Explore</a>
    <a href="${data.projectGithubLink}">Github</a>
    </div>
    
    `;
    basicJsChallengesContainer.appendChild(basicJsChallengesCard);
  });
};
