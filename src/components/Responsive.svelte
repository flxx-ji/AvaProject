 
<!--  Composants responsive pour chaques pages -->
<script>
     let width;
</script>

<svelte:window bind:innerWidth={width} />

{#if width >= 1024}
  <!--break point pour écran large-->
<div class="large-screen"></div>
{:else if width >= 768}
<!--break point pour tablette-->
<div class="tablet-screen"></div>
{:else}
<!-- breakpoint pour mobile-->
 <div class="mobile-screen"></div>         
   {/if}

<style>
      .large-screen, .tablet-screen, .mobile-screen {
        padding: 1rem;
        border: 2px solid black;
        text-align: center;
      }
</style>