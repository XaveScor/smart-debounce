interface Options {
  maxTimeout: number;
}
const defaultOptions: Options = {
  maxTimeout: 1000,
};

export function debounce<Func extends (...args: any[]) => void>(
  func: Func,
  options = defaultOptions
) {
  let handler: any;
  return (...args: Parameters<Func>): void => {
    clearTimeout(handler);
    handler = setTimeout(() => {
      func(...args);
    }, options.maxTimeout);
  };
}
