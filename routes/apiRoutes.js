   
  import express  from 'express';
 
  import pkg from 'pg';
  
  const { Pool } = pkg;

  const router = express.Router();

  

  

  
  const pool = new Pool ({
    user: 'jean-marcbastareaud',
    host: 'localhost',
    database: 'avaconciergerie',
    password: 'avaDtb',
    port: 5432,
  });

                          //FONCTIONS DE VALIDATION ET DE VERIFICATION

  //email

  function isValidEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
  }

  //numéro de téléphone 

  function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
    
  }

  //le nom
  function isValidName(name) {
    return name.trim().length > 2;
    
  }
  //le prénom
  function isValidFirstName(firstname) {
    return firstname.trim().length > 2;
  }
  // le messsage 
  function isValidMessage(message) {
    return message.trim().length >10;
    
  }
  // @ts-ignore
  router.post('/contacts', async (req, res) => {
     const { name,firstname,  email, phone, message } = req.body;
      
    const errors = [];

     
                                //VALIDATIONS DES CHAMPS
       //nom                         
     if (!isValidName(name)){
        errors.push('Invalid name format. The name must be longer than 2 characters');
     }

     //prénom
     if (!isValidFirstName(firstname)){
        errors.push('Invalid firstname format. The firstname must be longer than 2 characters');
     }

     //email
     if (!isValidEmail(email)){
         errors.push('Invalid email format.')     
        }
    
    //Numéro de téléphone
    if(!isValidPhone(phone)){
         errors.push('Invalid phone format. This field should contain only numbers and be between 10 and 15 digits long.')
    }

    //Message
    if(!isValidMessage(message)){
         errors.push('Invalid message format. The message must longer than 10 characters')
    }
    
    if(errors.length > 0) {
        return res.status(400).json({errors});
    }
    try {

        const result = await pool.query(
            'INSERT INTO contacts (name, firstname,  email, phone, message) VALUES ($1, $2, $3, $4, $5) RETURNING name, firstname, email, phone, message',
            [name, firstname,  email, phone, message]
        );

        res.status(201).json(result.rows[0]);
    }catch (error) {
        console.error('Error inserting into database', error);
        res.status(500).json({ error: 'An error came up while saving contact information'})
    }
  });
 
   
   export default router;