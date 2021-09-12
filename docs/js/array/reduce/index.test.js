require('./index');

test('reduce', () => {
  const indexArr = [];
  const newData = [1, 2, 3, 4].myReduce((acc, cur, index) => {
    indexArr.push(index);
    return acc + cur;
  });
  expect(newData).toStrictEqual(10);
  expect(indexArr).toStrictEqual([1, 2, 3]);
})

test('reduce initialValue', () => {
  const indexArr = [];
  const newData = [1, 2, 3, 4].myReduce((acc, cur, index) => {
    indexArr.push(index);
    return acc + cur;
  }, 2);
  expect(newData).toStrictEqual(12);
  expect(indexArr).toStrictEqual([0, 1, 2, 3]);
})
