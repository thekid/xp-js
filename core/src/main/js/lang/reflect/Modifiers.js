// {{{ Modifiers
lang.reflect.Modifiers = define('lang.reflect.Modifiers', 'lang.Object', function() { });

Object.defineProperty(lang.reflect.Modifiers, 'STATIC',    { value :    1, writeable : false });
Object.defineProperty(lang.reflect.Modifiers, 'ABSTRACT',  { value :    2, writeable : false });
Object.defineProperty(lang.reflect.Modifiers, 'FINAL',     { value :    4, writeable : false });
Object.defineProperty(lang.reflect.Modifiers, 'PUBLIC',    { value :  256, writeable : false });
Object.defineProperty(lang.reflect.Modifiers, 'PROTECTED', { value :  512, writeable : false });
Object.defineProperty(lang.reflect.Modifiers, 'PRIVATE',   { value : 1024, writeable : false });

lang.reflect.Modifiers.isStatic = function Modifiers$isStatic($m) {
  return 0 !== ($m & lang.reflect.Modifiers.STATIC);
}

lang.reflect.Modifiers.isAbstract = function Modifiers$isAbstract($m) {
  return 0 !== ($m & lang.reflect.Modifiers.ABSTRACT);
}

lang.reflect.Modifiers.isFinal = function Modifiers$isFinal($m) {
  return 0 !== ($m & lang.reflect.Modifiers.FINAL);
}

lang.reflect.Modifiers.isPublic = function Modifiers$isPublic($m) {
  return 0 !== ($m & lang.reflect.Modifiers.PUBLIC);
}

lang.reflect.Modifiers.isProtected = function Modifiers$isProtected($m) {
  return 0 !== ($m & lang.reflect.Modifiers.PROTECTED);
}

lang.reflect.Modifiers.isPrivate = function Modifiers$isPrivate($m) {
  return 0 !== ($m & lang.reflect.Modifiers.PRIVATE);
}

lang.reflect.Modifiers.namesOf = function Modifiers$namesOf($m) {
  var $names= [];
  switch ($m & (lang.reflect.Modifiers.PUBLIC | lang.reflect.Modifiers.PROTECTED | lang.reflect.Modifiers.PRIVATE)) {
    case lang.reflect.Modifiers.PRIVATE: $names.push('private'); break;
    case lang.reflect.Modifiers.PROTECTED: $names.push('protected'); break;
    case lang.reflect.Modifiers.PUBLIC: default: $names.push('public'); break;
  }
  if ($m & lang.reflect.Modifiers.STATIC) $names.push('static');
  if ($m & lang.reflect.Modifiers.ABSTRACT) $names.push('abstract');
  if ($m & lang.reflect.Modifiers.FINAL) $names.push('final');
  return $names;
}

lang.reflect.Modifiers.stringOf = function Modifiers$stringOf($m) {
  return lang.reflect.Modifiers.namesOf($m).join(' ');
}
// }}}
