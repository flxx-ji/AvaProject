<script>
 let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    const content = document.querySelector('.page-content'); // Le contenu à flouter
    if (isOpen) {
      content.classList.add('blurred-content'); // Ajouter le flou
      document.body.classList.add('no-scroll'); // Désactiver le scroll
    } else {
      content.classList.remove('blurred-content'); // Retirer le flou
      document.body.classList.remove('no-scroll');
    }
  }

  //Fermetuque auto du menu vertical lorsque l'écran dépasse la largeru de 768px
  function handleResize() {
    if (window.innerWidth >= 769 && isOpen) {
      isOpen = false;
      document.body.classList.remove('no-scroll');
    }
  }
    //Ajout d'un listener pour detecter les changements de tailles d'ecran
    window.addEventListener('resize',handleResize);
    </script>

<header id="navbar" class={isOpen ? 'menu-open' : ''}>
  <!-- Conteneur logo et burger -->
  <div id="icons" on:click={toggleMenu}>
    {#if isOpen}
      <span class="close">&times;</span>
    {:else}
      <span class="burger">&#9776;</span>
    {/if}
  </div>

  <!-- Logo principal visible en desktop et mobile -->
  <div class="navbar_title">
    <a href="/">
      <h2 class="logo-horizontal">AvA</h2>
      <h2 class="conciergerie-horizontal">Conciergerie</h2>
    </a>
  </div>

  <!-- Liens de navigation pour desktop -->
  <nav class="lienNav">
    <ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/services">Services</a></li>
      <li><a href="#/contact">Contact</a></li>
      <li><a href="#/infos">Infos</a></li>
    </ul>
  </nav>

  <!-- Menu vertical pour tablette/mobile -->
  {#if isOpen}
  <nav class="menuVertical">
    <div class="menu-header">
      <div class="logoTitle">
        <h2 class="logo-vertical">AvA</h2>
        <h2 class="conciergerie-vertical">Conciergerie</h2>
      </div>
      <span class="close" on:click={toggleMenu}>&times;</span> <!-- La croix -->
    </div>
    <ul>
      <li><a href="#/" on:click={toggleMenu}>Home</a></li>
      <li><a href="#/services" on:click={toggleMenu}>Services</a></li>
      <li><a href="#/contact" on:click={toggleMenu}>Contact</a></li>
      <li><a href="#/infos" on:click={toggleMenu}>Infos</a></li>
    </ul>
  </nav>
  {/if}
</header>

<!-- Contenu principal de la page -->
<div class="page-content">
  <!-- <div class="presentation-text">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
  </div> -->

  <footer>
    <p>All rights reserved</p>
  </footer>
</div>

<style>
  /* Classe pour flouter le fond lorsque le menu est ouvert */
  /* .blur-background {
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.5);  
    transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
  } */

 

  /* Style pour l'icône de fermeture */
  .close {
      font-size: 3.5em;
      color: #971010;
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 9px;
  }
  
  /* Ajuster la taille du burger */
  .burger {
      
      color: #971010;
      cursor: pointer;
      font-size: 1.5em;
    
      position: absolute;
      top:1px;
      right:50px

     
  }

  .navbar_title {
    margin: 20px, 20px;
  }

  /* Menu vertical pour tablette/mobile */
  .menuVertical {
      backdrop-filter: blur(10px);
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8); /* Fond du menu vertical */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transform:  translateX(0);
  }
   .logo-horizontal {
    font-size: 40px;
    height: 35px;
    margin-top: 15px;
    margin-left: 20px;
    
  }
  .conciergerie-horizontal {
     
     font-size: 20px;
  }



  .logoTitle {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50px;
    color: white;
    margin-top: 20px;
    width: 100%;
  }
  .logo-vertical {
    display: flex;
    font-size: 40px;
    height: 40px;
    justify-content: center;
     
  }

  .conciergerie-vertical {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }

  .menu-header {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      justify-content: space-between;
      width: 100%;
  }

  .menuVertical ul {
      margin-right: 35px;
      list-style: none;
      text-align: center;
  }

  .menuVertical ul li {
      margin: 20px 0;
  }

  .menuVertical ul li a {
      font-size: 2em;
      color: white;
      cursor: pointer;
  }

  /* Style pour le texte de présentation */
  .presentation-text {
      text-align: center;
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5em;
  }

  /* Footer */
  footer {
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
      color: white;
  }

  nav ul {
    list-style-type: none;
  }

  nav ul li a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  nav ul li a:hover {
    color: #971010;
  }
</style>
