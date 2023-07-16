export function debounce<T extends any[]>(func: (...arg: T) => void, wait: number): (...args: T) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return function executedFunction(...args: T) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
