uses('Weekday', 'util.cmd.Console');Weekdays= define('Weekdays','lang.Object',function Weekdays(){});

Weekdays.main= function Weekdays$main(args){
Weekday.values().forEach(function(day) {
util.cmd.Console.writeLine(day,' weekend? ',day.isWeekend());});};