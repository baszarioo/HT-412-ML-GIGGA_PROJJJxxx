type Letter = { [key: string]: number };
export function createTrackedLetter(letter: Letter, changeTracker: (key: string, value: number) => void): Letter {
  const trackedLetter = new Proxy(letter, {
    set(target: Letter, key: string, value: number) {
        const oldValue = target[key];
        if(oldValue !== value) {
          changeTracker(key as string, value);
        }
        target[key] = value;
        return true;
    },
  });
  return trackedLetter;
}
// Proxy used to create a tracked version of the letter. This function returns a tracked letter that triggers the 'changeTracker' callback whenever a property is set to a new value. 