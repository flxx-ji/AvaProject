<script>
   import Router , {location} from "svelte-spa-router";
   import routes from "../routes";
   import Header from "./components/Header.svelte";
   import Footer from "./components/Footer.svelte";
</script>

 <Header/>
 <Router {routes} />
 <!-- <main>
   <section class="resume">
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis accusamus quidem dolores dignissimos beatae ex quo vel distinctio nam! Culpa soluta eligendi exercitationem dolores deleniti ex voluptatibus eius, nesciunt atque enim iure suscipit quo optio mollitia iste consequatur amet illo eum velit at minima quis aliquid odio. Voluptates placeat assumenda numquam obcaecati fuga perferendis, vero possimus laudantium saepe natus, quo repudiandae. Quis maxime deleniti voluptatum iusto eligendi consequatur ipsa, ducimus, corrupti praesentium magni aperiam quam facere tempore facilis assumenda soluta nihil nesciunt ea et. Saepe neque eaque in at maxime! Perspiciatis exercitationem qui reprehenderit voluptatem odio facere aliquid delectus.
      </p>
  </section>
 </main> -->
 <Footer/>

 <style>
   main {

        backdrop-filter: blur(3px);
        border-radius: 7px;
        display: flex;
        justify-content: center;
        margin-top: 30px;
   }

   p {
    align-items: center;
    display: flex;
    padding:1.2rem;
    color: white;
    
     
 }
     .resume {
   backdrop-filter: blur(3px);
   border-radius: 7px;
   display: flex;
   height: 15rem;
   justify-content: center;
   margin-top: 85px;
   width: 35rem;
}

section{

}
 
</style>
