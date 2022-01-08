const header = function() {
  const view = `
      <section class="navbar">
        <a href="/cientifico">
          <img src="./src/img/logo.png" alt="Rick and Morty Logo" width="250" height="82" loading="lazy"/>
        </a>
        <nav>
          <a href="#/about/">About</a>
        </nav>
      </section>
  `;
  return view;
}

export default header;