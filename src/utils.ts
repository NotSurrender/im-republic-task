export function pause(time: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}
