export function pause(time: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T {
  let timeout: number | undefined;
  return ((...args: any[]) => {
    if (!timeout) {
      timeout = window.setTimeout(() => {
        timeout = undefined;
        func(...args);
      }, wait);
    }
  }) as T;
}
