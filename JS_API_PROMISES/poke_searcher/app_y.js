/*
document.getElementById('search-button').addEventListener('click', () => {
	const inputValue = document.getElementById('search-input').value.trim().toLowerCase();

clearPokemonData();

if(inputValue === 'red') {
	alert('Pokemon not found');
	return;
}
fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
	.then(response => {
		if(!response.ok) {
			throw new Error(`Pokemon not found`);
		}
		return response.json();
	})
	.then(data => {
		displayPokemonData(data);
	})
	.catch(error => {
		if(inputValue === 'red') {
			alert('Pokemon not found');
		} else {
			console.error(error);
		}
	});
});
function clearPokemonData() {
	document.getElementById('pokemon-name').textContent = '';
	document.getElementById('pokemon-id').textContent='';
	document.getElementById('weight').textContent='';
	document.getElementById('height').textContent='';
	document.getElementById('types').textContent='';
	document.getElementById('hp').textContent='';
	document.getElementById('attack').textContent='';
	document.getElementById('defense').textContent='';
	document.getElementById('special-attack').textContent='';
	document.getElementById('special-defense').textContent='';
	document.getElementById('speed').textContent='';
}
function displayPokemonData(data) {
	document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
	document.getElementById('pokemon-id').textContent = `#${data.id}`;
	document.getElementById('weight').textContent=`Weight: ${data.weight}`;
	document.getElementById('height').textContent=`Height: ${data.height}`;
	
	const typesElement = document.getElementById('types');
	data.types.forEach(type => {
		const typeElement = document.createElement('div');
		typeElement.textContent = type.type.name.toUpperCase();
		typesElement.appendChild(typeElement);
	});
	data.stats.forEach(stat => {
		const statElement = document.getElementById(stat.stat.name);
		statElement.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
	});
	const imgElement = document.createElement('img');
	imgElement.src= data.sprites.front_default;
	imgElement.alt= data.name;
	document.getElementById('pokemon-image').appendChild(imgElement);
}
*/
const pokemonID = document.getElementById('pokemon-id');
const pokemonName = document.getElementById('pokemon-name');
const spriteContainer = document.getElementById('sprite-container');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const getPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await response.json();

    // Set Pokémon info
    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonID.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    spriteContainer.innerHTML = `
      <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
    `;

    // Set stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    // Set types
    types.innerHTML = data.types
      .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
      .join('');
  } catch (err) {
    resetDisplay();
    alert('Pokémon not found');
    console.log(`Pokémon not found: ${err}`);
  }
};

const resetDisplay = () => {
  const sprite = document.getElementById('sprite');
  if (sprite) sprite.remove();

  // reset stats
  pokemonName.textContent = '';
  pokemonID.textContent = '';
  types.innerHTML = '';
  height.textContent = '';
  weight.textContent = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
};

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  getPokemon();
});
