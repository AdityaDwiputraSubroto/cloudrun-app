const express = require('express');
const app = express();

const user = {
  nama: 'Aditya Dwiputra Subroto',
  nim: '123210053',
  kelas: 'IF-F'
};

app.get('/', (req, res) => {
  res.json(user);
});


const port = process.env.PORT || 8080;


app.listen(port, () => {
  console.log(`Server berjalan di port ${port}...`);
});
