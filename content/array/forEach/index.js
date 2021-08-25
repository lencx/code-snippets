Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}
