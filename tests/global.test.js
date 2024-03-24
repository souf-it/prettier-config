import { test, expect } from 'vitest';
import globalConfig from '../global';

test('Prettier configuration', () => {
  expect(typeof globalConfig === 'object').toBe(true);
  expect(Object.keys(globalConfig)).length.above(1);
});
