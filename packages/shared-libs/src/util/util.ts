export function delay(timeMs: number): Promise<void> {
  return new Promise((res) => setTimeout(res, timeMs));
}
