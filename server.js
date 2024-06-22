// Importa i moduli necessari
const mysql = require('mysql')
const express = require('express');
const bodyParser = require('body-parser');

// Crea un'applicazione Express
const app = express();
const PORT = 3000;

// Middleware per analizzare il corpo delle richieste
app.use(bodyParser.json());

// Array per archiviare i dati dei prodotti (simulazione di database in memoria)
// let products = [
//   { id: 1, name: 'Prodotto 1', price: 10.99 },
//   { id: 2, name: 'Prodotto 2', price: 19.99 },
// ];


const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'products'
})


connection.connect((error) => {
  if (error) {
    console.log('errore di connessione al database:',error);
    return
  }
  console.log('connesso al database');
})

// Endpoint per ottenere tutti i prodotti
app.get('/products', (req, res) => {
  connection.query('SELECT * FROM products',(err, results) => {
    if (err) {
      console.error('Errore nell\'esecuzione della query:', err);
      res.status(500).send('Errore nell\'inserimento del prodotto');
      return;
    }
    res.status(201).send('Prodotti recuperati con successo')
  });
});

// Endpoint per aggiungere un prodotto
app.post('/products', (req, res) => {
  const { name, price,category } = req.body;
  const insertQuery = 'INSERT INTO products (name,price,category) VALUES (?,?,?)';
  connection.query(insertQuery,[name,price,category],(error,results) => {
    if (error) {
      console.log('errore nell\'insermiento del prodotto:',error);
      res.status(500).send()
    }
  })
  res.status(201).send('Prodotto aggiunto');
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
