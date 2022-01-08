const header = function() {
  const view = `
      <section class="navbar">
        <a href="/cientifico">
          <img src="./images/logo.png" alt="Rick and Morty Logo" width="250" height="82"/>
        </a>
        <nav>
          <a href="#/about/" class="nav--item">About</a>
        </nav>
      </section>
  `;
  return view;
}

export default header;