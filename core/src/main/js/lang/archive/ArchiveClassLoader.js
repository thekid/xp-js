lang.archive.ArchiveClassLoader = define('lang.archive.ArchiveClassLoader', 'lang.Object', function ArchiveClassLoader($path) {
  this.$path= $path;
  this.$xar= null;
});

lang.archive.ArchiveClassLoader.$instances= {};

lang.archive.ArchiveClassLoader.instanceFor= function ArchiveClassLoader$instanceFor(uri) {
  if (lang.archive.ArchiveClassLoader.$instances[uri] === undefined) {
    lang.archive.ArchiveClassLoader.$instances[uri]= new lang.archive.ArchiveClassLoader(uri);
  }
  return lang.archive.ArchiveClassLoader.$instances[uri];
}

lang.archive.ArchiveClassLoader.prototype.providesClass = function ArchiveClassLoader$providesClass($class) {
  if (this.$xar === null) {
    this.$xar= global.xar.acquire(this.$path);
  }

  return this.$xar.index[$class.replace(/\./g, '/') + '.js'] !== undefined;
}

lang.archive.ArchiveClassLoader.prototype.loadClass0 = function ArchiveClassLoader$loadClass0($class) {
  if (this.$xar === null) {
    this.$xar= global.xar.acquire(this.$path);
  }

  var ln = $class.replace(/\./g, '/') + '.js';
  if (this.$xar.index[ln] === undefined) {
    throw new lang.ClassNotFoundException('No such class ' + $class);
  }

  var names = $class.split('.');
  var it = global;
  for (var n= 0; n < names.length - 1; n++) {
    if (typeof(it[names[n]]) === 'undefined') it[names[n]]= {};
    it = it[names[n]];
  }

  eval(this.$xar.index[ln].read().toString());
  global[$class]= it[names[n]]= eval($class);
  if (typeof(it[names[n]]['__static']) === 'function') {
    it[names[n]].__static();
  }
  global[$class]['.']= ['lang.archive.ArchiveClassLoader', this.$path];
  return $class;
}

lang.archive.ArchiveClassLoader.prototype.toString = function ArchiveClassLoader$toString() {
  return this.getClassName() + '<' + this.$path + '>';
}
