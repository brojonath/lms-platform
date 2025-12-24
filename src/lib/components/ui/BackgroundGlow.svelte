<script>
    // No logic needed, purely visual
</script>

<div class="circles-container" aria-hidden="true">
    <div class="gradient-circle circle-1"></div>
    <div class="gradient-circle circle-2"></div>
    <div class="gradient-circle circle-3"></div>
</div>

<style>
    .circles-container {
        pointer-events: none;
        position: fixed; /* Fixed so it stays while scrolling */
        top: 0;
        left: 50%; /* Center horizontally */
        transform: translateX(-50%);
        width: 100%;
        max-width: 1400px;
        height: 100vh;
        z-index: -1; /* Behind everything */
        overflow: hidden;
    }

    .gradient-circle {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 9999px;
        width: 20rem;
        height: 20rem;
        filter: blur(160px);
        opacity: 0.5;
        
        /* Use Tailwind vars for colors */
        background-image: linear-gradient(to top right, var(--color-blob-start), var(--color-blob-end));
    }

    /* Position extraction from your HTML */
    .circle-1 {
        top: -8rem;
        margin-left: 580px;
    }

    .circle-2 {
        top: 20vh;
        margin-left: 380px;
    }

    .circle-3 {
        top: 40vh;
        margin-left: -300px;
    }

    /* Mobile Adjustment */
    @media (max-width: 768px) {
        .gradient-circle {
            opacity: 0.3; /* Less distracting on mobile */
            width: 15rem;
            height: 15rem;
        }
        .circle-1 { margin-left: 100px; }
        .circle-2 { margin-left: -100px; }
        .circle-3 { display: none; }
    }
</style>