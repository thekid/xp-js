uses('lang.Type');

// {{{ Primitive
lang.Primitive = define('lang.Primitive', 'lang.Type', function Primitive(name) {
  this.$name = name;
});

lang.Primitive.$STRING = new lang.Primitive('string');
lang.Primitive.$INT = new lang.Primitive('int');
lang.Primitive.$DOUBLE = new lang.Primitive('double');
lang.Primitive.$BOOL = new lang.Primitive('bool');

// }}}
