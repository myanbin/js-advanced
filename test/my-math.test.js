let assert = require('assert');
let expect = require('chai').expect;
// import MyMath from '../src/utils/my-math';
let MyMath = require('../src/utils/my-math');

describe('测试 MyMath', function () {
  let my;

  // 每个测试套件执行一次
  before(function () {
    my = new MyMath();
  });
  after(function () {
    // console.log('测试结束');
  });
  // 每个测试用例执行一次
  beforeEach(function () {
  });
  afterEach(function () {
  });
  it('测试加法', function (done) {
    let m1 = my.sum(1, 2);

    // assert.ok(m1 == 3);
    expect(m1).to.equal(3);

    my.sum_async(2, 4, function (m2) {
      assert.ok(m2 == 6);
      // 使用 done 表示异步函数执行完成
      done();
    })
  });
  it('测试乘法', function () {
    let m1 = my.multi(1, 2);

    assert.ok(m1 == 2);
  });
  it('又一个测试', function () {
    expect([1, 2]).to.be.an('array').that.does.not.include(3);
  });
});
