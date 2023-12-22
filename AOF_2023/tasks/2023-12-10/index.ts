export function findCyclesBetweenLocations(graph: Record<string, string[]>): string[][] {
  const visited = new Set<string>();
  const cycles: string[][] = [];
  function dfs(node: string, path: string[] = []) {
    visited.add(node);
    path.push(node);
    for(const neighbor of graph[node]){
      if(!graph[neighbor]) {
        throw new Error('Invalid graph: missing nodes');
      }
      if(!visited.has(neighbor)) {
        dfs(neighbor, path.slice());
      } else if( path.includes(neighbor)) {
        const cycle = path.slice(path.indexOf(neighbor));
        cycle.push(neighbor);
        cycles.push(cycle);
      }
    }
  }
  for(const node in graph) {
    if(!visited.has(node)) {
      dfs(node);
    }
  }
  return cycles;
}