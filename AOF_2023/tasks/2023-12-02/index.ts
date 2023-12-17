export class ChristmasQueue<T> {
  private items: { priority: number; value: T }[];
  constructor() {
    this.items=[];
  }
  enqueue(value: T, priority: number) {
    this.items.push({ priority, value});
    this.items.sort((a, b) => b.priority - a.priority);
  }
  dequeue(): T {
    if(this.isEmpty()) {
        throw new Error('There are no letters in the queue!');
    }
    return this.items.shift()!.value;
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}