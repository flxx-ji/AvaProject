<script>
    // import Header from "../src/components/Header.svelte";
    // import Footer from "../src/components/Footer.svelte";
</script>
  <div class="page-container">
    <h1>Welcome to Ava Conciergerie</h1>
  </div>
<main>
    <section class="resume">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis accusamus quidem dolores dignissimos beatae ex quo vel distinctio nam! Culpa soluta eligendi exercitationem dolores deleniti ex voluptatibus eius, nesciunt atque enim iure suscipit quo optio mollitia iste consequatur amet illo eum velit at minima quis aliquid odio. Voluptates placeat assumenda numquam obcaecati fuga perferendis, vero possimus laudantium saepe natus, quo repudiandae. Quis maxime deleniti voluptatum iusto eligendi consequatur ipsa, ducimus, corrupti praesentium magni aperiam quam facere tempore facilis assumenda soluta nihil nesciunt ea et. Saepe neque eaque in at maxime! Perspiciatis exercitationem qui reprehenderit voluptatem odio facere aliquid delectus.
        </p>
    </section>
</main>
  
<style>
.page-container {
    min-height: 100vh; /* Assure que la page occupe toute la hauteur de l'écran */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw; /* Assure que la largeur est limitée à l'écran */
    background-image: url('/image/living-room-1835923_1280.jpg'); /* Si tu veux un background spécifique */
    background-size: cover;
    background-position: center center;
  }

    main {
    /* background-image: url(/image/living-room-1835923_1280.jpg); */
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
      .resume {
    backdrop-filter: blur(3px);
    border-radius: 7px;
    /* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;  */
    display: flex;
    height: 15rem;
    justify-content: center;
    margin-top: 85px;
    width: 35rem;
 }

 p{
    color: rgb(205, 147, 147);
    letter-spacing: .12em;
    word-spacing: .16em;

 }
</style>

