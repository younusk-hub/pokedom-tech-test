import { pokemonArray } from './data/pokemon.js';

const container = document.querySelector(".card-container");






const displayCards = (object) => {
    return ( 
        `<div class="card">
            <img src="${object.sprite}" class="card__image">
            <div class="card__content">
                <div class="card__heading">${object.name}</div>
                <div class="card__text">${object.name} (#${object.id}) is a ${object.types.join(", ")} pokemon</div>
            </div>
        </div>`
    )
};

pokemonArray.forEach(pokemon => {
    container.innerHTML += displayCards(pokemon)
});

// EXTENTION

const h1 = document.querySelector("h1")

h1.innerHTML += (`<br>
                <br>
                <label for="pokemonName">Search Pokèmon by Name:</label>
                <input id="pokemonName" type="text">

                <label for="pokemonType">Search Pokèmon by Type:</label>
                <input id="pokemonType" type="text">
                `)

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
        if (pokemon.types[0].toLowerCase().includes(event.target.value.toLowerCase()) || pokemon.types[1].toLowerCase().includes(event.target.value.toLowerCase())) {
            container.innerHTML += displayCards(pokemon)
        }
    });
};

pokemonType.addEventListener("input", searchByType)