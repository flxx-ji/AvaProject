<script>
    // import {Link} from 'svelte-routing';
    
     let name = '';
     let email = '';
     let phone = '';
     let message = '';

     const submitContact = () => {
        const formIntel = {
          name,
          email,
          phone,
          message
        };


     };
     
</script>
<main>
        <div class="form">
            <ul>
                <li><a href="/homepage"> back to home</a></li>
            </ul>

        </div>
</main>
<style>
    .form {
        border: 1px solid blue;
         height: 500px;
         width: 500px;
    }
    main {
        background-image: url('/image/bedroom-6686058_1280.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

<form on:submit|preventDefault={submitContact}>
    
<label>
    Name:
    <input type= "text" bind:value={name} required />
</label>

<label>
    Email:
    <input type="email" bind:value={email} required />
</label>

<label>
    Phone:
    <input type="text" bind:value={phone} required />
</label>

<label>
    Message:
     <textarea bind:value={message} required></textarea>
</label>

</form>
