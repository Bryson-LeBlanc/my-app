<script lang='ts'>
    import { onMount } from 'svelte';
    import weather from "../../weather.json";

    let weatherData: { temperature: string; chanceOfRain: string; humidity: string } | null = null;

    // Function to convert Celsius to Fahrenheit
    function celsiusToFahrenheit(celsius: string): number {
        return (parseFloat(celsius) * 9) / 5 + 32;
    }

    // Fetch weather data on component mount
    onMount(async () => {

        weatherData = {
            temperature: celsiusToFahrenheit(weather.temp).toString(),
            chanceOfRain: weather.rain.toString(),
            humidity: weather.humidity.toString()
        };

    });
</script>


<div class="block flex col">
    <div id="head" class="flex">
        <h2>About Me</h2>
        <div class="info flex">
            <a href="https://github.com/Bryson-LeBlanc" class="nav" aria-label="github">
                <img class="icon" src="/still/gitICON.png" alt="git">
            </a>
            <a href="https://www.linkedin.com/in/b-w-l/" class="nav" aria-label="linkedin">
                <img class="icon" src="/still/inICON.png" alt="in">
            </a>
            <a href="/still/bwlRES.pdf" id="resume" class="nav flex" aria-label="resume">
                <img class="icon" src="/still/resume.jpg" alt="pdf">
                <strong>Resume</strong>
            </a>
        </div>
    </div>
    <div id="bio" class="flex">
        <div id="para">
            <p>
                Current senior studying Software Engineering at Auburn University, graduating in Spring 2026. Moved from Kennesaw,
                 Georgia in 2022 to begin studying.
            </p>
            <p>
                My first experience in industry was with <a href="https://roadsync.com/">RoadSync</a> in Atlanta as a Software Engineering intern, 
                where I worked mostly with data visualization and system health. RoadSync brought me back on in the summer of 2025, where I was tasked with 
                building out internal company webapps authentication to use an in-house service with OAuth 2.0 OIDC.
            </p>
            <p>
                Following my sophomore year, I began a Full-Stack web development Co-Op with Auburn University 
                <a href="https://cws.auburn.edu/cws">Campus Web Solutions</a>,
                which operates in the Office of Information Technology. Currently in my third semester of the program.
            </p>
        </div>
        <div id="me-pic">
            <img id="look" src="/still/abtme.jpg" alt="pic of me">
        </div>
        
    </div>
    <div id="mini_project" class="flex">
        <h3>Today's Weather in Auburn</h3>
        <h4>Temperature: {weatherData?.temperature}°F</h4>
        <h4>Chance of Rain: {weatherData?.chanceOfRain}%</h4>
        <h4>Humidity: {weatherData?.humidity}%</h4>
    </div>
</div>

<style>
    p, h2 {
        color : var(--color-e);
    }

    strong {
        color : var(--color-d);
    }

    a {
        color: var(--color-a);
        font-weight: bold;
        cursor : pointer;
        padding:3px 6px 3px 6px;
    } a:hover {
            border: 3px solid #d7c6ff;
        }

    @media (max-width: 800px) {
        #me-pic {
            display:none;
        }
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
        text-decoration: none;
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

    @media (max-width: 400px) {
        .nav {
            border: 1px solid black;
        }
	}
</style>
