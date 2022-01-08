import getHash from './../utils/getHash';
import getData from './../utils/getData';

const character = async function() {
  const id = getHash();
  const oneCharacter = await getData(id);
  const view = `
    <section class="character-inner">
      <article class="character-card">
        <figure>
          <img src="${oneCharacter.image}" alt="${oneCharacter.name} Profile Picture"/>
        </figure>
        <h2>${oneCharacter.name}</h2>
      </article>
      <article class="character-card">
        <h3>Episodes:
          <span>${oneCharacter.episode.length}</span>
        </h3>
        <h3>Status:
          <span>${oneCharacter.status}</span>
        </h3>
        <h3>Species:
          <span>${oneCharacter.species}</span>
        </h3>
        <h3>Gender:
          <span>${oneCharacter.gender}</span>
        </h3>
        <h3>Origin:
          <span>${oneCharacter.origin.name}</span>
        </h3>
        <h3>Last location:
          <span>${oneCharacter.location.name}</span>
        </h3>
      </article>
    </section>
  `;
  return view;
}

export default character;