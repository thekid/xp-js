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

global.xar = {
  acquire : function(path) {
    var v;
    var fd = fs.openSync(path, 'r');
    var header = new Buffer(0x0100);
    var entry = new Buffer(0x0100);

    // Read header
    fs.readSync(fd, header, 0, 0x0100, null);
    if ('CCA' != header.slice(0, 3)) {    // a3id
      fs.close(fd);
      throw new Error('Malformed archive ' + path);
    }
    if (2 !== (v= header.readInt8(3))) {  // c1version
      fs.close(fd);
      throw new Error('Can only interpret v2 archives, have v' + v);
    }
    var size= header.readUInt32LE(4);     // V1indexsize

    // Read index
    var offset= 0x0100 + size * 0x0100;
    var entries= {};
    for (var i = 0; i < size; i++) {
      fs.readSync(fd, entry, 0, 0x0100, null);
      v= entry.slice(0, 240).toString();
      entries[v.substring(0, v.indexOf("\0"))]= {
        size   : entry.readUInt32LE(240),
        offset : offset + entry.readUInt32LE(244),
        number : i,
        read   : function() {
          var buf = new Buffer(this.size);
          fs.readSync(fd, buf, 0, this.size, this.offset);
          return buf;
        }
      };
    }

    return { 
      handle : fd, 
      index  : entries,
      close  : function() { fs.close(this.fd); }
    };
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
