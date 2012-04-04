lang.Enum = define('lang.Enum', 'lang.Object', function Enum($ordinal, $name) {
  this.$ordinal = $ordinal;
  this.$name = $name;
});

lang.Enum.membersOf = function Enum$membersOf(self) {
  var names = Object.getOwnPropertyNames(self);
  members= [];
  for (var i = 0; i < names.length; i++) {
    prop= self[names[i]];
    if ('prototype' !== names[i] && prop instanceof lang.Enum) members[prop.$ordinal]= prop;
  }

  // The members array is sorted by ordinal, but has space
  // e.g. "a,b,,,,,c,d" if the ordinals are not continuous 
  result= [];
  for (var member in members) {
    result.push(members[member]);
  }
  return result;
}

lang.Enum.valuesOf = function Enum$valuesOf($class) {
  if (!$class.isEnum()) {
    throw new lang.IllegalArgumentException($class.getName() + ' is not an enum');
  }
  return lang.Enum.membersOf($class.$reflect);
}

lang.Enum.valueOf = function Enum$valueOf($class, $name) {
  if (!$class.isEnum()) {
    throw new lang.IllegalArgumentException($class.getName() + ' is not an enum');
  }

  var prop= $class.$reflect['$' + $name];
  if (prop instanceof lang.Enum) return prop;
  throw new lang.IllegalArgumentException('No such member "' + $name + '" in ' + $class.getName());
}

lang.Enum.prototype.name = function Enum$name() {
  return this.$name;
}

lang.Enum.prototype.ordinal = function Enum$ordinal() {
  return this.$ordinal;
}

lang.Enum.prototype.toString = function Enum$toString() {
  return this.$name;
}
