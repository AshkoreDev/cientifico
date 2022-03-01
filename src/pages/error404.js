const error404 = function() {
  const view = `
    <section class="error404">
    <h2 class="error404__title">Error 404</h2>
      <figure>
        <img src="./images/imagen-404.png" alt="Error 404 image" width="300" height='374'/>
      </figure>
    </section>
  `;

  return view;
}

export default error404;