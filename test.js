var test = require('tape')
var keynameOf = require("./");

test('returns the keyname of given key code', function(t){
  t.equal(keynameOf(27), 'esc');
  t.equal(keynameOf(91), 'meta');
  t.equal(keynameOf(65), 'a');

  t.end();
});
