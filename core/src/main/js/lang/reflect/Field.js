// {{{ Field
lang.reflect.Field = define('lang.reflect.Field', 'lang.Object', function Field($clazz, $name, $modifiers) {
  this.$clazz = $clazz;
  this.$name = $name;
  this.$modifiers = $modifiers;
});

lang.reflect.Field.prototype.getName = function Field$getName() {
  return this.$name;
}

lang.reflect.Field.prototype.toString = function Field$toString() {
  return 'public ' + (this.$modifiers & 1 ? 'static ' : '') + this.$clazz.$name + '::$' + this.$name;
}
// }}}
