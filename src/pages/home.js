import getData from './../utils/getData';

const home = async function() {
  const characters = await getData();
  const view = `
    ${characters.results.map(character => `
      <article class="character__card">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name} Profile Picture" class="character__card--img" width="280" height="280"/>
          <h2 class="character__card--title">${character.name}</h2>
        </a>
    </article>
    `).join('')}
  `;
  return view;
}

export default home;