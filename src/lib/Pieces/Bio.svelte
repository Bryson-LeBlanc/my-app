<script lang='ts'>

</script>


<div class="block flex col">
    <div id="head" class="flex">
        <h2>About Me</h2>
        <div class="info flex">
            <button class="nav" aria-label="github">
                <img class="icon" src="src\lib\static\gitICON.png" alt="git">
            </button>
            <button class="nav" aria-label="linkedin">
                <img class="icon" src="src\lib\static\inICON.png" alt="in">
            </button>
            <button id="resume" class="nav flex" aria-label="resume">
                <img class="icon" src="src\lib\static\resume.jpg" alt="pdf">
                <strong>Resume</strong>
            </button>
        </div>
    </div>
    <div id="bio" class="flex">
        <div id="para">
            <p>
                Current senior studying Software Engineering at Auburn University, graduating in Spring 2026. Moved from Kennesaw,
                 Georgia in 2022 to begin studying.
            </p>
            <p>
                My first experience in industry was with ROADSYNC in Atlanta as a Software Engineering intern, 
                where I worked mostly with data visualization and system health. I continue part time work here Summer of 2025.
            </p>
            <p>
                Following my sophomore year, I began a Full-Stack web development Co-Op with Auburn University CAMPUS WEB SOLUTIONS,
                which operates in the Office of Information Technology. Currently in my second semester of the program.
            </p>
        </div>
        <div id="me-pic">
            <img id="look" src="src\lib\static\abtme.jpg" alt="pic of me">
        </div>
        
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

    .icon {
        height: 30px;
        width: 30px;
        margin-top: 2px;
    }

    .flex {
        display: flex;
    }

    #look {
        width:225px;
        margin:10px 30px 20px 10px;
    }

    #para {
        margin-right : 10%;
    }

    #resume {
        align-items: center;
    }

    .col {
        flex-direction: column;
    }

    #head {
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .info {
        margin-top : 10px;
        margin-right : 5px;
    }

    .nav {
        background-color: white;
        border: 3px solid black;
        border-radius: 2px;
        margin: 0px 5px 0px 5px;
    }
</style>
