uses('lang.Enum');

demo.Weekday= define('demo.Weekday','lang.Enum',function Weekday(){lang.Enum.apply(this, arguments);});demo.Weekday['_']= {throws: [],signature: []};
Object.defineProperty(demo.Weekday,'$Monday',{ writeable : false, value : new demo.Weekday(0,'Monday')});
Object.defineProperty(demo.Weekday,'$Tuesday',{ writeable : false, value : new demo.Weekday(1,'Tuesday')});
Object.defineProperty(demo.Weekday,'$Wednesday',{ writeable : false, value : new demo.Weekday(2,'Wednesday')});
Object.defineProperty(demo.Weekday,'$Thursday',{ writeable : false, value : new demo.Weekday(3,'Thursday')});
Object.defineProperty(demo.Weekday,'$Friday',{ writeable : false, value : new demo.Weekday(4,'Friday')});
Object.defineProperty(demo.Weekday,'$Saturday',{ writeable : false, value : new demo.Weekday(5,'Saturday')});
Object.defineProperty(demo.Weekday,'$Sunday',{ writeable : false, value : new demo.Weekday(6,'Sunday')});

demo.Weekday.prototype.isWeekend= function Weekday$isWeekend(){
return this.$ordinal > 4;};demo.Weekday.prototype.isWeekend['_']= {returns: 'bool',throws: [],signature: []};demo.Weekday.values= function Weekday$values(){return lang.Enum.membersOf(this);};demo.Weekday.values['/']= "erate";demo.Weekday.values['_']= {returns: 'demo.Weekday[]',throws: [],signature: []};