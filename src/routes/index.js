import header from './../templates/header';
import footer from './../templates/footer';
import home from './../pages/home';
import character from './../pages/character';
import error404 from './../pages/error404';

import getHash from './../utils/getHash';
import resolveRoutes from './../utils/resolveRoutes';


const routes = {
  '/': home,
  '/:id': character,
  '/contact': 'Contact'
};

const router = async function() {
  const headerSection = document.getElementById('header') || null;
  const charactersSection = document.getElementById('characters') || null;
  const footerSection = document.getElementById('footer') || null;


  headerSection.innerHTML = await header();
  footerSection.innerHTML = await footer();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : error404;
  charactersSection.innerHTML = await render();
};

export default router;