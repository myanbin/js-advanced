class MyMath {
  sum(a, b) {
    return a + b;
  }
  sum_async(a, b, callback) {
    setTimeout(function () {
      callback(a + b);
    }, 1000);
  }
  multi(a, b) {
    return a * b;
  }
}

// export default { MyMath };

module.exports = MyMath;