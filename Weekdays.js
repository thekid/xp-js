uses('Weekday');

Weekdays= define('Weekdays', 'lang.Object', function Weekdays() { });

Weekdays.main = function Weekdays$main(args) {
  var days= Weekday.values();
  for (var i= 0; i < days.length; i++) {
    util.cmd.Console.writeLine('#', i, ': ', days[i], ' weekend ? ', days[i].isWeekend());
  }
}
