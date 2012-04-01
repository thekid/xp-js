// {{{ Type
lang.Type = define('lang.Type', 'lang.Object', function Type(name) {
  this.$name = name;
});

lang.Type.forName = function Type$forName($name) {
  if ('string' === $name) {
    return lang.Primitive.$STRING;
  } else if ('int' === $name) {
    return lang.Primitive.$INT;
  } else if ('double' === $name) {
    return lang.Primitive.$DOUBLE;
  } else if ('bool' === $name) {
    return lang.Primitive.$BOOL;
  }

  return lang.XPClass.forName($name);
}

lang.Type.prototype.toString = function Type$toString() {
  return this.getClassName() + '<' + this.$name + '>';
}

lang.Type.prototype.getName = function Type$getName() {
  return this.$name;
}
// }}}
