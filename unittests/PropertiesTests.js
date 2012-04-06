uses('unittest.TestCase', 'unittests.PropertiesFixture');






;





unittests.PropertiesTests= define('unittests.PropertiesTests','unittest.TestCase',function PropertiesTests(){unittest.TestCase.apply(this, arguments);});unittests.PropertiesTests['_']= {throws: [],signature: []};
unittests.PropertiesTests.prototype.$fixture;





unittests.PropertiesTests.prototype.setUp= function PropertiesTests$setUp(){
this.$fixture=new unittests.PropertiesFixture();};unittests.PropertiesTests.prototype.setUp['/']= "Creates fixture";unittests.PropertiesTests.prototype.setUp['_']= {returns: 'void',throws: [],signature: []};







unittests.PropertiesTests.prototype.readName= function PropertiesTests$readName(){
this.assertEquals('Test',this.$fixture.$name);};unittests.PropertiesTests.prototype.readName['@']= {test:null};unittests.PropertiesTests.prototype.readName['/']= "Tests name.get";unittests.PropertiesTests.prototype.readName['_']= {returns: 'void',throws: [],signature: []};







unittests.PropertiesTests.prototype.writeName= function PropertiesTests$writeName(){
this.$fixture.$name='overwritten';
this.assertEquals('overwritten',this.$fixture.$name);};unittests.PropertiesTests.prototype.writeName['@']= {test:null};unittests.PropertiesTests.prototype.writeName['/']= "Tests name.set";unittests.PropertiesTests.prototype.writeName['_']= {returns: 'void',throws: [],signature: []};







unittests.PropertiesTests.prototype.readId= function PropertiesTests$readId(){
this.assertEquals(6100,this.$fixture.$id);};unittests.PropertiesTests.prototype.readId['@']= {test:null};unittests.PropertiesTests.prototype.readId['/']= "Tests name.get";unittests.PropertiesTests.prototype.readId['_']= {returns: 'void',throws: [],signature: []};







unittests.PropertiesTests.prototype.writeId= function PropertiesTests$writeId(){
this.$fixture.$id=0;};unittests.PropertiesTests.prototype.writeId['@']= {test:null,expect:'lang.IllegalAccessException'};unittests.PropertiesTests.prototype.writeId['/']= "Tests name.set";unittests.PropertiesTests.prototype.writeId['_']= {returns: 'void',throws: [],signature: []};unittests.PropertiesTests['/']= "Test properties";