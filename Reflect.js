// {{{ Reflect
Reflect = define('Reflect', 'lang.Object', function Reflect() { });

Reflect.prototype.toString = function Reflect$toString() {
  return "Reflect instance";
};

Reflect.forClass = function  Reflect$forClass(clazz) {
  util.cmd.Console.writeLine('@', clazz.getClassLoader());
  util.cmd.Console.write(clazz);
  if (null !== (parent= clazz.getParentclass())) {
    util.cmd.Console.writeLine(' extends ' + parent.getName() + ' {');
  } else {
    util.cmd.Console.writeLine(' {');
  }

  clazz.getFields().forEach(function(field) {
    util.cmd.Console.writeLine('  ' + field.toString());
  });
  util.cmd.Console.writeLine();
  clazz.getMethods().forEach(function(method) {
    util.cmd.Console.writeLine('  ' + method.toString());
  });

  util.cmd.Console.writeLine('}');
};

Reflect.forPackage = function Reflect$forPackage(package) {
  util.cmd.Console.writeLine(package, ' {');
  package.getClassNames().forEach(function(name) {
    util.cmd.Console.writeLine('  ' + name);
  });
  util.cmd.Console.writeLine('}');
}

Reflect.main = function Reflect$main(args) {
  try {
    Reflect.forClass(lang.XPClass.forName(args[0]));
  } catch (e) {
    Reflect.forPackage(lang.reflect.Package.forName(args[0]));
  }
}
// }}}
