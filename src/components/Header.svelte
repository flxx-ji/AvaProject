<script>
  let isOpen = false;

  function toggleMenu() {
      isOpen = !isOpen;
      console.log("Menu est ouvert ?", isOpen);
      if (isOpen) {
          document.body.classList.add('no-scroll');
      } else {
          document.body.classList.remove('no-scroll');
      }
  }
</script>

<header class={isOpen ? 'hidden' : ''}>
  <nav id="navbar">
      <h1 class="navbar_title">AVA CONCIERGERIE</h1>

      <!-- Icône du menu burger -->
      <div id="icons" on:click={toggleMenu} class={isOpen ? 'open' : ''}></div>

        <!-- Menu principal -->
      <div class="lienNav">
        <ul>
            <li><a href="/#/" on:click={toggleMenu}>Accueil</a></li>
            <li><a href="/#/services" on:click={toggleMenu}>Services</a></li>
            <li><a href="/#/contact" on:click={toggleMenu}>Contact</a></li>
            <li><a href="/#/infos" on:click={toggleMenu}>Infos</a></li>
        </ul>
    </div>
     

         <!-- Menu mobile (affiché lorsque le burger est cliqué) -->
      <div class={`menu ${isOpen ? 'active' : ''}`}>
          <h1 class="menu_title">AVA CONCIERGERIE</h1>
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
  /* Styles spécifiques à Header.svelte */
  header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: transparent;
      z-index: 10;
  }

  /* .hidden {
      display: none;
  } */

  .navbar_title {
      font-size: 40px;
  }

  #navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      height: 100px;
      width: 100%;
  }

  #icons {
      cursor: pointer;
      font-size: 2.5em;
      z-index: 20;
  }

  #icons:before {
      content: "\2630"; /* burger */
  }

  .open:before {
      content: "\2715"; /* croix */
  }

  /* Menu verticale pour     et mobile */
  .menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      max-width: 300px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      transition: right 0.5s ease;
      z-index: 15;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  .menu.active {
      right: 0;
  }

  .menu_title {
      font-size: 30px;
      margin-bottom: 20px;
  }

  .menu ul {
      list-style: none;
      padding: 0;
  }

  .menu ul li {
      margin: 20px 0;
  }

  .menu ul li a {
      font-size: 25px;
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
  }

  .menu ul li a:hover {
      color: #ccc;
  }

  .no-scroll {
      overflow: hidden;
  }

     /*Menu honrizontal pour grands écrans*/
     .lienNav ul {
          display: flex;
          justify-content: space-between;
          list-style: none;
      }


      .lienNav ul li {
        margin: 0 25px;
      }

      /*affichage grand écran*/

  @media screen and (min-width: 1005px) {
      #icons {
          display: none;
      }

 
      .menu {
          display: none;
      }
  }


     /*affichage mobile (petits écrans)*/

  @media screen and (max-width: 1005px) {
      .lienNav ul {
          display: none;
      }

      #icons {
          display: block;
      }

      .menu ul {
          display: flex;
          flex-direction: column;
      }
  }
</style>
