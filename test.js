var keynameOf = require("./");

it('returns the keyname of given key code', function(){
  expect(keynameOf(27)).to.equal('esc');
  expect(keynameOf(91)).to.equal('meta');
  expect(keynameOf(65)).to.equal('a');
});
