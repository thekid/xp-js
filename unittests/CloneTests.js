uses('unittest.TestCase', 'unittests.CloneableFixture', 'unittests.UncloneableFixture');






;





unittests.CloneTests= define('unittests.CloneTests','unittest.TestCase',function CloneTests(){unittest.TestCase.apply(this, arguments);});unittests.CloneTests['_']= {throws: [],signature: []};






unittests.CloneTests.prototype.cloningNameCopy= function CloneTests$cloningNameCopy(){
$original=new unittests.CloneableFixture();
$copy=global.clone($original);
$copy.$name='Clone';
this.assertNotEquals($copy.$name,$original.$name);};unittests.CloneTests.prototype.cloningNameCopy['@']= {test:null};unittests.CloneTests.prototype.cloningNameCopy['/']= "Tests cloning";unittests.CloneTests.prototype.cloningNameCopy['_']= {returns: 'void',throws: [],signature: []};







unittests.CloneTests.prototype.cloningIdCopy= function CloneTests$cloningIdCopy(){
$original=new unittests.CloneableFixture();
$copy=global.clone($original);
$copy.$id=2;
this.assertNotEquals($copy.$id,$original.$id);};unittests.CloneTests.prototype.cloningIdCopy['@']= {test:null};unittests.CloneTests.prototype.cloningIdCopy['/']= "Tests cloning";unittests.CloneTests.prototype.cloningIdCopy['_']= {returns: 'void',throws: [],signature: []};







unittests.CloneTests.prototype.cloningReferencesCopy= function CloneTests$cloningReferencesCopy(){
$original=new unittests.CloneableFixture();
$copy=global.clone($original);
$copy.$references[0]=2;
this.assertNotEquals($copy.$references,$original.$references);};unittests.CloneTests.prototype.cloningReferencesCopy['@']= {test:null};unittests.CloneTests.prototype.cloningReferencesCopy['/']= "Tests cloning";unittests.CloneTests.prototype.cloningReferencesCopy['_']= {returns: 'void',throws: [],signature: []};







unittests.CloneTests.prototype.cloningUncloneable= function CloneTests$cloningUncloneable(){
global.clone(new unittests.UncloneableFixture());};unittests.CloneTests.prototype.cloningUncloneable['@']= {test:null,expect:'lang.IllegalStateException'};unittests.CloneTests.prototype.cloningUncloneable['/']= "Tests cloning";unittests.CloneTests.prototype.cloningUncloneable['_']= {returns: 'void',throws: [],signature: []};







unittests.CloneTests.prototype.cloningWithInterceptor= function CloneTests$cloningWithInterceptor(){
$original=new unittests.CloneableFixture();
$copy=global.clone($original);
this.assertNotEquals('Cloned: '+$original.$name,$copy.$name);};unittests.CloneTests.prototype.cloningWithInterceptor['@']= {test:null};unittests.CloneTests.prototype.cloningWithInterceptor['/']= "Tests cloning";unittests.CloneTests.prototype.cloningWithInterceptor['_']= {returns: 'void',throws: [],signature: []};unittests.CloneTests['/']= "Test clone()";