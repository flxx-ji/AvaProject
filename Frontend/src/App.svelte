<script>
   //Import of necessary modules
   import { location } from "svelte-spa-router";
   import Router  from "svelte-spa-router";
   import routes from "../routes/routes";
   import Header from "./components/Header.svelte";
   import Footer from "./components/Footer.svelte";

   //Declared variable for the current route
   let currentRoute;
   $:currentRoute = $location;
    
</script>

<!--Header displayed , visible on all pages -->
 <Header/>

 <!-- If is the current route is "/", display a specific background for the homepage -->
 {#if currentRoute === "/"}
   <div class="background-Homepage"></div>
 {/if}

 <!-- The router component manages main content on defined routes -->
 <Router {routes} />
 <main>
   <section class="resume">
      <!-- <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis accusamus quidem dolores dignissimos beatae ex quo vel distinctio nam! Culpa soluta eligendi exercitationem dolores deleniti ex voluptatibus eius, nesciunt atque enim iure suscipit quo optio mollitia iste consequatur amet illo eum velit at minima quis aliquid odio. Voluptates placeat assumenda numquam obcaecati fuga perferendis, vero possimus laudantium saepe natus, quo repudiandae. Quis maxime deleniti voluptatum iusto eligendi consequatur ipsa, ducimus, corrupti praesentium magni aperiam quam facere tempore facilis assumenda soluta nihil nesciunt ea et. Saepe neque eaque in at maxime! Perspiciatis exercitationem qui reprehenderit voluptatem odio facere aliquid delectus.
      </p> -->
  </section>
 </main>

 <!-- Display the Footer, visible on all pages   -->
 <Footer/>

 <style>

   /* Style for 'main'*/
   main {

        backdrop-filter: blur(3px);
        border-radius: 7px;
        display: flex;
        justify-content: center;
        margin-top: 30px;
   }

   /* Style for the text */
     .resume {
   backdrop-filter: blur(3px);
   border-radius: 7px;
   display: flex;
   height: 15rem;
   justify-content: center;
   margin-top: 85px;
   width: 35rem;
}

 
</style>
