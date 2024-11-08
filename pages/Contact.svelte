<script>
    //Importation from the component ContactForm who's contain the contact form
    //It's imported for the component file to be used in this page
    import ContactForm from "../src/components/contactForm.svelte";
</script>

<main>
     
    <!--Insertion of the component ContactForm in this div-->
    <div class="contact-background">
        <ContactForm/>

    </div>
</main>

 

<style>
    /*Styles for the background for the page contact*/
    .contact-background {
    background-image: url('/image/bedroom-6686058_1280.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    }
      /*Styles for the contact form*/
    .formulaire {
        background-color: rgba(255, 255, 255, 0.9); /* fond blanc avec opacité */
    padding: 20px;
    border-radius: 10px; /* pour arrondir les bords du formulaire */
    width: 50%;
    margin: auto;
    z-index: 10
    }
</style>


 
     
 