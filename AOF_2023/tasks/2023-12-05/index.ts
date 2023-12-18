type EventCallback = (...args: any[]) => void;
export class ChristmasEmitter {
  private events: Map<string, EventCallback[]>;
  constructor() {
    this.events = new Map();
  }
  on(event: string, callback: EventCallback) {
    if(!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);
  }
  off(event: string, callback: EventCallback) {
    const callbacks = this.events.get(event);
    if(callbacks) {
      const index = callbacks.indexOf(callback);
      if(index !== -1) {
        callbacks.splice(index, 1);
      }
    }
  }
  emit(event: string, ...args: any[]) {
    const callbacks = this.events.get(event);
    if(callbacks) {
      for(const callback of callbacks) {
        callback(...args);
      }
    }
  }
}
