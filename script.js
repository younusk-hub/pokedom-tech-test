import { pokemonArray } from './data/pokemon.js';

const container = document.querySelector(".card-container");

const displayCards = (object) => {
    return ( 
        `<div class="card">
            <img src="${object.sprite}" class="card__image">
            <div class="card__content">
                <div class="card__heading">${object.name[0].toUpperCase()+object.name.substring(1)}</div>
                <div class="card__text">${object.name[0].toUpperCase()+object.name.substring(1)} (#${object.id}) is a ${object.types.join(", ")} pokemon.</div>
            </div>
        </div>`
    )
};

pokemonArray.forEach(pokemon => {
    container.innerHTML += displayCards(pokemon)
});

// EXTENSION

const h1 = document.querySelector("h1")
h1.remove()

const body = document.querySelector("body")

const inputSection = document.createElement("div")

inputSection.innerHTML += `
<h1>PokéDom- gotta code 'em all!</h1>
<br>
<br>
<label for="pokemonName">Search Pokèmon:</label>
<input id="pokemonName" type="text" style="height: 3vh">

<label for="pokemonType">Search Pokèmon by Type:</label>
<input id="pokemonType" type="text" style="height: 3vh">
`
body.insertBefore(inputSection, body.firstChild);


const pokemonName = document.getElementById("pokemonName")
const pokemonType = document.getElementById("pokemonType")

const searchByName = (event) => {
    container.innerHTML = "";
    pokemonArray.forEach(pokemon => {
        if (pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())) {
            container.innerHTML += displayCards(pokemon)
        } 
    });
};

pokemonName.addEventListener("input", searchByName)

const searchByType = (event) => {
    container.innerHTML = "";
    pokemonArray.forEach(pokemon => {
        for (let i = 0; i < pokemon.types.length; i++) {
            if (pokemon.types[i].includes(event.target.value.toLowerCase())) {
                container.innerHTML += displayCards(pokemon)
            }
        }
    });
    if (event.target.value === "") {
        container.innerHTML = "";
        pokemonArray.forEach(pokemon => {
            container.innerHTML += displayCards(pokemon)
        });
    }
};

pokemonType.addEventListener("input", searchByType)