<script>
    export let id = -1;
    export let title = "Title";
    export let desc = "Description";
    export let src = '../../../Home_page_pics/wireframe.png';
</script>

<html lang="postcss">
    <div class="card bg-base-100 shadow-xl rounded-none h-full">
        <figure><img class="w-full h-full" {src} alt="UIUX {id}" /></figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p class="card-desc mb-10">{desc}</p>
          <div class="card-actions">
            <button class="btn btn-primary rounded-none">Read more</button>
          </div>
        </div>
    </div>
</html>

<style>
    .card {
        max-width: 100%; /* Ensure the card doesn't exceed the viewport width */
        overflow: hidden; /* Hide any overflow content */
        position: relative; /* Position for the content */
    }

    .card-body {
        font-family: 'EB Garamond';
        font-weight: 100;
        color: black;
    }
    .card-desc {
        font-size: 0.9rem;
    }

    .card-title {
        font-weight: 200;
    }

    .btn {
        font-size: x-small;
        font-weight: 200;
    }
</style>