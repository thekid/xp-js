uses('lang.FileSystemClassLoader');

lang.ClassLoader = define('lang.ClassLoader', 'lang.Object', function ClassLoader() { });

lang.ClassLoader.delegates= [];

lang.ClassLoader.__static = function() {
  for (var i= 0; i < global.classpath.length; i++) {
    lang.ClassLoader.delegates.push(new lang.FileSystemClassLoader(global.classpath[i]));
  }
}
