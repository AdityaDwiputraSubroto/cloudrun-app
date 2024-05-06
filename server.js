const express = require('express');
const app = express();


const dataGames = [
  {
    nama: 'The Witcher 3: Wild Hunt',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt'
  },
  {
    nama: 'Red Dead Redemption 2',
    developer: 'Rockstar Studios',
    publisher: 'Rockstar Games'
  },
  {
    nama: 'The Legend of Zelda: Breath of the Wild',
    developer: 'Nintendo EPD',
    publisher: 'Nintendo'
  },
  {
    nama: 'God of War (2018)',
    developer: 'Santa Monica Studio',
    publisher: 'Sony Interactive Entertainment'
  },
  {
    nama: 'Halo: Combat Evolved',
    developer: 'Bungie',
    publisher: 'Microsoft Game Studios'
  }
];


app.get('/', (req, res) => {
  res.json(dataGames);
});


const port = process.env.PORT || 8080;


app.listen(port, () => {
  console.log(`Server berjalan di port ${port}...`);
});
