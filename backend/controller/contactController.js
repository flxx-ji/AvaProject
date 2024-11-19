//Importing pg package to interact with PostgresSql
import pkg from 'pg';
//Importing validator library for email validation
import validator from 'validator';

const {Pool} = pkg;

 
//Connection pool configuration for PostgresSql database
  
const pool = new Pool ({
    user: 'jean-marcbastareaud', //PostgresSQL username
    host: 'localhost',           //Database host, who's here localhost
    database: 'avaconciergerie', //Name of the database
    password: 'avaDtb',          //Database password
    port: 5432,                  //Database port by default for PostfgreSQL
  });

                          //VALIDATION AND  VERIFICATION FUNCTIONS

  //Validates the email if this one has a valid format

  function isValidEmail(email) {
     return validator.isEmail(email);
   }

  //Validates the phone number if it's contain only digits and has between 10 and 15 characters

  function isValidPhone(phone) {
    //Regular expression for phone numbers
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
    
  }

  //Validates if the name has more than 2 characters
  function isValidName(name) {
    return name.trim().length > 2;
    
  }
  //Validates if the firstname has more than 2 characters
  function isValidFirstName(firstname) {
    return firstname.trim().length > 2;
  }
  // Validares if the message has more than 10 characters
  function isValidMessage(message) {
    return message.trim().length >10;
    
  }

  //Checks if the value does not exceed the specified lenght

  function isValidLength(value, maxLength) {
    return value.length <= maxLength;
  }


  //Main function to handle contact creation
  export const createContact = async (req, res) => {
    console.log("Request body:", req.body); //log the request body for debugging

    //Extact date from request body
    const {name, firstname, email, phone, message} = req.body;
    //Initialize an empty array to collect validation errors
    const errors = [];


                            //FIELD VALIDATION



       //Validate name                       
       if (!isValidName(name)){
        errors.push('Invalid name format. The name must be longer than 2 characters');
     }else if (!isValidLength(name, 100)){
      errors.push('The name  must not exceed 100 characters. ');
     }

     //Validate firstname
     if (!isValidFirstName(firstname)){
        errors.push('Invalid firstname format. The firstname must be longer than 2 characters');
     }else if (!isValidLength(firstname, 100)) {
      errors.push('The firstname must not exceed 100 characters.')
     }

     //Validate email
     if (!isValidEmail(email)){
           errors.push('Invalid email format.');     
        }
    
    //Validate phone number
    if(!isValidPhone(phone)){
         errors.push('Invalid phone format. This field should contain only numbers and be between 10 and 15 digits long.')
    }

    //Validate message
    if(!isValidMessage(message)){
         errors.push('Invalid message format. The message must longer than 10 characters')
    }else if (!isValidLength(message, 500)) {
      errors.push('The message must not exceed 500 characters');
    }
    
    //If there are validation errors, send a 400 response with the errors
    if(errors.length > 0) {
        return res.status(400).json({errors});
    }
    try {
        // Insert the contact data into the 'contacts' table in PostegreSQL
        const result = await pool.query(
            'INSERT INTO contacts (name, firstname,  email, phone, message) VALUES ($1, $2, $3, $4, $5) RETURNING name, firstname, email, phone, message',
            [name, firstname,  email, phone, message]
        );
        //Send the inserted contact data as a  JSON response with a 201 status code 
        res.status(201).json(result.rows[0]);
    }catch (error) {
        //Log the error and return a 500 response if there is an issue with the database
        console.error('Error inserting into database', error);
        console.log("Attempting to insert data into the database");
        res.status(500).json({ error: 'An error came up while saving contact information'})
    }
  };
 



  