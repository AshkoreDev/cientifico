import getData from './../utils/getData';

const home = async function() {
  const characters = await getData();
  const view = `
      ${characters.results.map(character => `
        <article class="character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name} Profile Picture"/>
            <h2>${character.name}</h2>
          </a>
      </article>
      `).join('')}
  `;
  return view;
}

export default home;