lang.Enum = define('lang.Enum', 'lang.Object', function Enum($ordinal, $name) {
  this.$ordinal = $ordinal;
  this.$name = $name;
});

lang.Enum.membersOf = function Enum$membersOf(self) {
  var names = Object.getOwnPropertyNames(self);
  result= [];
  for (var i = 0; i < names.length; i++) {
    prop= self[names[i]];
    if ('prototype' !== names[i] && prop instanceof lang.Enum) result[prop.$ordinal]= prop;
  }
  return result;
}

lang.Enum.valuesOf = function Enum$valuesOf($class) {
  var members = lang.Enum.membersOf($class.$reflect);

  // The members array is sorted by ordinal, but has space
  // e.g. "a,b,,,,,c,d" if the ordinals are not continuous 
  result= [];
  for (var member in members) {
    result.push(members[member]);
  }
  return result;
}

lang.Enum.valueOf = function Enum$valueOf($class, $name) {
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
