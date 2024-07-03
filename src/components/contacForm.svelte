<script>
    // import {Link} from 'svelte-routing';
     import { onMount } from 'svelte';
     import axios from 'axios';

     let name = '';
     let email = '';
     let phone = '';
     let message = '';
     let successMessage = '';
     let errorMessage = '';

     function clearForm()  {
        name = '';
        email = '';
        phone = '';
        message = '';
     }

     async function submitContact(event) {
        event.preventDefault();

        successMessage = '';
        errorMessage = '';

        try {
            const response = await axios.post('/api/contacts', { name, email, phone, message});
            if (response.status === 201) {
                successMessage = 'Contact information saves successfully';
                clearForm();
            } else {
                throw new Error('Failed to save contact information');
            }
        } catch (error) {
            errorMessage = 'An error occured while submitting the form';
        }
     }
 </script>

<main>
     <h1>Contactez nous </h1>

     <form on:submit|preventDefault={submitContact}>

        <div>
            <label>
                Name:
                <input type= "text" bind:value={name} required />
            </label>
        </div>
        
       <div>
        <label>
            Email:
            <input type="email" bind:value={email} required />
        </label>
       </div>
        
      <div>
        <label>
            Phone:
            <input type="text" bind:value={phone} required />
        </label>
      </div>
        
       <div>
        <label>
            Message:
             <textarea bind:value={message} required></textarea>
        </label>
       </div>

       <button type="submit">Submit</button>

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
    .form {
        align-items: center;
        border: 1px solid blue;
        display: flex;
        flex-direction: column;
         height: 500px;
         width: 500px;
    }
    main {
        background-image: url('/image/bedroom-6686058_1280.jpg');
        background-size: cover;
        background-repeat: no-repeat;
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


 
