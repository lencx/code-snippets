Array.prototype.myFilter = function (callback, context) {
  var arr = [];
  var idx = 0;
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr[idx++] = this[i];
    }
  }
  return arr;
};