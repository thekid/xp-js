uses('unittest.TestCase', 'unittests.classes.Coin', 'lang.Enum');






;
;





unittests.EnumTests= define('unittests.EnumTests','unittest.TestCase',function EnumTests(){unittest.TestCase.apply(this, arguments);});unittests.EnumTests['_']= {throws: [],signature: []};
unittests.EnumTests.prototype.$fixture;





unittests.EnumTests.prototype.setUp= function EnumTests$setUp(){
this.$fixture=lang.XPClass.forName('unittests.classes.Coin');};unittests.EnumTests.prototype.setUp['/']= "Sets up fixture";unittests.EnumTests.prototype.setUp['_']= {returns: 'void',throws: [],signature: []};







unittests.EnumTests.prototype.thisIsNotAnEnum= function EnumTests$thisIsNotAnEnum(){
this.assertFalse(this.getClass().isEnum());};unittests.EnumTests.prototype.thisIsNotAnEnum['@']= {test:null};unittests.EnumTests.prototype.thisIsNotAnEnum['/']= "Tests XPClass::isEnum()";unittests.EnumTests.prototype.thisIsNotAnEnum['_']= {returns: 'void',throws: [],signature: []};







unittests.EnumTests.prototype.fixtureIsAnEnum= function EnumTests$fixtureIsAnEnum(){
this.assertTrue(this.$fixture.isEnum());};unittests.EnumTests.prototype.fixtureIsAnEnum['@']= {test:null};unittests.EnumTests.prototype.fixtureIsAnEnum['/']= "Tests XPClass::isEnum()";unittests.EnumTests.prototype.fixtureIsAnEnum['_']= {returns: 'void',throws: [],signature: []};







unittests.EnumTests.prototype.fixtureValues= function EnumTests$fixtureValues(){
this.assertEquals(
[unittests.classes.Coin.$penny,unittests.classes.Coin.$nickel,unittests.classes.Coin.$dime,unittests.classes.Coin.$quarter],
lang.Enum.valuesOf(this.$fixture));};unittests.EnumTests.prototype.fixtureValues['@']= {test:null};unittests.EnumTests.prototype.fixtureValues['/']= "Tests Enum::valuesOf()";unittests.EnumTests.prototype.fixtureValues['_']= {returns: 'void',throws: [],signature: []};








unittests.EnumTests.prototype.thisValues= function EnumTests$thisValues(){
lang.Enum.valuesOf(this.getClass());};unittests.EnumTests.prototype.thisValues['@']= {test:null,expect:'lang.IllegalArgumentException'};unittests.EnumTests.prototype.thisValues['/']= "Tests Enum::valuesOf()";unittests.EnumTests.prototype.thisValues['_']= {returns: 'void',throws: [],signature: []};







unittests.EnumTests.prototype.fixturePennyValue= function EnumTests$fixturePennyValue(){
this.assertEquals(
unittests.classes.Coin.$penny,
lang.Enum.valueOf(this.$fixture,'penny'));};unittests.EnumTests.prototype.fixturePennyValue['@']= {test:null};unittests.EnumTests.prototype.fixturePennyValue['/']= "Tests Enum::valueOf()";unittests.EnumTests.prototype.fixturePennyValue['_']= {returns: 'void',throws: [],signature: []};








unittests.EnumTests.prototype.fixtureNonExistantValue= function EnumTests$fixtureNonExistantValue(){
lang.Enum.valueOf(this.$fixture,'@@non-existant@@');};unittests.EnumTests.prototype.fixtureNonExistantValue['@']= {test:null,expect:'lang.IllegalArgumentException'};unittests.EnumTests.prototype.fixtureNonExistantValue['/']= "Tests Enum::valueOf()";unittests.EnumTests.prototype.fixtureNonExistantValue['_']= {returns: 'void',throws: [],signature: []};







unittests.EnumTests.prototype.thisValue= function EnumTests$thisValue(){
lang.Enum.valueOf(this.getClass(),'any');};unittests.EnumTests.prototype.thisValue['@']= {test:null,expect:'lang.IllegalArgumentException'};unittests.EnumTests.prototype.thisValue['/']= "Tests Enum::valueOf()";unittests.EnumTests.prototype.thisValue['_']= {returns: 'void',throws: [],signature: []};unittests.EnumTests['/']= "Test enums";