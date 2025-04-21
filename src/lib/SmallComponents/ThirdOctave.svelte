<div class="white-key" data-note="C">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>k</h4>
    </button>
</div>
<div class="black-key" data-note="C#">
    <button class="black key-button" aria-label="key">
        <h4 class="keyDown-label blackDown" hidden>l</h4>
    </button>
</div>
<div class="white-key" data-note="D">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>;</h4>
    </button>
</div>
<div class="black-key" data-note="D#">
    <button class="black key-button" aria-label="key">
        <h4 class="keyDown-label blackDown" hidden>z</h4>
    </button>
</div>
<div class="white-key" data-note="E">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>x</h4>
    </button>
</div>
<div class="white-key" data-note="F">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>c</h4>
    </button>
</div>
<div class="black-key" data-note="F#">
    <button class="black key-button" aria-label="key">
        <h4 class="keyDown-label blackDown" hidden>v</h4>
    </button>
</div>
<div class="white-key" data-note="G">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>b</h4>
    </button>
</div>

<style>
    .white-key, .black-key {
        display: inline-block;
        position: relative;
    }

    .white {
        width: 40px;
        height: 140px;
        background-color: white;
        border: 1px solid black;
    }

    .black {
        width: 30px;
        height: 80px;
        background-color: black;
        position: absolute;
        left: -15px; /* Adjust based on the white key width */
        top: -69px;
        z-index: 1;
        border:none;
    }

    .key-button {
        cursor: pointer;
    }
    .key-button:hover {
        background-color: lightgray;
        transform: translateY(-1px); /* Moves the key down when pressed */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* deeper, smaller shadow */
    }

    .keyDown-label {
        opacity: 60%;
    }

    .whiteDown {
        color:black;
        margin-top:110px;
    }

    .blackDown {
        color:white;
        margin-top:50px;
    }
</style>