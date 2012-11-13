var format = require('util').format;
var default_format = '[%s] %s';
var funcs = {
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error
};

// patch when require()d
patch(default_format);

// patch when invoked
module.exports = patch;

function patch(s, fn) {
  if (typeof s === 'function') {
    fn = s;
    s = null;
  }
  s = s || default_format;
  fn = fn || Date;
  Object.keys(funcs).forEach(function(k) {
    console[k] = function() {
      arguments[0] = format(s, fn(), arguments[0]);
      funcs[k].apply(console, arguments);
    };
  });
}
