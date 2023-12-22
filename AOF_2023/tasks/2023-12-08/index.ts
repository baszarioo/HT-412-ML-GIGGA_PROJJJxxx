export interface Letter {
  content: string;
  country: string;
  priority: 'low' | 'medium' | 'high';
}
export interface SortStrategy {
  compare(a: Letter, b: Letter): number;
}
export class PriorityStrategy implements SortStrategy {
  compare(a: Letter, b:Letter): number {
    const priorityOrder = { low: 2, medium: 1, high: 0 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }
}
export class LengthStrategy implements SortStrategy {
  compare(a: Letter, b: Letter):number {
    return a.content.length - b.content.length;
  }
}
export class CountryStrategy implements SortStrategy {
  private countryOrder: { [key: string]: number } = { pl: 1, de: 2, us: 3 };
    compare(a: Letter, b:Letter): number {
      const orderA = this.countryOrder[a.country] || Number.MAX_SAFE_INTEGER;
      const orderB = this.countryOrder[b.country] || Number.MAX_SAFE_INTEGER;
      return orderA - orderB;
  }
}
export class LetterSorter {
  private strategy: SortStrategy;
  constructor(strategy: SortStrategy) {
    this.strategy= strategy;
  }
  sortLetters(letters: Letter[]): Letter[] {
    return letters.slice().sort((a,b)=>this.strategy.compare(a,b));
  }
}