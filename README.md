# disupTask

To run program you need:
1. Installed node.js
2. Postman
3. Browser

1. Open folder in your IDE and use 'npm install'
2. run program with 'node app.js'
3. in bowser under localhost:3000 you can check GET endpoints:
 - localhost:3000 -  returns list of pokemon names
 - /:pokemonName -> returns image, element type, spawn chance
 - /weak/:typeName -> returns all pokemons that are week to those element type
 - /strong/:typeName -> returns all pokemons that are strong to those element type

4. You need a software like Postman to generate body and send post request for /fight endpoint. Body is an object:
 - "myPokemon": "name",
 - "enemyPokemon": "name"
