   
  import express  from 'express';
 
  import pkg from 'pg';

  import validator from 'validator';
  
  const { Pool } = pkg;

  const router = express.Router();

  
  // router.get('/test', (req, res) => {
  //   res.send('Test route is working!');
  // });
  
  
//Pool de connexion
  
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

     
    return validator.isEmail(email);
    
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

  //limitation de la longueur

  function isValidLength(value, maxLength) {
    return value.length <= maxLength;
  }


  // @ts-ignore
  router.post('/contacts', async (req, res) => {
    console.log("Request body:", req.body);

   
 
    const { name,firstname,  email, phone, message } = req.body;
    const errors = [];

     
                                //VALIDATIONS DES CHAMPS



       //nom                         
     if (!isValidName(name)){
        errors.push('Invalid name format. The name must be longer than 2 characters');
     }else if (!isValidLength(name, 100)){
      errors.push('The name  must not exceed 100 characters. ');
     }

     //prénom
     if (!isValidFirstName(firstname)){
        errors.push('Invalid firstname format. The firstname must be longer than 2 characters');
     }else if (!isValidLength(firstname, 100)) {
      errors.push('The firstname must not exceed 100 characters.')
     }

     //email
     if (!isValidEmail(email)){
           errors.push('Invalid email format.');     
        }
    
    //Numéro de téléphone
    if(!isValidPhone(phone)){
         errors.push('Invalid phone format. This field should contain only numbers and be between 10 and 15 digits long.')
    }

    //Message
    if(!isValidMessage(message)){
         errors.push('Invalid message format. The message must longer than 10 characters')
    }else if (!isValidLength(message, 500)) {
      errors.push('The message must not exceed 500 characters');
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
        console.log("Attempting to insert data into the database");
        res.status(500).json({ error: 'An error came up while saving contact information'})
    }
  });
 
   
   export default router;