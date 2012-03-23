uses('demo.Weekday', 'util.cmd.Console');

demo.Weekdays= define('demo.Weekdays','lang.Object',function Weekdays(){});

demo.Weekdays.main= function Weekdays$main($args){
demo.Weekday.values().forEach(function($day) {
util.cmd.Console.writeLine($day,' weekend? ',$day.isWeekend());});};