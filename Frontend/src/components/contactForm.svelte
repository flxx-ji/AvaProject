<script>
     //Importing necessary functions and libraries
     //'onMount' is used for running code when the component is mounted.
     //'axios' will handle HTTP requests to send form data to the backend
     import { onMount } from 'svelte';
     import axios from 'axios';


     //Declaring variables to bind form inputs and display messages
     let name = '';
     let firstname = '';
     let email = '';
     let phone = '';
     let message = '';
     let successMessage = '';
     let errorMessage = '';

    //Function to clear the form fields after a succefull submission
     function clearForm()  {
        name = '';
        firstname = '';
        email = '';
        phone = '';
        message = '';
     }


    //Function to handle form submission
     async function submitContact(event) {
        event.preventDefault();// Prevent defautl used here to refresh the page after submission
 
    //Resetting messages
        successMessage = '';
        errorMessage = '';

        try {
            //Sending form data to the backend using a POST request
            const response = await axios.post('/api/contacts', { name, firstname,  email, phone, message});
            
            //Check if the contact was successfully created
            if (response.status === 201) {
                successMessage = 'Contact information saves successfully';
                clearForm();

                //Clear the congrats message after 3 secondes
                setTimeout(() => {
                    successMessage = '';
                }, 3000);

            } else {
                //Error handling if the contact saving fails
                throw new Error('Failed to save contact information');
            }
        } catch (error) {
            //Display an error message if submission fails
            errorMessage = 'An error occured while submitting the form';
        }
     }
 </script>

<main>
    <!--Main heading for the contact form-->
     <h1>Contact </h1>

    <!--Form element to capture user contact information-->
     <form class="formulaire" on:submit|preventDefault={submitContact}>
        <!--Name fielc with data binding to 'name' variable -->
        <div>
            <label>
                <div class="fieldName">Name</div>
                
                <input type= "text" bind:value={name} required />
            </label>
        </div>

        <!--Firstname field with data binding to 'firstname' variable-->
        <div>
            <label>
                <div class="fieldName">Firstname</div> 
                
                <input type= "text" bind:value={firstname} required />
            </label>
        </div>
        <!-- Phone field with data binding to 'phone' variable-->
       <div>
        <label>
            <div class="fieldName">Email</div> 
            
            <input type="email" bind:value={email} required />
        </label>
       </div>
        
       <!--Message field (textarea) with data binding to 'message'variable-->
      <div>
        <label>
            
            <div class="fieldName">Phone</div> 
            
            <input type="text" bind:value={phone} required />
        </label>
      </div>
        
       <div>
        <label>
            <div class="fieldName"> Message</div> 
           
             <textarea class= message bind:value={message} required></textarea>
        </label>
       </div>
       <!-- Submit button to send the form data-->
       <div class="submit">
         <button type="submit">Submit</button>
       </div>
       

    </form>
    <!--Display success or error messages based on form submission-->
    {#if successMessage}
       <p class="success">{successMessage}</p>
    {/if}
    {#if errorMessage}
       <p class="error">{errorMessage}</p>
    {/if}       
       
</main>
<style>
    /* Styling for the main heading */
    h1 {
        color:#fff;
        font-size: 50px;
        margin-bottom: 20px;
       }


    /*Styling for the form container*/
    .formulaire {
        align-items: center;
        background-color: rgba(255, 255, 255, 0.9);
        display: flex;
        flex-direction: column; /* fond blanc avec opacité */
        padding: 20px;
        border-radius: 10px; 
        height: 400px; 
        width: 400px;
        margin: auto;
        z-index: 10;
    }

    /* label and input styling */
    label {
         
        display: flex;
        width: 300px;
        flex-direction: column;
        padding-bottom: 3px;
     }

     input {
        border-radius: 5px;
        height: 25px;
        padding-top: 3px;

     }

     /* Field name styling*/
     .fieldName {
        font-weight: bold;
        display: flex;
        margin: 0px;
        padding-left: 10px;
        
     }
   
     /*Textarea styling for the message field*/
     .message {
        height: 70px;
        border-radius: 5px;
        border: 2px solid black;
      }
    
    /* Submit button styling*/
      button {
        border-radius: 5px;
        font-weight: bold;
        height: 25px;
        width: 60px;
       }
    /* Submit button aligment*/
    .submit {
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;
        width: 400px;
    }

    /* Styling for the main container  */
    main {
        
        padding: 2rem;
        text-align:center;
    }
    /* Margin between form elements*/
    div {
        margin-bottom: 1rem;
    }
    
    /* Succes and error message styling*/
    .success {
        color:green;
    }

    .error {
        color: red;
    }
</style>


 
