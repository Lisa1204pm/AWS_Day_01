const express = require("express");
const app = express();
// Before the other routes
app.use(express.static("build"))

app.use(express.json())
const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    level: 99,
    type: "electric ⚡️"
  },
  {
    id: 2,
    name: "Charmander",
    level: 82,
    type: "fire 🔥"
  },
  {
    id: 3,
    name: "Squirtle",
    level: 50,
    type: "water 💧"
  }
]
app.get("/api/pokemons", (req, res) => {
  console.log("server:: GET /api/pokemons", pokemons)
  res.send(pokemons)
});

app.post("/api/pokemons", (req, res) => {
  const data = req.body
  data.id = pokemons.length+1
  console.log("server:: POST /api/pokemons", data)
  pokemons.push(data)
  res.send(data)
})

app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))
