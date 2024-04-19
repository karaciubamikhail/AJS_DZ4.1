import getHealthLevel from '../app';

test('health check', () => {
  const result = { name: 'Маг', health: 90 };
  expect(getHealthLevel(result)).toBe('healthy');
});

test('health check', () => {
  const result = { name: 'Маг', health: 40 };
  expect(getHealthLevel(result)).toBe('wounded');
});

test('health check', () => {
  const result = { name: 'Маг', health: 5 };
  expect(getHealthLevel(result)).toBe('critical');
});