Array.prototype.myMap = function(callback) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    arr[i] = callback(this[i], i, this);
  }
  return arr;
}