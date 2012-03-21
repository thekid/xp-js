lang.Enum = define('lang.Enum', 'lang.Object', function Enum(ordinal, name) {
  this._ordinal = ordinal;
  this._name = name;
});

lang.Enum.membersOf = function Enum$membersOf(self) {
  var names = Object.getOwnPropertyNames(self);
  result= [];
  for (var i = 0; i < names.length; i++) {
    prop= self[names[i]];
    if ('prototype' !== names[i] && prop instanceof lang.Enum) result[prop._ordinal]= prop;
  }
  return result;
}

lang.Enum.prototype.name = function Enum$name() {
  return this._name;
}

lang.Enum.prototype.ordinal = function Enum$ordinal() {
  return this._ordinal;
}

lang.Enum.prototype.toString = function Enum$toString() {
  return this._name;
}
