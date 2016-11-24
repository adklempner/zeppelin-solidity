
contract('SafeMath', function(accounts) {

  var safeMath;

  before(function() {
    return SafeMathMock.new()
      .then(function(_safeMath) {
        safeMath = _safeMath;
      });
  });

  it("multiplies correctly", function(done) {
    var a = 10;
    var b = 2;
    return safeMath.multiply(a, b)
    .then(function() {
      return safeMath.result();
    })
    .then(function(result) {
      assert.equal(result, a*b);
    })
    .then(done);
  });

  it("adds correctly", function(done) {
    var a = 10;
    var b = 2;
    return safeMath.add(a, b)
    .then(function() {
      return safeMath.result();
    })
    .then(function(result) {
      assert.equal(result, a+b);
    })
    .then(done);
  });

  it("subtracts correctly", function(done) {
    var a = 10;
    var b = 2;
    return safeMath.subtract(a, b)
    .then(function() {
      return safeMath.result();
    })
    .then(function(result) {
      assert.equal(result, a-b);
    })
    .then(done);
  });

});
