// {{{ Reflect
Reflect = define('Reflect', 'lang.Object', function Reflect() { });

Reflect.prototype.toString = function Reflect$toString() {
  return "Reflect instance";
};

Reflect.main = function Reflect$main(args) {
  clazz= lang.XPClass.forName(args[0]);

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

  util.cmd.Console.writeLine(' }');
}
// }}}
