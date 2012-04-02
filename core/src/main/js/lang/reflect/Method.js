uses('lang.ElementNotFoundException', 'lang.reflect.Parameter');

// {{{ Method
lang.reflect.Method = define('lang.reflect.Method', 'lang.Object', function Method($clazz, $name, $modifiers) {
  this.$clazz = $clazz;
  if (typeof($clazz.$reflect.prototype[$name]) !== 'undefined') {
    this.$reflect = $clazz.$reflect.prototype[$name];
  } else {
    this.$reflect = $clazz.$reflect[$name];
  }
  this.$name = $name;
  this.$modifiers = $modifiers;
});

lang.reflect.Method.prototype.$name = '';

lang.reflect.Method.prototype.$parameters = null;

lang.reflect.Method.prototype.getName = function Method$getName() {
  return this.$name;
}

lang.reflect.Method.prototype.getModifiers = function Method$getModifiers() {
  return this.$modifiers;
}

lang.reflect.Method.prototype.toString = function Method$toString() {
  var p= this.getParameters();
  var s= '';
  for (var i= 0; i < p.length; i++) {
    s+= ', ' + p[i].getTypeName() + ' $' + p[i].getName();
  }
  return lang.reflect.Modifiers.stringOf(this.$modifiers) + ' ' + this.getReturnTypeName() + ' ' + this.$name + '(' + s.substring(2) + ')';
}

lang.reflect.Method.prototype.getParameters = function Method$getParameters() {
  if (null === this.$parameters) {    // Cache
    var s= this.$reflect.prototype.constructor.toString();
    var a= s.substring(s.indexOf('(')+ 1, s.indexOf(')')).split(/, ?/);
    var t= this.$reflect['_'] === undefined ? [] : this.$reflect['_']['signature'];

    this.$parameters= [];
    if ('' !== a[0]) {      // ''.split() = ['']
      for (var i= 0; i < a.length; i++) {
        this.$parameters.push(new lang.reflect.Parameter({ name : a[i], type: t[i] || 'var' }));
      }
    }
  }
  return this.$parameters;
}

lang.reflect.Method.prototype.getParameter = function Method$getParameter(offset) {
  var p= this.getParameters();
  if (offset < 0 || offset >= p.length) return null;
  return p[offset];
}

lang.reflect.Method.prototype.numParameters = function Method$numParameters() {
  return this.getParameters().length;
}

lang.reflect.Method.prototype.getReturnTypeName = function Method$getReturnTypeName() {
  if (this.$reflect['_'] === undefined) return 'var';
  return this.$reflect['_']['returns'];
}

lang.reflect.Method.prototype.getReturnType = function Method$getReturnType() {
  return lang.Type.forName(this.getReturnTypeName());
}

lang.reflect.Method.prototype.getExceptionNames = function Method$getExceptionNames() {
  if (this.$reflect['_'] === undefined) return [];
  return this.$reflect['_']['throws'];
}

lang.reflect.Method.prototype.getExceptionTypes = function Method$getExceptionTypes() {
  if (this.$reflect['_'] === undefined) return [];
  var t= this.$reflect['_']['throws'];
  var r= [];
  for (var i= 0; i < t.length; i++) {
    r.push(lang.XPClass.forName(t[i]));
  }
  return r;
}

lang.reflect.Method.prototype.invoke = function Method$invoke(obj, args) {
  return this.$reflect.apply(obj, args);
}

lang.reflect.Method.prototype.hasAnnotations = function Method$hasAnnotations(name) {
  return typeof(this.$reflect['@']) !== 'undefined';
}

lang.reflect.Method.prototype.hasAnnotation = function Method$hasAnnotation(name) {
  return this.hasAnnotations() && typeof(this.$reflect['@'][name]) !== 'undefined';
}

lang.reflect.Method.prototype.getAnnotation = function Method$getAnnotation(name) {
  if (!this.hasAnnotation(name)) {
    throw new lang.ElementNotFoundException('No such annotation "' + name + '"');
  }
  return this.$reflect['@'][name];
}

lang.reflect.Method.prototype.getAnnotations = function Method$getAnnotations() {
  if (this.hasAnnotations()) {
    return this.$reflect['@'];
  }
  return [];
}

lang.reflect.Method.prototype.getComment = function Method$getComment() {
  return this.$reflect['/'];
}
// }}}
