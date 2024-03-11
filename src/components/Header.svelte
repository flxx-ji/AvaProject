<script>
  
</script>

<!-- entete de page -->
 
    <header>
        <nav id="navbar"  >
            <h1 class="navbar_title">AVA CONCIERGERIE </h1>
            <div class="lienNav">
                <ul>
                    <li><a href="/#/">Accueil</a></li>
                    <li><a href="/#/services">Services</a></li>
                    <li><a href="/#/contact">Contact</a></li>
                    <li><a href="/#/infos">Infos</a></li>
                </ul>
            </div>
        </nav>

    </header>


<style>
    .navbar_title{
        display: flex;
        font-size: 40px;
     }
    a,
a:visited {
   color:#1a1919;
   font-weight: 500;
   cursor: pointer;
}

a:hover {
    color:rgb(153, 148, 148);
}

#navbar {

      align-items: center;
      display: flex;
      flex-direction: row;
      font-size: calc(0.5rem + 1.5vw);
      height: 100px;
      justify-content: space-between;
      padding: 10px;
      /* width:640px; */
      /* position: absolute; */
       
}

 .lienNav ul{
    
    display: flex;
    justify-content: space-between;
    padding: 50px;
    /* position:absolute; */
 
} 

ul{
    font-weight: bold;
    font-size: 25px;
     
}
 
#navbar .lienNav ul li {
    
    margin: 0 25px;
}
#icons {
    color: #971010;
    cursor: pointer;
    display: none;
    font-size: 2.5em;
    position: absolute;
    right:50px;
    top:40px;
    
  }

@media screen and (min-width:1034px) {
    body{
        /* background-image: url('/image/living-room-1835923_1280.jpg'); */
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;
     
    }

}

@media screen and (max-width:1005px) {

     #icons {
        display: flex;
        top:23px;
        
     }
     #icons:before{
        content:"\2630";
         
     }

      #icons .active:before {
        content:"\2715";
     }


    .lienNav ul {
        position: fixed;
        right: -100%;
        top:0;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        background-color: rgba(229, 229, 236, 0.194);
        backdrop-filter: blur(7px);
        width: 100%;
        height: 100vh;
        text-align: center;
        transition: 0.50s;
    }

    .lienNav li {
        padding: 3px 0;
    }
/*     
    .lienNav li :hover {
        background-color: ;
    } */
    .lienNav.active ul {
        right: 0;
    }
}

@media screen and (min-width:768px){
    body{
        /* background-image: url('/image/living-room-1835923_1280.jpg'); */
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;
     
    }
    footer {
        position: absolute;
        bottom: 0;
    }
}
/* @media screen and (min-width:425px) {
    #icons {
        position: absolute;
        right:50%;

    }
} */

/* main {
    flex-grow: 1;
 } */

  
  

 

</style>