lang.FileSystemClassLoader = define('lang.FileSystemClassLoader', 'lang.Object', function FileSystemClassLoader($path) {
  this.$path= $path;
});

lang.FileSystemClassLoader.prototype.loadClass = function FileSystemClassLoader$loadClass($class) {
  var fn = path.join(this.$path, $class.replace(/\./g, '/') + '.js');
  if (!global.fs.exists(fn)) {
    throw new lang.ClassNotFoundException('No such class ' + $class);
  }

  var names = $class.split('.');
  var it = global;
  for (var n= 0; n < names.length - 1; n++) {
    if (typeof(it[names[n]]) === 'undefined') it[names[n]]= {};
    it = it[names[n]];
  }

  include(fn);
  global[$class]= it[names[n]]= eval(arguments[i]);
  if (typeof(it[names[n]]['__static']) === 'function') {
    it[names[n]].__static();
  }
}

lang.FileSystemClassLoader.prototype.toString = function FileSystemClassLoader$toString() {
  return this.getClassName() + '<' + this.$path + '>';
}
