   
  import express  from 'express';
  import bodyParser from 'body-parser';
  import pkg from 'pg'
  const { Pool } = pkg;

  const app = express();

  const port = 3000;

  app.use(bodyParser.json());

  
  const pool = new Pool ({
    user: 'jean-marcbastareaud',
    host: 'localhost',
    database: 'avaconciergerie',
    password: 'avaDtb',
    port: 5432,
  });


  app.post('/api/contacts', async (req, res) =>{

    const { name, email, phone, message } = req.body;

    try {

        const result = await pool.query(
            'INSERT INTO contacts (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, phone, message]
        );

        res.status(201).json(result.rows[0]);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error came up while saving contact information'})
    }
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  });