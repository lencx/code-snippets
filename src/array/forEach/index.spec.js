require('./index');

const testData = [1, 2, 3, 4];

test('forEach', () => {
  testData.myEach((item, index, self) => {
    expect(item).toBe(testData[index]);
    expect(self).toBe(testData);
  })
})
