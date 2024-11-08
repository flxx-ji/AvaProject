<script>
  //Tracks if the menu is open
 let isOpen = false;


  //Function to toggle meny visibility
  function toggleMenu() {
    //Open menu state
    isOpen = !isOpen;
    //Page content to be blurred
    const content = document.querySelector('.page-content'); 
    if (isOpen) {
      //Apply the blur effect
      content.classList.add('blurred-content');  
      //Disabled the scroll
      document.body.classList.add('no-scroll');  
    } else {
      //Remove the blur effect
      content.classList.remove('blurred-content');  
      //Enable scroll
      document.body.classList.remove('no-scroll');
    }
  }

  // Auto close the vertical menu on screen resize above 768px width
  function handleResize() {
    if (window.innerWidth >= 769 && isOpen) {
      //Close menu on larger screens
      isOpen = false;
      //Restore scroll 
      document.body.classList.remove('no-scroll');
    }
  }
    //Apply listener for window resize to call hadleResize function
    window.addEventListener('resize',handleResize);
    </script>


<header id="navbar" class={isOpen ? 'menu-open' : ''}>
  <!--  logo and burger container -->
  <div id="icons" role="button" tabindex="0" on:click={toggleMenu} on:keypress={(e) => e.key === 'Enter' && toggleMenu()}
    aria-expanded={isOpen}>
    {#if isOpen}
      <span class="close">&times;</span>
    {:else}
      <span class="burger">&#9776;</span>
    {/if}
  </div>

  <!-- Main logo visible on desktop et mobile -->
  <div class="navbar_title">
    <a href="/">
      <h2 class="logo-horizontal">AvA</h2>
      <h2 class="conciergerie-horizontal">Conciergerie</h2>
    </a>
  </div>

  <!-- Navigation links for desktop -->
  <nav class="lienNav">
    <ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/services">Services</a></li>
      <li><a href="#/contact">Contact</a></li>
      <li><a href="#/infos">About us</a></li>
    </ul>
  </nav>

  <!-- Vertical navigation for tab/mobile -->
  {#if isOpen}
  <nav class="menuVertical">
    <div class="menu-header">
      <div class="logoTitle">
        <h2 class="logo-vertical">AvA</h2>
        <h2 class="conciergerie-vertical">Conciergerie</h2>
      </div>
      <span class="close" role="button" tabindex="0" on:click={toggleMenu} on:keypress={(e) => e.key === 'Enter' && toggleMenu()}
        aria-label="Close menu">&times;</span> <!-- La croix -->
    </div>
    <ul>
      <li><a href="#/" on:click={toggleMenu}>Home</a></li>
      <li><a href="#/services" on:click={toggleMenu}>Services</a></li>
      <li><a href="#/contact" on:click={toggleMenu}>Contact</a></li>
      <li><a href="#/infos" on:click={toggleMenu}>About us</a></li>
    </ul>
  </nav>
  {/if}
</header>

<!-- Main page content -->
<div class="page-content">
  
</div>

<style>
   
 

  /* Style for close icon in mobile menu */
  .close {
      font-size: 3.5em;
      color: #971010;
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 9px;
  }
  
  /* Adjust burger icon size*/
  .burger {
      
      color: #971010;
      cursor: pointer;
      font-size: 1.5em;
      position: absolute;
      top:1px;
      right:50px

     
  }
  /* Logo styling in navbar*/
  .navbar_title {
    margin: 20px, 20px;
  }

  /* Vertical menu styling for  tabs/mobile */
  .menuVertical {
      backdrop-filter: blur(10px);
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);  
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transform:  translateX(0);
  }

  /* Logo text styling for desktop */
   .logo-horizontal {
    font-size: 40px;
    height: 35px;
    margin-top: 15px;
    margin-left: 20px;
    
  }

  /* Vertical menu header */
  .conciergerie-horizontal {
     
     font-size: 20px;
  }


 /* Navigation links styling */
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

   

  nav ul {
    list-style-type: none;
    gap: 7rem;
    margin-right: 20px;
  }

  nav ul li a {
    color: #fff;
    font-size: 25px;
    text-decoration: none;
    cursor: pointer;
    
  }

  nav ul li a:hover {
    color: #971010;
  }
</style>
