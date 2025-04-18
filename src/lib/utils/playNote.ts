import { onMount } from 'svelte';

export async function keyDownNote(event: KeyboardEvent): Promise<void> {
  const key = event.key.toLowerCase();

  let keyMap: { [key: string]: string } = {
    'a': 'c3',
    'w': 'c-3',
    's': 'd3',
    'e': 'd-3',
    'd': 'e3',
    'f': 'f3',
    't': 'f-3',
    'g': 'g3',
    'y': 'g-3',
    'h': 'a4',
    'u': 'a-4',
    'j': 'b3',
    'k': 'c4',
    'o': 'c-4',
    'l': 'd4',
    'p': 'd-4',
    ';': 'e4',
    "'": 'f4',
    '[': 'f-4',
    'z': 'g4',
    'x': 'g-4',
    'c': 'a5',
    'v': 'a-5',
    'b': 'b5',
    'n': 'c6',
    'm': 'c-6',
    ',': 'd6',
    '.': 'd-6',
    '/': 'e6'
  };
    const note = keyMap[key];

    const url = new URL("../assets/" + note + ".mp3", import.meta.url).href;
    const audio = new Audio(url);
    await audio.play();
}
