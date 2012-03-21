uses('lang.Enum');

Weekday= define('Weekday', 'lang.Enum', function Weekday(ordinal, name) {
  lang.Enum.call(this, ordinal, name);
});

Weekday.values = function Weekday$values() {
  return lang.Enum.membersOf(this);
}

Object.defineProperty(Weekday, 'Monday', { value : new Weekday(0, 'Monday'), writeable : false });
Object.defineProperty(Weekday, 'Tuesday', { value : new Weekday(1, 'Tuesday'), writeable : false });
Object.defineProperty(Weekday, 'Wednesday', { value : new Weekday(2, 'Wednesday'), writeable : false });
Object.defineProperty(Weekday, 'Thursday', { value : new Weekday(3, 'Thursday'), writeable : false });
Object.defineProperty(Weekday, 'Friday', { value : new Weekday(4, 'Friday'), writeable : false });
Object.defineProperty(Weekday, 'Saturday', { value : new Weekday(5, 'Saturday'), writeable : false });
Object.defineProperty(Weekday, 'Sunday', { value : new Weekday(6, 'Sunday'), writeable : false });

Weekday.prototype.isWeekend = function Weekday$isWeekend() {
  return this.ordinal > 4;
}
