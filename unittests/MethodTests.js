uses('unittest.TestCase');






;
;





unittests.MethodTests= define('unittests.MethodTests','unittest.TestCase',function MethodTests(){unittest.TestCase.apply(this, arguments);});
unittests.MethodTests.prototype.$noArgsMethod=lang.XPClass.forName('lang.Object').getMethod('hashCode');
unittests.MethodTests.prototype.$oneArgMethod=lang.XPClass.forName('lang.Object').getMethod('equals');






unittests.MethodTests.prototype.noArgsMethodNumParameters= function MethodTests$noArgsMethodNumParameters(){
this.assertEquals(0,this.$noArgsMethod.numParameters());};unittests.MethodTests.prototype.noArgsMethodNumParameters['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodNumParameters['/']= 'Tests numParameters()';







unittests.MethodTests.prototype.oneArgMethodNumParameters= function MethodTests$oneArgMethodNumParameters(){
this.assertEquals(1,this.$oneArgMethod.numParameters());};unittests.MethodTests.prototype.oneArgMethodNumParameters['@']= {test:null};unittests.MethodTests.prototype.oneArgMethodNumParameters['/']= 'Tests numParameters()';







unittests.MethodTests.prototype.noArgsMethodGetParameters= function MethodTests$noArgsMethodGetParameters(){
this.assertEquals([],this.$noArgsMethod.getParameters());};unittests.MethodTests.prototype.noArgsMethodGetParameters['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodGetParameters['/']= 'Tests getParameters()';







unittests.MethodTests.prototype.oneArgMethodGetParameters= function MethodTests$oneArgMethodGetParameters(){
$params=this.$oneArgMethod.getParameters();
this.assertEquals(1,$params.length);
this.assertEquals('cmp',$params[0].getName());
this.assertEquals('var',$params[0].getTypeName());
this.assertEquals(lang.Type.$VAR,$params[0].getType());};unittests.MethodTests.prototype.oneArgMethodGetParameters['@']= {test:null};unittests.MethodTests.prototype.oneArgMethodGetParameters['/']= 'Tests getParameters()';unittests.MethodTests['/']= 'Test lang.reflect.Method class';