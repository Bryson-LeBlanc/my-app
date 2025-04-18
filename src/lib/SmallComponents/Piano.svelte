<script lang="ts">
    import Octave from '$lib/SmallComponents/Octave.svelte';
    import ThirdOctave from '$lib/SmallComponents/ThirdOctave.svelte';
    import { onMount } from 'svelte';
    import { keyDownNote } from '$lib/utils/playNote';
    onMount(() => {

        document.addEventListener('keydown', (event) => {
            keyDownNote(event);
        });
        const keys = document.querySelectorAll('.key-button');
        keys.forEach(key => {
            key.addEventListener('click', () => {
                const keyParent = key.parentElement;
                const note = keyParent?.getAttribute('data-note');
                if (keyParent) {
                    const noteParent = keyParent.parentElement;
                    const octave = noteParent?.getAttribute("data-octave"); // Assuming octave is the second class
                    if (note && octave) {
                        playNote(note.toLowerCase(), octave);
                    }
                }
                
            });
        });

        async function playNote(note : string, octave : string) {
            octave = octave.replace("first", "3").replace("second", "4").replace("third", "5");
            let map = "";
            if (note[0] === "a") {
                if (octave === "3") {
                    octave = "4";
                }
                else if (octave === "4") {
                    octave = "5";
                }
            } else if (note[0] === "b" && octave === "4") {
                octave = "5";
            }

            if (note.includes("#")) {
                map = note[0] + '-' + octave;
            } else {
                map = note + octave;
            }
            try {
                const url = new URL("../assets/" + map + ".mp3", import.meta.url).href;
                const audio = new Audio(url);
                await audio.play();
            } catch (error) {
                console.error(`Error playing sound for note ${note}:`, error);
            }
        }
    });
</script>

<div id="piano">
    <div class="octave 1" data-octave="first">
        <Octave />
    </div>
    <div class="octave 2" data-octave="second">
        <Octave />
    </div>
    <div class="octave 3" data-octave="third">
        <ThirdOctave />
    </div>
</div>

<style>
    .octave {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    #piano {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-bottom : 10px;
    }
</style>