export function stopNote(key: string, pressedKeys : Set<string>, activeAudios : Map<string, HTMLAudioElement>): void {
    pressedKeys.delete(key);
  
    const audio = activeAudios.get(key);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      activeAudios.delete(key);
    }
  }