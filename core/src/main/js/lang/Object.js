// {{{ Object
lang.Object = define('lang.Object', null, function Object() { });
lang.Object['<']= [lang.Generic];

// root-trait
lang.Object.prototype.getClass = function Object$getClass() {
  return new lang.XPClass(this.__class);
}
lang.Object.prototype.getClassName = function Object$getClassName() {
  return this.__class;
}
lang.Object.prototype.equals = function Object$equals(cmp) {
  return this == cmp;
}
lang.Object.prototype.hashCode = function Object$hashCode() {
  if (this.__id === undefined) {
    this.__id= global.objectid(this);
  }
  return this.__id;
}
// root-trait

lang.Object.prototype.toString = function Object$toString() {
  return stringOf(this);
}
// }}}
