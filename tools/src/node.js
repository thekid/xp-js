/**
 * NodeJS runtime
 *
 * @see http://nodejs.org/api/
 */

var fs = require('fs');
var path= require('path');
var os= require('os');

// Command line arguments
var argv= process.argv; 
argv.shift(); // node.exe
argv.shift(); // node.js

// Filesystem
global.fs = {
  DIRECTORY_SEPARATOR : path.normalize('/'),

  file : function(uri) {
    return fs.readFileSync(uri).toString().split("\n");
  },

  exists : function(uri) {
    return path.existsSync(uri);
  },

  glob : function(uri, pattern) {
    var filtered = [];
    if (path.existsSync(uri)) {
      var files = fs.readdirSync(uri);
      for (var i = 0; i < files.length; i++) {
        if (pattern.test(files[i])) {
          filtered.push(files[i].substring(files[i].lastIndexOf(global.fs.DIRECTORY_SEPARATOR)));
        }
      }
    }
    return filtered;
  }
};

// STDIO
global.out= {
  write : function(data) {
    process.stdout.write(data + "");
  },
  writeLine : function(data) {
    process.stdout.write(data === undefined ? "\n" : data + "\n");
  },
};

// Process
process.runtime = function() {
  return 'Node ' + process.versions.node + ' & V8 ' + process.versions.v8;
}
process.os = function() {
  return os.type() + ' ' + os.release() + ' (' + os.arch() + ')';
}

// Execution
global.execution = {
  trace : function(error) {
    Error.captureStackTrace(error, lang.Throwable);
    error.stack;    // Cause prepareStackTrace() to execute
  }
};

Error.prepareStackTrace = function(error, structured) {
  for (var i = 0; i < structured.length; i++) {
    var f= structured[i].getFunction();
    var a= '';
    for (var j = 0; j < f.arguments.length; j++) {
      a += ', ' + lang.Throwable.stringOf(f.arguments[j]);
    }

    error.$stacktrace.push(
      structured[i].getFunctionName().replace(/\$/, '.') +
      '(' + a.substring(2) + ')' +
      ' [line ' + structured[i].getLineNumber() + ' of ' + 
      (structured[i].isNative() ? '(native)' : path.basename(structured[i].getFileName())) 
      + ']'
    );

    if (f === global.__main) break;
  }
  return '';
};

// Loading
include = require;

// Native
global.native = require('./' + PHPJS_FILE);

#include "common.js"
