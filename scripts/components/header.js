let body = document.body;

const createHeader = () => {
  let header = document.createElement("header");
  header.innerHTML = `
  <div>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>`;
  console.log(header);
};

const headerComponent = createHeader();
