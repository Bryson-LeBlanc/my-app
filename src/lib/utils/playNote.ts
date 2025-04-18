import { onMount } from 'svelte';

export async function keyDownNote(event: KeyboardEvent): Promise<void> {
  const key = event.key.toLowerCase();

  let keyMap: { [key: string]: string } = {
    'q': 'c3',
    '2': 'c-3',
    'w': 'd3',
    '3': 'd-3',
    'e': 'e3',
    'r': 'f3',
    '5': 'f-3',
    't': 'g3',
    '6': 'g-3',
    'y': 'a4',
    '7': 'a-4',
    'u': 'b3',
    'i': 'c4',
    '9': 'c-4',
    'o': 'd4',
    '0': 'd-4',
    'p': 'e4',
    "a": 'f4',
    's': 'f-4',
    'd': 'g4',
    'f': 'g-4',
    'g': 'a5',
    'h': 'a-5',
    'j': 'b5',
    'k': 'c5',
    'l': 'c-5',
    ';': 'd5',
    'z': 'd-5',
    'x': 'e5',
    'c': 'f5',
    'v': 'f-5',
    'b': 'g5'
  };
    const note = keyMap[key];
    if (note) {
      let octave = note.slice(-1).replace("3", "first").replace("4", "second").replace("5", "third");
      if (note.includes('a') || (note.includes('b') && note.includes('5'))) {
        octave = octave.replace("second", "first").replace("third", "second");
      }

      let button;
      const searchDiv = document.querySelector(`[data-octave="${octave}"]`);
      if (note.includes('-')) {
       button = searchDiv?.querySelector(`[data-note="${note[0].toUpperCase()}#"]`)?.firstElementChild;
      } else {
       button = searchDiv?.querySelector(`[data-note="${note[0].toUpperCase()}"]`)?.firstElementChild;
      }
      
      if (button) {
        button.setAttribute("style", "background-color: lightgray; transform: translateY(-1px); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);");
        setTimeout(() => button.removeAttribute("style"), 200);
      }
    }

    const url = new URL("../assets/" + note + ".mp3", import.meta.url).href;
    const audio = new Audio(url);
    await audio.play();
}
