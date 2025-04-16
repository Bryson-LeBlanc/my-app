<script lang='ts'>

</script>


<div class="block col">
    <div id="head">
        <h2>About Me</h2>
        <div class="info">
            <button class="nav" aria-label="github">
                <img src="src\lib\static\gitICON.png" alt="git">
            </button>
            <button class="nav" aria-label="linkedin">
                <img src="src\lib\static\inICON.png" alt="in">
            </button>
            <button class="nav" aria-label="resume">
                <img src="src\lib\static\resume.jpg" alt="pdf">
            </button>
        </div>
    </div>
    <div id="bio">
        <p>
            This is the bio section
        </p>
    </div>
</div>

<style>
    p, h2 {
        color : var(--color-e);
    }

    button {
        cursor : pointer;
    } 
        button:hover {
            border: 3px solid #d7c6ff;
        }

    img {
        height: 30px;
        width: 30px;
        margin-top: 2px;
    }

    .col {
        display: flex;
        flex-direction: column;
    }

    #head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .info {
        margin-top : 10px;
    }

    .nav {
        background-color: white;
        border: 3px solid black;
        border-radius: 2px;
    }
</style>
