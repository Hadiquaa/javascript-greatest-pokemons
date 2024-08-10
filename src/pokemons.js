// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => pokemon.type.includes('Fire'));
}

console.log(getAllFirePokemons(pokemons));
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(pokemons) {
    if (pokemons.length === 0) return 0;
    let shortest = pokemons[0];
    for (let i = 1; i < pokemons.length; i++) {
        if (pokemons[i].height < shortest.height) {
            shortest = pokemons[i];
        }
    }
    return shortest.name;
}

console.log(shortestPokemon(pokemons));

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(pokemons) {
    if (pokemons.length === 0) return 0;
    let sumCandy = pokemons.reduce((sum, pokemon) => sum + (pokemon.hasOwnProperty('candy_count') ? (pokemon.candy_count === '' ? 0 : pokemon.candy_count) : 0), 0);
    let average = sumCandy / pokemons.length;
    return parseFloat(average.toFixed(2))
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemons) {
    if (pokemons.length === 0) return 0;
    let groundPokemons = pokemons.filter(pokemon => pokemon.type.includes('Ground'));
    let urls = groundPokemons.slice(0, 10).map(pokemon => pokemon.img);
    return urls;
}

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemons) {
    if (pokemons.length === 0) return 0;
    let pikachu = pokemons.filter(pokemon => pokemon.name === 'Pikachu');
    let pikachuWeight = parseFloat(pikachu[0].weight);
    let heavierPokemons = pokemons.filter(pokemon => parseFloat(pokemon.weight) > pikachuWeight);
    return heavierPokemons.map(pokemon => pokemon.name);
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokemons) {
    if (pokemons.length === 0) return [];
    let sortedPokemons = [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
    return sortedPokemons.slice(0, 20).map(pokemon => pokemon.name);
}
console.log(orderAlphabetically(pokemons));

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

function strongPokemons(pokemons) {
    if (pokemons.length === 0) return [];
    let strongPokemons = pokemons.filter(pokemon => pokemon.weaknesses.length === 1);
    return strongPokemons.slice(0, 15).map(pokemon => pokemon.name);
}
