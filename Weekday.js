uses('lang.Enum');Weekday= define('Weekday','lang.Enum',function Weekday(){lang.Enum.apply(this, arguments);});
Object.defineProperty(Weekday,'Monday',{ writeable : false, value : new Weekday(0,'Monday')})
Object.defineProperty(Weekday,'Tuesday',{ writeable : false, value : new Weekday(1,'Tuesday')})
Object.defineProperty(Weekday,'Wednesday',{ writeable : false, value : new Weekday(2,'Wednesday')})
Object.defineProperty(Weekday,'Thursday',{ writeable : false, value : new Weekday(3,'Thursday')})
Object.defineProperty(Weekday,'Friday',{ writeable : false, value : new Weekday(4,'Friday')})
Object.defineProperty(Weekday,'Saturday',{ writeable : false, value : new Weekday(5,'Saturday')})
Object.defineProperty(Weekday,'Sunday',{ writeable : false, value : new Weekday(6,'Sunday')})

Weekday.prototype.isWeekend= function Weekday$isWeekend(){
return this._ordinal > 4;};Weekday.values= function Weekday$values(){return lang.Enum.membersOf(this);};