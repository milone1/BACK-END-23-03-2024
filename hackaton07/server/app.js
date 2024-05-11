const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
const offset = 0;
let listPokemons = []

app.use(bodyparser.json())
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pokedex', async (req, res) => {
  listPokemons = []
  // console.log('1')
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)

  const response = await data.json();

  // console.log(response.results.map(e => e.name))

  for (const pokemon of response.results) {
    const pokeDetail = await fetch(pokemon.url)

    const pokeData = await pokeDetail.json();

    listPokemons.push({height: pokeData.height, weight: pokeData.weight, name: pokeData.name, img_path: pokeData.sprites.other['official-artwork'].front_default})

  }

  // console.log(listPokemons)
  res.status(200).json(listPokemons)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})