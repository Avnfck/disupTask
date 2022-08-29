import express from 'express';
import { fetchData } from '../utils/fetchData.js';
import { sortPokemons } from '../utils/sortPokemons.js';
const router = express.Router();
const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

router.get('/', async (req, res) => {
        const data = await fetchData(url);
        const names = data.map(el => el.name);
        res.send(names);
});

router.get('/:pokemonName', async (req, res) => {
    const _name = req.params.pokemonName;
    const data = await fetchData(url);
    const pokemon = data.filter(el => el.name === _name);
    const returnPokemon = {
        image: pokemon[0].img,
        elementType: pokemon[0].type,
        spawnChance: pokemon[0].spawn_chance
    }
    res.send(returnPokemon);
})

router.get('/weak/:typeName', async (req, res) => {
    const _typeName = req.params.typeName;
    const data = await fetchData(url);
    const pokemons = data.filter(el => el.weaknesses.indexOf(_typeName) > -1);
    res.send(pokemons);
})

router.get('/strong/:typeName', async (req, res) => {
    const _typeName = req.params.typeName;
    const data = await fetchData(url);
    const returnPokemons = sortPokemons(_typeName, data)
    res.send(returnPokemons);
})

export default router;