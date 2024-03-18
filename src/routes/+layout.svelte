<script>
    import "../app.css";
    // import '@fontsource-variable/roboto-slab';
    // import "@fontsource/eb-garamond";
    import Hamburger from '$lib/Hamburger.svelte'
    
  </script>
  
  <style>
    :global(body) {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 200; /* 注意：Helvetica Neue可能不支持200的字体权重 */
      font-style: normal;
    }
  </style>

  <div class="navbar bg-white">
    <div class="flex-1">
      <a class="home-btn btn btn-ghost normal-case text-xl" href="/"
        >BAMBI LI</a
      >
    </div>
    <Hamburger/>
  </div>
  <slot />
  