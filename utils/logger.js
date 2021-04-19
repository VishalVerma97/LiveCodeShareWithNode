const config = require('../config/config');

function noLogging() {
}

let consoleLog = config.logging ? console.log.bind(console): noLogging;

let logger = {

  log: function() {
    let args = [...arguments]
      .map(function(arg) {
        if(typeof arg === 'object') {
          let string = JSON.stringify(arg, 2);
          return string;
        } else {
          arg+='';
          return arg;
        }
      });
    console.log(args);
    consoleLog.apply(console, args);
  }
}

module.exports = logger;