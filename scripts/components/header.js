let header = document.querySelector("header");

const createHeaderTitle = () => {
  let headerTitle = document.createElement("div");
  headerTitle.innerHTML = `
  <h1>
  <a href="/index.html">Vanilla JavaScript</a>
  </h1>`;
  header.appendChild(headerTitle);
};

const headerTitleComponent = createHeaderTitle();

// if append to body - shows underneath
// const createHeader = () => {
//   let header = document.createElement("header");
//   header.innerHTML = `
//   <h1>
//   <a href="/index.html">Vanilla JavaScript</a>
//   </h1>`;
//   document.body.appendChild(header);
// const headerComponent = createHeader();
// };

const createHeaderNavigation = () => {
  let headerNav = document.createElement("nav");
  headerNav.innerHTML = `
  <ul>
          <li><a href="/basicJsChallenges.html">Basic JS Challenges</a></li>
          <li><a href="/algorithmicChallenges.html">Algorithmic Challenges</a>
          <ul class="topNavHidden">
            <li>Interactive Fibonacci Series Generator</li>
            <li>Find Missing Number</li>
          </ul></li>
          <li><a href="/asynchronousChallenges.html">Asynchronous JavaScript</a></li>
          <li><a href="/errorHandlingChallenges.html">Error Handling</a></li>
          <li><a href="/functionalProgrammingChallenges.html">Functional Programming</a></li>
        </ul>`;
  headerNav.classList.add("topNav");
  header.appendChild(headerNav);
};

const headerNavigationComponent = createHeaderNavigation();
