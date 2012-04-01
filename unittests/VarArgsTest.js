uses('unittest.TestCase');






;

;





unittests.VarArgsTest= define('unittests.VarArgsTest','unittest.TestCase',function VarArgsTest(){unittest.TestCase.apply(this, arguments);});unittests.VarArgsTest['_']= {throws: [],signature: []};





unittests.VarArgsTest.prototype.newArray= function VarArgsTest$newArray($_){$args=arguments;
return $args;};unittests.VarArgsTest.prototype.newArray['/']= 'Fixture';unittests.VarArgsTest.prototype.newArray['_']= {returns: 'var[]',throws: [],signature: []};






unittests.VarArgsTest.prototype.format= function VarArgsTest$format($format,$_){$args=Array.prototype.slice.call(arguments, 1);
return global.native.vsprintf($format,$args);};unittests.VarArgsTest.prototype.format['/']= 'Fixture';unittests.VarArgsTest.prototype.format['_']= {returns: 'string',throws: [],signature: []};







unittests.VarArgsTest.prototype.firstOffset= function VarArgsTest$firstOffset(){
this.assertEquals([1,2,3],this.newArray(1,2,3));};unittests.VarArgsTest.prototype.firstOffset['@']= {test:null};unittests.VarArgsTest.prototype.firstOffset['/']= 'Tests';unittests.VarArgsTest.prototype.firstOffset['_']= {returns: 'void',throws: [],signature: []};







unittests.VarArgsTest.prototype.secondOffset= function VarArgsTest$secondOffset(){
this.assertEquals('2012-04-01',this.format('%04d-%02d-%02d',2012,4,1));};unittests.VarArgsTest.prototype.secondOffset['@']= {test:null};unittests.VarArgsTest.prototype.secondOffset['/']= 'Tests';unittests.VarArgsTest.prototype.secondOffset['_']= {returns: 'void',throws: [],signature: []};unittests.VarArgsTest['/']= 'Test varargs';