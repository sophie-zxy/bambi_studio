<script>
    import "../app.css";
    import '@fontsource-variable/roboto-slab';
    import "@fontsource/eb-garamond";
    import Hamburger from '$lib/Hamburger.svelte'
    
  </script>
  
  <style>
    :global(body) {
        font-family: 'EB Garamond';
    }
  </style>

  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="home-btn btn btn-ghost normal-case text-xl" href="/"
        >Bambi Li</a
      >
    </div>
    <Hamburger/>

  </div>
  <slot />