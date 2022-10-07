import getHash from './../utils/getHash';
import getData from './../utils/getData';

const character = async function() {
  const id = getHash();
  const oneCharacter = await getData(id);
  const view = `
    <section class="character">
      <article class="character__info">
        <figure>
          <img src="${oneCharacter.image}" alt="${oneCharacter.name} Profile Picture" class="character__info--img" width="280" height="280"/>
        </figure>
      </article>
      <article class="character__info">
        <h2 class="character__info--title">${oneCharacter.name}</h2>
        <h3 class="character__info--item">Episodes:
          <span class="character__info--res">${oneCharacter.episode.length}</span>
        </h3>
        <h3 class="character__info--item">Status:
          <span class="character__info--res">${oneCharacter.status}</span>
        </h3>
        <h3 class="character__info--item">Species:
          <span class="character__info--res">${oneCharacter.species}</span>
        </h3>
        <h3 class="character__info--item">Gender:
          <span class="character__info--res">${oneCharacter.gender}</span>
        </h3>
        <h3 class="character__info--item">Origin:
          <span class="character__info--res">${oneCharacter.origin.name}</span>
        </h3>
        <h3 class="character__info--item">Last location:
          <span class="character__info--res">${oneCharacter.location.name}</span>
        </h3>
      </article>
    </section>
  `;
  return view;
}

export default character;