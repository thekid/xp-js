uses('lang.Type');

// {{{ Primitive
lang.MapType = define('lang.MapType', 'lang.Type', function MapType(name) {
  this.$name = name;
});

lang.ArrayType.forName = function Type$forName($name) {
  if (!$name.startsWith('[:')) {
    throw new lang.IllegalArgumentException('Not a map type: ' + $name);
  }
  return new lang.ArrayType($name);
}

lang.MapType.prototype.componentType= function MapType$componentType() {
  return this.$name.substring(2, this.$name.length - 1);
};

// }}}
