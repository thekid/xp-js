/**
 * Windows scripting Host runtime
 *
 * @see http://msdn.microsoft.com/en-us/library/9bbdkx3k.aspx
 */

var global = this;
var fso = WScript.CreateObject('Scripting.FileSystemObject');
var wsh = WScript.CreateObject('WScript.Shell');

// Command line arguments
var argv = new Array();
for (var i = 0; i < WScript.Arguments.Count(); i++) {
  argv.push(WScript.Arguments.Item(i));
}

// Filesystem
var fs = { };
fs.file = function(uri) {
  return fso.OpenTextFile(uri, 1).ReadAll().split("\n");
}
fs.exists = function(uri) {
  return fso.FileExists(uri);
}

var path = { };
path.join = function() {
  var path = '';
  for (var i = 0; i < arguments.length; i++) {
    if (typeof(arguments[i]) === 'string') path+= '\\' + arguments[i];
  }
  return path.substring(1);
}

// Process
var process = { };
process.cwd = function() {
  return wsh.CurrentDirectory;
}

process.env = wsh.Environment;

// STDIO
global.out= {
  write : function(data) {
    WScript.StdOut.Write(data);
  },
  writeLine : function(data) {
    WScript.StdOut.Write(data);
    WScript.StdOut.WriteBlankLines(1);
  }
};

// Loading
var include = function(filename) {
  try {
    eval(fso.OpenTextFile(filename, 1).ReadAll());
  } catch (e) {
    throw new Error(filename + ': ' + e.message);
  }
}

// Mimick (in an unsafe way) Object.defineProperty()
if (typeof(Object.defineProperty) === 'undefined') {
  Object.defineProperty= function(object, propertyname, descriptor) {
    object[propertyname]= descriptor.value;
  }
}

#include "common.js"