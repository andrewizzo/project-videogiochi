// Importa i moduli necessari
const mysql = require('mysql')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// Crea un'applicazione Express
const app = express();
const PORT = 3000;


// Middleware per analizzare il corpo delle richieste
app.use(bodyParser.json());
app.use(cors())

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
      res.status(500).json({ error: 'Errore nel recupero dei prodotti' });
      return;
    }
    res.status(201).json(results);
  });
});


app.get('/products/playstation',(req,res) => {
  const queryPlatstation = 'SELECT * FROM products WHERE category = ?';
  const categoryPlaystation = 'playstation';

  connection.query(queryPlatstation , [categoryPlaystation],(error,results) => {
    if (error) {
      console.log('prodotti non trovati',error);
      results.status(500).json({error:'errore nel trovare i prodotti della categoria playstation'})
      return;
    }
    res.status(200).json(results)
  })
})

app.get('/products/xbox',(req,res) => {
  const queryXbox = 'SELECT * FROM products WHERE category = ?'
  const categoryXbox = 'xbox';

  connection.query(queryXbox,[categoryXbox],(error,results) => {
    if (error) {
      console.log('prodotti non trovati',error);
      results.status(500).json({error:'errore nel trovare i prodotti della categoria xbox'})
      return
    }
    res.status(200).json(results)
  })
})

// Endpoint per aggiungere un prodotto
app.post('/products', (req, res) => {
  const { name, price,category,condizione } = req.body;
  const insertQuery = 'INSERT INTO products (name,price,category,condizione) VALUES (?,?,?,?)';
  connection.query(insertQuery,[name,price,category,condizione],(error,results) => {
    if (error) {
      console.log('errore nell\'insermiento del prodotto:',error);
      res.status(500).json({ error: 'Errore nell\'inserimento del prodotto' })
    }
  })
  res.status(201).json({message:'Prodotto aggiunto'});
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
