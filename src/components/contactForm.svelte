<script>
    // import {Link} from 'svelte-routing';
     import { onMount } from 'svelte';
     import axios from 'axios';

     let name = '';
     let firstname = '';
     let email = '';
     let phone = '';
     let message = '';
     let successMessage = '';
     let errorMessage = '';

     function clearForm()  {
        name = '';
        firstname = '';
        email = '';
        phone = '';
        message = '';
     }

     async function submitContact(event) {
        event.preventDefault();

        successMessage = '';
        errorMessage = '';

        try {
            const response = await axios.post('/api/contacts', { name,firstname,  email, phone, message});
            if (response.status === 201) {
                successMessage = 'Contact information saves successfully';
                clearForm();

                //Clear the congrats message after 3 secondes
                setTimeout(() => {
                    successMessage = '';
                }, 3000);

            } else {
                throw new Error('Failed to save contact information');
            }
        } catch (error) {
            errorMessage = 'An error occured while submitting the form';
        }
     }
 </script>

<main>
     <h1>Contact </h1>

     <form class="formulaire" on:submit|preventDefault={submitContact}>

        <div>
            <label>
                <div class="fieldName">Name</div>
                
                <input type= "text" bind:value={name} required />
            </label>
        </div>
        <div>
            <label>
                <div class="fieldName">Firstname</div> 
                
                <input type= "text" bind:value={firstname} required />
            </label>
        </div>
        
       <div>
        <label>
            <div class="fieldName">Email</div> 
            
            <input type="email" bind:value={email} required />
        </label>
       </div>
        
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
       <div class="submit">
         <button type="submit">Submit</button>
       </div>
       

    </form>

    {#if successMessage}
       <p class="success">{successMessage}</p>
    {/if}
    {#if errorMessage}
       <p class="error">{errorMessage}</p>
    {/if}       
        <!-- <div class="form">
            <ul>
                <li><a href="/homepage"> back to home</a></li>
            </ul>

        </div> -->
</main>
<style>

    h1 {
        color:#fff;
        font-size: 60px;
       }



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
     .fieldName {
        font-weight: bold;
        display: flex;
        margin: 0px;
        padding-left: 10px;
        
     }

     .message {
        height: 70px;
        border-radius: 5px;
        border: 2px solid black;
      }

      button {
        border-radius: 5px;
        font-weight: bold;
        height: 25px;
        width: 60px;
       }

    .submit {
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;
        width: 400px;
    }
    main {
        
        padding: 2rem;
        text-align:center;
    }

    div {
        margin-bottom: 1rem;
    }

    .success {
        color:green;
    }

    .error {
        color: red;
    }
</style>


 
