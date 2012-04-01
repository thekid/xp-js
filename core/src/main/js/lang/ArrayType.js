uses('lang.Type');

// {{{ Primitive
lang.ArrayType = define('lang.ArrayType', 'lang.Type', function ArrayType(name) {
  this.$name = name;
});

lang.ArrayType.forName = function Type$forName($name) {
  if (!$name.endsWith('[]')) {
    throw new lang.IllegalArgumentException('Not an array type: ' + $name);
  }
  return new lang.ArrayType($name);
}

lang.ArrayType.prototype.componentType= function ArrayType$componentType() {
  return this.$name.substring(0, this.$name.length - 2);
};

// }}}
