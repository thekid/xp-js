uses('lang.ClassNotFoundException', 'lang.FileSystemClassLoader', 'lang.archive.ArchiveClassLoader');

lang.ClassLoader = define('lang.ClassLoader', 'lang.Object', function ClassLoader() { });

lang.ClassLoader.delegates= [];

lang.ClassLoader.__static = function() {

  // Set up delegates
  var delegate;
  for (var i= 0; i < global.classpath.length; i++) {
    switch (global.fs.ftype(global.classpath[i])) {
      case 'dir':  delegate= lang.FileSystemClassLoader.instanceFor(global.classpath[i]); break;
      case 'file': delegate= lang.archive.ArchiveClassLoader.instanceFor(global.classpath[i]); break;
    }
    lang.ClassLoader.delegates.push(delegate);
  }

  // From now on, classes can be loaded from here!
  global.loader = lang.ClassLoader.loadClass0;
}

lang.ClassLoader.loadClass = function ClassLoader$loadClass($class) {
  return new lang.XPClass(lang.ClassLoader.loadClass0($class));
}

lang.ClassLoader.loadClass0 = function ClassLoader$loadClass0($class) {
  if (typeof(global[$class]) === 'function') return $class;

  // Check delegates
  for (var i = 0; i < lang.ClassLoader.delegates.length; i++) {
    if (lang.ClassLoader.delegates[i].providesClass($class)) {
      return lang.ClassLoader.delegates[i].loadClass0($class);
    }
  }

  throw new lang.ClassNotFoundException('Cannot find class ' + $class);
}
