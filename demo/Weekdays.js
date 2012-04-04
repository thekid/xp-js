uses('demo.Weekday', 'util.cmd.Console');

demo.Weekdays= define('demo.Weekdays','lang.Object',function Weekdays(){});demo.Weekdays['_']= {throws: [],signature: []};

demo.Weekdays.main= function Weekdays$main($args){
$T0=demo.Weekday.values();for (var $T1=0;$T1<$T0.length;$T1++) {$day=$T0[$T1];
util.cmd.Console.writeLine($day,' weekend? ',$day.isWeekend());};};demo.Weekdays.main['_']= {returns: 'void',throws: [],signature: ['string[]']};