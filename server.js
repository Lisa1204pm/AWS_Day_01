const express = require("express");
const app = express();
// Before the other routes
app.use(express.static("build"))

app.get("/api/pokemons", (req, res) => {
  console.log("GET /api/pokemons")
  res.send([
    {
      id: 1,
      name: "Pikachu",
      type: "electric ⚡️",
      level: 99,
      image: "/pikachu.webp"
    },
    {
      id: 2,
      name: "Charmander",
      type: "fire 🔥",
      level: 50,
      image: "/charmander.webp"
    },
    {
      id: 3,
      name: "Squirtle",
      type: "water 💧",
      level: 50,
      image: "/squirtle.webp"
    }
  ])
});

app.post("/api/pokemons", (req, res) => {
  const data = req.body
  console.log("POST /api/pokemons", data)
  data.id = pokemons.length+1
  pokemons.push(data)
  res.send(data)
})

app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))
