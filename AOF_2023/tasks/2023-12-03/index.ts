export interface Lokalizacja {
  x: number;
  y: number;
  z: number;
  czas: number;
}
export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number;

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
  if(lokalizacje.length === 0) {return null; }
  let maxScore = Number.NEGATIVE_INFINITY;
  let bestLocation: Lokalizacja | null = null;
  for(const lokalizacja of lokalizacje) {
    const score = mapa(lokalizacja.x, lokalizacja.y, lokalizacja.z, lokalizacja.czas);
    if(!isNaN(score) && score > maxScore) {
      maxScore = score;
      bestLocation = lokalizacja;
    }
  }
  return bestLocation;
}
