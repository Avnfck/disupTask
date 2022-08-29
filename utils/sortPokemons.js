export const sortPokemons = (_typeName, data) => {
    const pokemons = data.filter(el => el.type.indexOf(_typeName) > -1);
    let count = {};
    pokemons.forEach(el => {
        el.weaknesses.forEach(weakness => {
            if(!count[weakness]){
                count[weakness] = 1;
            } else {
                count[weakness] += 1;
            }
        })
    })
    let strongs = [];
    Object.keys(count).forEach(el => {
        if (count[el] == pokemons.length) {
            strongs.push(el);
        }
    })
    let returnPokemons = [];
    strongs.forEach(el => {
        const pokemonSet = data.filter(pokemon => pokemon.type.indexOf(el) > -1);
        returnPokemons = returnPokemons.concat(pokemonSet);
    })
    return returnPokemons.filter((object, index, array) => array.indexOf(object) === index)
}