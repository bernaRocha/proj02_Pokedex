const express = require("express");
const path = require('path')
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs"); // Para renderizar o EJS
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let pokemons = [
  {
    numero: 04,
    nome: 'charmander',
    tipo: 'fogo',
    imagem: './img/004.png',
    descricao: 'fogo',
    altura: 1,
    peso: 0.5,
    categoria: 'fogo',
    habilidade: 'cospe fogo'
  },
  { 
    numero: 05,
    nome: 'charmeleon',
    tipo: 'fogo',
    imagem: './img/005.png',
    descricao: 'fogo',
    altura: 1.1,
    peso: 0.6,
    categoria: 'fogo',
    habilidade: 'cospe fogo'
   },
   { 
    numero: 06,
    nome: 'charizard',
    tipo: 'fogo', 
    imagem: './img/006.png',
    descricao: 'fogo',
    altura: 1, 
    peso: 1.2,
    categoria: 'fogo',
    habilidade: 'cospe fogo'
   }
]

app.get("/", (req, res) => {
  res.render("index", 
  {
    pokemons
  });
  
});

app.post('/cadastro', (req, res) => {
  const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body;
    pokemons.push({
      nome: nome, 
      numero: numero,
      tipo: tipo, 
      imagem: imagem, 
      descricao:descricao, 
      altura: altura, 
      peso: peso,
      categoria: categoria,
      habilidade: habilidade
    });
    res.redirect('/')
   
})


app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});


app.get('/detalhes/:id', (req, res) => { // renderiza a rotadetalhes
  res.render('detalhes')
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));