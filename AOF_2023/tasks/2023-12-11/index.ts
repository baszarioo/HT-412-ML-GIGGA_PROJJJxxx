class PriorityQueue {
  private queue: [string, number][];

  constructor() {
    this.queue = [];
  }

  enqueue(item: [string, number]): void {
    if (this.isEmpty()) {
      this.queue.push(item);
    } else {
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (item[1] < this.queue[i][1]) {
          this.queue.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) {
        this.queue.push(item);
      }
    }
  }

  dequeue(): [string, number] {
    return this.queue.shift() as [string, number];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }
}


export interface WeightedGraph {
  [key: string]: { [key: string]: number };
}

export function findShortestPath(graph: WeightedGraph, start: string, end: string): string[] | null {
  const costs: { [key: string]: number } = {};
  const paths: { [key: string]: string[] } = { [start]: [] };
  const pq = new PriorityQueue();

  pq.enqueue([start, 0]);

  while (!pq.isEmpty()) {
    const [node, cost] = pq.dequeue();
    if (costs[node] !== undefined && cost > costs[node]) continue;
    costs[node] = cost;

    for (let neighbor in graph[node]) {
      let newCost = cost + graph[node][neighbor];
      if (costs[neighbor] === undefined || newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
        paths[neighbor] = [...paths[node], node];
        pq.enqueue([neighbor, newCost]);
      }
    }
  }
  if(!graph[start] || !graph[end]) {
    throw new Error('Invalid or non-existent route');
  }

  if (costs[end] === undefined) {
    return null;
  }

  return [...paths[end], end];
}
