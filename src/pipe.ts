export type PipeFunction = (...args: any[]) => any;

/**
 * Run all functions, taking into account the value returned by the previous function
 * @param {...PipeFunction} fns - Functions to run
 * @returns {unknown} The value returned by the last function
 */
function pipe(...fns: PipeFunction[]) {
  return (...args: unknown[]) => fns.reduce((acc, fn) => [fn(...acc)], args)[0];
}

export { pipe };
