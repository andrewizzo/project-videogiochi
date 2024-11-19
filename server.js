// Importa i moduli necessari
const mysql = require('mysql')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// Crea un'applicazione Express
const app = express();
const PORT = 3000;
const bcrypt = require('bcryptjs')


// Middleware per analizzare il corpo delle richieste
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200', // o l'URL del tuo frontend
  methods: ['GET', 'POST', 'DELETE'], // Assicurati che DELETE sia consentito
}))

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
    res.status(200).json(results);
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//USERS

//Endpoint per ottenere tutti gli utenti
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users',(err, results) => {
    if (err) {
      console.error('Errore nell\'esecuzione della query:', err);
      res.status(500).json({ error: 'Errore nel recupero degli utenti' });
      return;
    }
    res.status(200).json(results);
  });
});

//Endpoint per la registrazione
app.post('/register',async(req,res) => {
  const {name,surname,email,password} = req.body

  if(!name || !surname || !email || !password){
    return res.status(400).json({error:'tutti i campi sono obbligatori'})
  }

  try{
    const hashedPassword = await bcrypt.hash(password,10)

    const insertUserQuery = `INSERT INTO users (name, surname, email, password) VALUES (?, ?, ? ,?)`;

    connection.query(
      insertUserQuery,
      [name, surname, email, hashedPassword],
      (error, results) => {
        if (error) {
          console.error('Errore durante l\'inserimento nel database:', error);
          return res.status(500).json({ error: 'Errore nel registrare l\'utente' });
        }

        res.status(201).json({ message: 'Utente registrato con successo!' });
      }
    );

  }catch(err){
    console.error('Errore durante la crittografia della password',err);
    res.status(500).json({error:'errore interno del server'})
    
  }
});

// Endpoint per eliminare un utente
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id; // Ottieni l'id dell'utente dai parametri della richiesta

  const deleteUserQuery = 'DELETE FROM users WHERE id = ?';

  connection.query(deleteUserQuery, [userId], (error, results) => {
    if (error) {
      console.error('Errore durante l\'eliminazione dell\'utente:', error);
      return res.status(500).json({ error: 'Errore nell\'eliminazione dell\'utente' });
    }

    if (results.affectedRows === 0) {
      // Nessun utente trovato con l'ID specificato
      return res.status(404).json({ message: 'Utente non trovato' });
    }

    res.status(200).json({ message: 'Utente eliminato con successo!' });
  });
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
