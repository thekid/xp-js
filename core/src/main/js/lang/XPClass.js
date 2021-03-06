uses('lang.Type', 'lang.reflect.Modifiers', 'lang.reflect.Field', 'lang.reflect.Method', 'lang.reflect.Package', 'lang.ElementNotFoundException', 'lang.ClassNotFoundException');

// {{{ XPClass
lang.XPClass = define('lang.XPClass', 'lang.Type', function XPClass(name) {
  this.$name = name;
  this.$reflect = global[name];
});

lang.XPClass.forName = function XPClass$forName(name) {
  uses(name);
  if (global[name] === undefined) {
    throw new lang.ClassNotFoundException('Cannot find class "' + name + '"');
  }
  return new lang.XPClass(name);
}

lang.XPClass.prototype.getName = function XPClass$getName() {
  return this.$name;
}

lang.XPClass.prototype.getPackage = function XPClass$getPackage() {
  if (-1 === (p= this.$name.lastIndexOf('.'))) return null;
  return new lang.reflect.Package(this.$name.substring(0, p));
}

lang.XPClass.prototype.newInstance = function XPClass$newInstance() {
  function Instance() { }
  Instance.prototype = this.$reflect.prototype;

  var instance = new Instance();
  instance.constructor = this.$reflect;
  this.$reflect.apply(instance, arguments);
  return instance;
}

lang.XPClass.prototype.getParentclass = function XPClass$getParentclass() {
  return this.$reflect.prototype.__super === undefined
    ? null
    : new lang.XPClass(this.$reflect.prototype.__super.__class)
  ;
}

lang.XPClass.prototype.isSubclassOf = function XPClass$isSubclassOf($cmp) {
  if ($cmp instanceof lang.XPClass) {
    $cmp = $cmp.$reflect;
  } else if ('string' === typeof($cmp)) {
    $cmp = global[$cmp];
  }

  // Check prototype chain and interfaces
  return $cmp !== this.$reflect && (
    $cmp.prototype.isPrototypeOf(this.$reflect.prototype) ||
    this.$reflect['<'].indexOf($cmp) >= 0
  );
}

lang.XPClass.prototype.isEnum = function XPClass$isEnum() {
  return this.isSubclassOf(lang.Enum);
}

lang.XPClass.prototype.hasMethod = function XPClass$hasMethod(name) {
  return (
    name in this.$reflect.prototype ||
    (name in this.$reflect && typeof(this.$reflect[name]) === 'function')
  );
}

lang.XPClass.prototype.getMethod = function XPClass$getMethod(name) {
  if (name in this.$reflect.prototype) {
    return new lang.reflect.Method(this, name, lang.reflect.Modifiers.PUBLIC);
  } else if (name in this.$reflect && typeof(this.$reflect[name]) === 'function') {
    return new lang.reflect.Method(this, name, lang.reflect.Modifiers.PUBLIC | lang.reflect.Modifiers.STATIC);
  }
  throw new lang.ElementNotFoundException('No such method ' + this.$name + '::' + name);
}

lang.XPClass.prototype.getMethods = function XPClass$getMethods() {
  var methods = new Array();
  var gather = function(self, object, modifiers) {
    modifiers |= lang.reflect.Modifiers.PUBLIC;
    for (var member in object) {
      if (typeof(object[member]) === 'function' && '__' !== member.substring(0, 2)) {
        methods.push(new lang.reflect.Method(self, member, modifiers));
      }
    }
  };

  gather(this, this.$reflect, lang.reflect.Modifiers.STATIC);
  gather(this, this.$reflect.prototype, 0);
  return methods;
}

lang.XPClass.prototype.hasField = function XPClass$hasField(name) {
  var l = '$' + name;
  return (l in this.$reflect || l in this.$reflect.prototype);
}

lang.XPClass.prototype.getField = function XPClass$getField(name) {
  var l = '$' + name;
  if (l in this.$reflect || l in this.$reflect.prototype) {
    return new lang.reflect.Field(this, name);
  }
  throw new lang.ElementNotFoundException('No such field ' + this.$name + '::' + name);
}

lang.XPClass.prototype.getFields = function XPClass$getFields() {
  var fields = new Array();
  var gather = function(self, object, parent, modifiers) {
    for (var member in object) {
      if ('$' === member.charAt(0) && (parent || object.hasOwnProperty(member))) {
        fields.push(new lang.reflect.Field(self, member.substring(1), modifiers));
      }
    }
  };

  gather(this, this.$reflect, false, lang.reflect.Modifiers.STATIC);
  gather(this, this.$reflect.prototype, true, 0);
  return fields;
}

lang.XPClass.prototype.equals = function XPClass$equals(cmp) {
  return this.$name === cmp.$name;
}

lang.XPClass.prototype.isInstance = function XPClass$isInstance(instance) {
  return global.is(this.$reflect, instance);
}

lang.XPClass.prototype.hasAnnotations = function XPClass$hasAnnotations() {
  return typeof(this.$reflect['@']) !== 'undefined';
}

lang.XPClass.prototype.getAnnotations = function XPClass$getAnnotations() {
  return this.hasAnnotations() ? this.$reflect['@'] : [];
}

lang.XPClass.prototype.hasAnnotation = function XPClass$hasAnnotation(name) {
  return this.hasAnnotations() && typeof(this.$reflect['@'][name]) !== 'undefined';
}

lang.XPClass.prototype.getAnnotation = function XPClass$getAnnotation(name) {
  if (!this.hasAnnotation(name)) {
    throw new lang.ElementNotFoundException('No such annotation "' + name + '"');
  }
  return this.$reflect['@'][name];
}

lang.XPClass.prototype.getInterfaces = function XPClass$getInterfaces(name) {
  var interfaces = this.$reflect['<'];
  var results = [];
  for (var i = 0; i < interfaces.length; i++) {
    results.push(new lang.XPClass(interfaces[i].__class));
  }
  return results;
}

lang.XPClass.prototype.getComment = function XPClass$getComment() {
  return this.$reflect['/'];
}

lang.XPClass.prototype.getClassLoader = function XPClass$getClassLoader() {
  return global[this.$reflect['.'][0]].instanceFor(this.$reflect['.'][1]);
}
// }}}
