lang.Enum = define('lang.Enum', 'lang.Object', function Enum(ordinal, name) {
  this.ordinal = ordinal;
  this.name = name;
});

lang.Enum.membersOf = function Enum$membersOf(self) {
  var names = Object.getOwnPropertyNames(self);
  result= [];
  for (var i = 0; i < names.length; i++) {
    prop= self[names[i]];
    if (prop instanceof lang.Enum) result[prop.ordinal]= prop;
  }
  return result;
}

lang.Enum.prototype.name = function Enum$name() {
  return this.name;
}

lang.Enum.prototype.ordinal = function Enum$ordinal() {
  return this.ordinal;
}

lang.Enum.prototype.toString = function Enum$toString() {
  return this.name;
}
