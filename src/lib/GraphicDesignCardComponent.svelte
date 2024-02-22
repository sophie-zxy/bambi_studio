<script>
    export let id = -1;
    export let title = "Title";
    export let src = '../../../ph_sq.png';
</script>


<div class="card bg-base-100 h-108 w-96">
    <figure class="design items-center"><img {src} alt="UIUX {id}" /></figure>
    <div class="card-body items-center">
        <h2 class="card-title">{title}</h2>
    </div>
</div>


<style>
    .card {
        max-width: 100%; /* Ensure the card doesn't exceed the viewport width */
        max-height: 100%;
        overflow: hidden; /* Hide any overflow content */
        position: relative;
        border-radius: 0%;
    }

    .card-body {
        /* font-family: 'EB Garamond'; */
        font-weight: 100;
        color: black;
    }

    .design {
        border-radius: 0%;
    }

    @media (max-width: 640px) {
        .card {
            width: 90%;
        }
    }
</style>