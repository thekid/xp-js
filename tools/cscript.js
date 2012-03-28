





var global = this;
var fso = WScript.CreateObject('Scripting.FileSystemObject');
var wsh = WScript.CreateObject('WScript.Shell');

var _mgmts = null;
function winmgmts() {
  if (null === _mgmts) {
    _mgmts= GetObject('winmgmts://./root/cimv2');
  }
  return _mgmts;
}


var argv = new Array();
for (var i = 0; i < WScript.Arguments.Count(); i++) {
  argv.push(WScript.Arguments.Item(i));
}


global.fs = {
  DIRECTORY_SEPARATOR : '\\',

  file : function(uri) {
    return fso.OpenTextFile(uri, 1).ReadAll().split("\n");
  },

  exists : function(uri) {
    return fso.FileExists(uri);
  },

  glob : function(uri, pattern) {
    var filtered= [];
    if (fso.FolderExists(uri)) {
      var files = new Enumerator(fso.GetFolder(uri).Files);
      while (!files.atEnd()) {
        var file = files.item();
        if (pattern.test(file.Name)) {
          filtered.push(file.Name);
        }
        files.moveNext();
      }
    }
    return filtered;
  }
};

var path = { };
path.join = function() {
  var path = '';
  for (var i = 0; i < arguments.length; i++) {
    if (typeof(arguments[i]) === 'string') path+= '\\' + arguments[i].replace(/(\/)/g, '\\');
  }
  return path.substring(1);
}


var process = { };
process.cwd = function() {
  return wsh.CurrentDirectory;
}
process.runtime = function() {
  return 'WScript ' + WScript.Version + '.' + WScript.BuildVersion;
}
process.os = function() {
  var os = new Enumerator(winmgmts().InstancesOf('Win32_OperatingSystem')).item();
  return os.Caption + os.Version + ' (' + os.OSArchitecture + ')';
}
process.memoryUsage = function() {
  return { rss: undefined };
}

process.env = wsh.Environment;


global.execution = {
  trace : function(error) {
    var current= arguments.callee.caller.caller;
    var seen= [];
    while (current) {
      var f= current.toString();
      var a= '';
      for (var i= 0; i < current.arguments.length; i++) {
        a += ', ' + lang.Throwable.stringOf(current.arguments[i]);
      }
      error.$stacktrace.push((f.substring(9, f.indexOf('(')) || '<anonymous>').replace('$', '.') + '(' + a.substring(2) + ')');
      if (current === global.__main || seen.indexOf(current) >= 0) break;
      seen.push(current);
      current = current.caller;
    }
  }
};


global.out= {
  write : function(data) {
    WScript.StdOut.Write(data);
  },
  writeLine : function(data) {
    WScript.StdOut.Write(data);
    WScript.StdOut.WriteBlankLines(1);
  }
};


var include = function(filename) {
  try {
    eval(fso.OpenTextFile(filename, 1).ReadAll());
  } catch (e) {
    throw new Error(filename + ': ' + e.message);
  }
}


if (typeof(Object.defineProperty) === 'undefined') {
  Object.defineProperty= function(object, propertyname, descriptor) {
    object[propertyname]= descriptor.value;
  }
}

if (typeof(Object.getOwnPropertyNames) === 'undefined') {
  Object.getOwnPropertyNames= function(object) {
    var names = [];
    if (null !== object) {
      for (var name in object) {
        names.push(name);
      }
      names.push('prototype');
      names.push('arguments');
    }
    return names;
  }
}

if (typeof(Array.prototype.indexOf) === 'undefined') {
  Array.prototype.indexOf= function(val) {
    for (var i in this) {
      if (this[i] === val) return i;
    }
    return -1;
  }
}

if (typeof(Array.prototype.forEach) === 'undefined') {
  Array.prototype.forEach= function(func, self) {
    for (var i = 0; i < this.length; i++) {
      func.call(self, this[i], i, this);
    }
  }
}

global.native = function() {
  eval(
    'var exports = {}; ' +
    fso.OpenTextFile(WScript.ScriptFullName.substring(0, WScript.ScriptFullName.lastIndexOf('\\')) + '\\' + "php.default.commonjs.min" + '.js', 1).ReadAll()
  );
  return exports;
}();
global.version= "0.8.2";
function scanpath(paths, home) {
  var inc= [];
  for (p= 0; p < paths.length; p++) {
    var lines= global.fs.file(path.join(paths[p], 'class.pth'));
    for (i= 0; i < lines.length; i++) {
      line= lines[i];
      if ('' === line || '#' === line[0]) {
        continue;
      } else if ('!' === line[0]) {
        pre= true;
        line= line.substring(1);
      } else {
        pre= false;
      }
      if ('~' === line[0]) {
        line= line.substring(1);
        base= home;
      } else if ('/' === line[0] || ':' === line[1] && '\\' === line[2]) {
        base= null;
      } else {
        base= paths[p];
      }
      qn= path.join(base, line);
      pre ? inc.unshift(qn) : inc.push(qn);
    }
  }
  return inc;
}
global.classpath= scanpath([process.cwd()], process.env['HOME']);
global.classpath.push(process.cwd());
global.stringOf= function(object) {
  var indent = arguments.length == 1 ? '  ' : arguments[1];
  switch (typeof(object)) {
    case 'string': return '"' + object + '"';
    case 'number': return object;
    case 'function': {
      r= "function {\n";
      for (var member in object) {
        r+= indent + member + ' : ' + object[member] + "\n";
      }
      return r + '}';
    }
    case 'object': {
      if (null === object) {
        return 'null';
      } else if (object.__class === undefined) {
        r= "object {\n";
        for (var member in object) {
          r+= indent + member + ' : ' + stringOf(object[member], indent + '  ') + "\n";
        }
        return r + '}';
      } else {
        r= object.__class + " {\n";
        for (var member in object) {
          if (typeof(object[member]) !== 'function') {
            r+= indent + member + ' : ' + stringOf(object[member], indent + '  ') + "\n";
          }
        }
        return r + '}';
      }
    }
    default: throw new lang.IllegalArgumentException('Unknown type ' + typeof(object));
  }
}
global.uses= function uses() {
  for (var i= 0; i < arguments.length; i++) {
    if (typeof(global[arguments[i]]) === 'function') continue;
    var names = arguments[i].split('.');
    var it = global;
    for (var n= 0; n < names.length - 1; n++) {
      if (typeof(it[names[n]]) === 'undefined') it[names[n]]= {};
      it = it[names[n]];
    }
    for (var c= 0; c < global.classpath.length; c++) {
      var fn = path.join(global.classpath[c], arguments[i].replace(/\./g, '/') + '.js');
      if (!global.fs.exists(fn)) continue;
      include(fn);
      global[arguments[i]]= it[names[n]]= eval(arguments[i]);
      if (typeof(it[names[n]]['__static']) === 'function') {
        it[names[n]].__static();
      }
    }
  }
}
global.define= function define(name, parent, construct) {
  global[name] = construct || new Function;
  global[name].__class = name;
  if (null !== parent) {
    var helper = new Function;
    helper.prototype = global[parent].prototype;
    var proto = new helper;
    global[name].prototype = proto;
    global[name]['<']= global[parent]['<'];
    global[name].prototype.__super = global[parent];
  }
  global[name].prototype.__class = name;
  return global[name];
}
global.is = function is(t, instance) {
  var type = 'string' === typeof(t) ? global[t] : t;
  if (null === instance) return false;
  if (instance instanceof type) return true;
  if (instance.__class === undefined) return false;
  var interfaces = global[instance.__class]['<'];
  for (var i= 0; i < interfaces.length; i++) {
    if (interfaces[i] === type) return true;
  }
  return false;
}
global.cast= function cast(value, type) {
  if ('int' === type) {
    return parseInt(value);
  } else if ('double' === type) {
    return parseFloat(value);
  } else if ('string' === type) {
    return String(value);
  } else if ('bool' === type) {
    return !!value;
  } else if (type.endsWith('[]')) {
    return typeof(value) === 'Array' ? value : [value];
  } else if (type.startsWith('[')) {
    if (typeof(value) === 'Function') return value;
    throw new Error('Cannot cast ' + value + ' to ' + type);
  } else {
    if (value instanceof type) return value;
    throw new Error('Cannot cast ' + value + ' to ' + type);
  }
}
global.clone= function clone(object) {
  if (typeof(object) !== 'object') return object;
  var that = {};
  for (var property in object) {
    that[property]= clone(object[property]);
  }
  if ('__clone' in object) {
    object['__clone'].call(that);
  }
  that.prototype = object.prototype;
  return that;
}
Error.prototype.toString = function() {
  return 'Error<' + this.name + ': ' + this.message + '>';
}
uses(
  'lang.Generic',
  'lang.Object',
  'lang.Throwable',
  'lang.Error',
  'lang.XPException',
  'lang.XPClass',
  'lang.NullPointerException',
  'lang.IllegalAccessException',
  'lang.IllegalArgumentException',
  'lang.IllegalStateException',
  'lang.FormatException',
  'lang.ClassLoader',
  'util.cmd.Console'
);
global.xp = global;
global.__main= function __main() {
  try {
    clazz = argv.shift() || 'xp.runtime.Version';
    lang.XPClass.forName(clazz).getMethod('main').invoke(null, [argv]);
  } catch (e) {
    util.cmd.Console.writeLine('*** Uncaught exception ', e.toString());
  }
}
global.__main();
