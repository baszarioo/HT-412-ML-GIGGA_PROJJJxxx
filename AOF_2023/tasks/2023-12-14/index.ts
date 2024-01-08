export type Gift = {
  value: number;
  weight: number;
  volume: number;
};

export function calculateMaxGiftValue(gifts: Gift[], maxWeight: number, maxVolume: number): number {
  const dp: number[][][] = Array.from({ length: gifts.length + 1}, () =>
    Array.from({ length: maxWeight + 1 }, () => Array(maxVolume + 1).fill(0))
  );
  for(let i=1; i<=gifts.length; i++) {
    const { value, weight, volume } = gifts[i-1];
    for(let w=0; w<=maxWeight; w++) {
      for(let v=0; v<=maxVolume; v++) {
        if(weight<=w && volume <= v) {
          dp[i][w][v] = Math.max(
            dp[i-1][w][v],
            dp[i-1][w-weight][v-volume]+value
          );
        } else {
          dp[i][w][v] = dp[i-1][w][v];
        }
      }
    }
  }
  return dp[gifts.length][maxWeight][maxVolume];
}