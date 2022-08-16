import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { pipe } from '../pipe';

export function toUpperCase(str: string) {
  return str.toUpperCase();
}

export function log(str: string) {
  console.log(str);
  return str;
}

export function getChars(str: string) {
  return str.split('');
}

describe('pipe', () => {
  it('should run all functions', () => {
    const result = pipe(toUpperCase, log, getChars)('hello') as string[];
    deepStrictEqual(result, ['H', 'E', 'L', 'L', 'O']);
  });
});
