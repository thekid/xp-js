// {{{ Parameter
lang.reflect.Parameter = define('lang.reflect.Parameter', 'lang.Object', function Parameter($reflect) {
  this.$reflect = $reflect;
});

lang.reflect.Parameter.prototype.getName = function Parameter$getName() {
  if ('$' === this.$reflect.name.charAt(0)) {
    return this.$reflect.name.substring(1);
  }
  return this.$reflect.name;
}

lang.reflect.Parameter.prototype.getType = function Parameter$getType() {
  return lang.Type.forName(this.$reflect.type);
}

lang.reflect.Parameter.prototype.getTypeName = function Parameter$getTypeName() {
  return this.$reflect.type;
}

lang.reflect.Parameter.prototype.toString = function Parameter$toString() {
  return this.getClassName() + '< ' + this.$reflect.type + ' ' + this.$reflect.name + '>';
}
