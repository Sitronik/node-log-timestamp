var util = require('util');
const moment = require('moment');

var logprefix = require('log-prefix');

module.exports = patch;

patch(); // patch when require'd

function patch(prefix) {
  if(typeof prefix === 'function')
    logprefix(prefix);
  else if(typeof prefix === 'string' && prefix)
    logprefix(() => prefix + ' ' + timestamp());
  else
    logprefix(timestamp);
}

// the default date format to print
function timestamp() {
  return '[' + moment().format('DD.MM.YYYY HH:mm:ss') + ']';
}
