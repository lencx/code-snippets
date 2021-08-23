require('./index');

test('map', () => {
  const newData = [1, 2, 3, 4].myMap((item) => item * 2);
  expect(newData).toStrictEqual([2, 4, 6, 8]);
})
