import express from 'express';
import { fight } from '../utils/fight.js';
const router = express.Router();

router.post('/fight', async (req, res) => {
    const myPokemon = req.body.myPokemon;
    const enemyPokemon = req.body.enemyPokemon;
    res.send(fight());
})

export default router;