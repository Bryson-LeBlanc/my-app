<div class="white-key" data-note="C">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>i</h4>
    </button>
</div>
<div class="black-key" data-note="C#">
    <button class="black key-button" aria-label="key">
        <h4 class="keyDown-label blackDown" hidden>9</h4>
    </button>
</div>
<div class="white-key" data-note="D">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>o</h4>
    </button>
</div>
<div class="black-key" data-note="D#">
    <button class="black key-button" aria-label="key">
        <h4 class="keyDown-label blackDown" hidden>0</h4>
    </button>
</div>
<div class="white-key" data-note="E">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>p</h4>
    </button>
</div>
<div class="white-key" data-note="F">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>a</h4>
    </button>
</div>
<div class="black-key" data-note="F#">
    <button class="black key-button" aria-label="key">
        <h4 class="keyDown-label blackDown" hidden>s</h4>
    </button>
</div>
<div class="white-key" data-note="G">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>d</h4>
    </button>
</div>
<div class="black-key" data-note="G#">
    <button class="black key-button" aria-label="key">
        <h4 class="keyDown-label blackDown" hidden>f</h4>
    </button>
</div>
<div class="white-key" data-note="A">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>g</h4>
    </button>
</div>
<div class="black-key" data-note="A#">
    <button class="black key-button" aria-label="key">
        <h4 class="keyDown-label blackDown" hidden>h</h4>
    </button>
</div>
<div class="white-key" data-note="B">
    <button class="white key-button" aria-label="key">
        <h4 class="keyDown-label whiteDown" hidden>j</h4>
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