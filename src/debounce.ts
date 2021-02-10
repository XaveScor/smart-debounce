interface Options {
  maxTimeout: number;
}
const defaultOptions: Options = {
  maxTimeout: 1000,
};

export function debounce<
  Args extends any[],
  Func extends (...args: Args) => void
>(func: Func, options = defaultOptions) {
  let handler: any;
  return (...args: Args): void => {
    clearTimeout(handler);
    handler = setTimeout(() => {
      func(...args);
    }, options.maxTimeout);
  };
}
