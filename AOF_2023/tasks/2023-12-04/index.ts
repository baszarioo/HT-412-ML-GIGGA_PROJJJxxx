type Func = (...args: any[]) => any;
export function memoize(fn: Func): Func {
  if(typeof fn !== 'function') {
    throw new Error('Function to be memoized must be a function.');
  }
  const cache: Map<string, any> = new Map();
  return function (...args: any[]): any {
    const key=JSON.stringify(args);
    if(cache.has(key)){
      return cache.get(key); 
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}