uses('lang.Enum', 'util.cmd.Console');








unittests.classes.Coin= define('unittests.classes.Coin','lang.Enum',function Coin(){lang.Enum.apply(this, arguments);});unittests.classes.Coin['_']= {throws: [],signature: []};
Object.defineProperty(unittests.classes.Coin,'$penny',{ writeable : false, value : new unittests.classes.Coin(1,'penny')});Object.defineProperty(unittests.classes.Coin,'$nickel',{ writeable : false, value : new unittests.classes.Coin(2,'nickel')});Object.defineProperty(unittests.classes.Coin,'$dime',{ writeable : false, value : new unittests.classes.Coin(10,'dime')});Object.defineProperty(unittests.classes.Coin,'$quarter',{ writeable : false, value : new unittests.classes.Coin(25,'quarter')});





unittests.classes.Coin.prototype.color= function Coin$color(){
switch (this) {
case unittests.classes.Coin.$penny: return 'copper';;
case unittests.classes.Coin.$nickel: return 'nickel';;
case unittests.classes.Coin.$dime: ;case unittests.classes.Coin.$quarter: return 'silver';;};};unittests.classes.Coin.prototype.color['/']= "Return this coin's color";unittests.classes.Coin.prototype.color['_']= {returns: 'string',throws: [],signature: []};







unittests.classes.Coin.prototype.value= function Coin$value(){
return this.$ordinal;};unittests.classes.Coin.prototype.value['/']= "Return this coin's value in cent";unittests.classes.Coin.prototype.value['_']= {returns: 'int',throws: [],signature: []};






unittests.classes.Coin.main= function Coin$main($args){
$T0=unittests.classes.Coin.values();for (var $T1=0;$T1<$T0.length;$T1++) {$coin=$T0[$T1];
util.cmd.Console.writeLinef(
'- A %s\'s color is %s and it\'s worth %d¢',
$coin.name(),
$coin.color(),
$coin.value());};};unittests.classes.Coin.main['/']= "Entry point";unittests.classes.Coin.main['_']= {returns: 'void',throws: [],signature: ['string[]']};unittests.classes.Coin.values= function Coin$values(){return lang.Enum.membersOf(this);};unittests.classes.Coin.values['/']= "erate";unittests.classes.Coin.values['_']= {returns: 'unittests.classes.Coin[]',throws: [],signature: []};unittests.classes.Coin['/']= "Coin enumeration. Shows off:\n\n<ul>\n  <li>Enum syntax</li>\n</ul>";