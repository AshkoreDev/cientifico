const footer = function() {
  const view = `
    <section class="footer__container">
      <article class="footer__info">
        <a href="https://www.linkedin.com/in/AshkoreDev/" target="_blank" title="Linkedin" class="footer__info--item">
          <img src="./images/icon-linkedin.svg" class="footer__info--icon" alt="Logo Linkedin"/>
        </a>
        <a href="https://github.com/AshkoreDev" target="_blank" title="GitHub" class="footer__info--item">
          <img src="./images/icon-github.svg" class="footer__info--icon" alt="Logo GitHub"/>
        </a>
        <a href="https://twitter.com/AshkoreDev" target="_blank" title="Twitter" class="footer__info--item">
          <img src="./images/icon-twitter.svg" class="footer__info--icon" alt="Logo Twitter"/>
        </a>
      </article>
      <p class="footer__info">Aracely Alba @AshkoreDev | &copy; 2022</p>
    </section>
  `;
  return view;
}



export default footer;