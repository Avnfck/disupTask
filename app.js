import express from 'express';
import getters from './routers/getters.js';
import posters from './routers/posters.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(getters);
app.use(posters);

app.listen(port, () => {
   console.log(`Server is up on port ${port}`); 
});