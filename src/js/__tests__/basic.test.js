import getHealthLevel from '../app';

test('health check', () => {
  const result = { name: 'Маг', health: 90 };
  expect(getHealthLevel(result)).toBe('healthy');
});

test('health checks', () => {
  const result = { name: 'Маг', health: 40 };
  expect(getHealthLevel(result)).toBe('wounded');
});

test('health checkc', () => {
  const result = { name: 'Маг', health: 5 };
  expect(getHealthLevel(result)).toBe('critical');
});