uses('lang.Enum', 'util.cmd.Console');









demo.Operation= define('demo.Operation','lang.Enum',function Operation(){lang.Enum.apply(this, arguments);});demo.Operation['_']= {throws: [],signature: []};
demo.Operation$$plus=define('demo.Operation$$plus','demo.Operation',function plus() {demo.Operation.apply(this, arguments);});
demo.Operation$$plus.prototype.evaluate= function demo$Operation$$plus$evaluate($x,$y){return $x+$y;};demo.Operation$$plus.prototype.evaluate['_']= {returns: 'int',throws: [],signature: ['int','int',]};;Object.defineProperty(demo.Operation,'plus',{ writeable : false, value : new demo.Operation$$plus(0,'plus')})

demo.Operation$$minus=define('demo.Operation$$minus','demo.Operation',function minus() {demo.Operation.apply(this, arguments);});
demo.Operation$$minus.prototype.evaluate= function demo$Operation$$minus$evaluate($x,$y){return $x-$y;};demo.Operation$$minus.prototype.evaluate['_']= {returns: 'int',throws: [],signature: ['int','int',]};;Object.defineProperty(demo.Operation,'minus',{ writeable : false, value : new demo.Operation$$minus(1,'minus')})

demo.Operation$$times=define('demo.Operation$$times','demo.Operation',function times() {demo.Operation.apply(this, arguments);});
demo.Operation$$times.prototype.evaluate= function demo$Operation$$times$evaluate($x,$y){return $x*$y;};demo.Operation$$times.prototype.evaluate['_']= {returns: 'int',throws: [],signature: ['int','int',]};;Object.defineProperty(demo.Operation,'times',{ writeable : false, value : new demo.Operation$$times(2,'times')})

demo.Operation$$divided_by=define('demo.Operation$$divided_by','demo.Operation',function divided_by() {demo.Operation.apply(this, arguments);});
demo.Operation$$divided_by.prototype.evaluate= function demo$Operation$$divided_by$evaluate($x,$y){return $x/$y;};demo.Operation$$divided_by.prototype.evaluate['_']= {returns: 'int',throws: [],signature: ['int','int',]};;Object.defineProperty(demo.Operation,'divided_by',{ writeable : false, value : new demo.Operation$$divided_by(3,'divided_by')})






demo.Operation.prototype.evaluate= function Operation$evaluate($x,$y){};demo.Operation.prototype.evaluate['/']= "Evaluate an operation.";demo.Operation.prototype.evaluate['_']= {returns: 'int',throws: [],signature: ['int','int',]};





demo.Operation.main= function Operation$main($args){
$a=$args[0]?cast($args[0], 'int'):1;
$b=$args[1]?cast($args[1], 'int'):2;

$T0=demo.Operation.values();for (var $T1=0;$T1<$T0.length;$T1++) {$op=$T0[$T1];
util.cmd.Console.writeLine($a,' ',$op,' ',$b,' = ',$op.evaluate($a,$b));};};demo.Operation.main['/']= "Entry point";demo.Operation.main['_']= {returns: 'void',throws: [],signature: ['string[]']};demo.Operation.values= function Operation$values(){return lang.Enum.membersOf(this);};demo.Operation.values['/']= "erate";demo.Operation.values['_']= {returns: 'demo.Operation[]',throws: [],signature: []};demo.Operation['/']= "Operation demo. Shows off\n\n<ul>\n  <li>Abstract enums</li>\n  <li>Ternary shortcut (?:)</li>\n</ul>";