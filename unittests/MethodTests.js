uses('unittest.TestCase');






;
;





unittests.MethodTests= define('unittests.MethodTests','unittest.TestCase',function MethodTests(){unittest.TestCase.apply(this, arguments);});unittests.MethodTests['_']= {throws: [],signature: []};
unittests.MethodTests.prototype.$noArgsMethod=lang.XPClass.forName('lang.Object').getMethod('hashCode');
unittests.MethodTests.prototype.$oneArgMethod=lang.XPClass.forName('lang.Object').getMethod('equals');





unittests.MethodTests.prototype.nameVariants= function MethodTests$nameVariants($instance,$prefix){};unittests.MethodTests.prototype.nameVariants['/']= 'Fixture';unittests.MethodTests.prototype.nameVariants['_']= {returns: 'string[]',throws: [],signature: ['unittest.TestCase','string',]};







unittests.MethodTests.prototype.noArgsMethodNumParameters= function MethodTests$noArgsMethodNumParameters(){
this.assertEquals(0,this.$noArgsMethod.numParameters());};unittests.MethodTests.prototype.noArgsMethodNumParameters['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodNumParameters['/']= 'Tests numParameters()';unittests.MethodTests.prototype.noArgsMethodNumParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.oneArgMethodNumParameters= function MethodTests$oneArgMethodNumParameters(){
this.assertEquals(1,this.$oneArgMethod.numParameters());};unittests.MethodTests.prototype.oneArgMethodNumParameters['@']= {test:null};unittests.MethodTests.prototype.oneArgMethodNumParameters['/']= 'Tests numParameters()';unittests.MethodTests.prototype.oneArgMethodNumParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.fixtureNumParameters= function MethodTests$fixtureNumParameters(){
this.assertEquals(2,lang.XPClass.forName('unittests.MethodTests').getMethod('nameVariants').numParameters());};unittests.MethodTests.prototype.fixtureNumParameters['@']= {test:null};unittests.MethodTests.prototype.fixtureNumParameters['/']= 'Tests numParameters()';unittests.MethodTests.prototype.fixtureNumParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.noArgsMethodGetParameters= function MethodTests$noArgsMethodGetParameters(){
this.assertEquals([],this.$noArgsMethod.getParameters());};unittests.MethodTests.prototype.noArgsMethodGetParameters['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodGetParameters['/']= 'Tests getParameters()';unittests.MethodTests.prototype.noArgsMethodGetParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.oneArgMethodGetParameters= function MethodTests$oneArgMethodGetParameters(){
$params=this.$oneArgMethod.getParameters();
this.assertEquals(1,$params.length);
this.assertEquals('cmp',$params[0].getName());
this.assertEquals('var',$params[0].getTypeName());
this.assertEquals(lang.Type.$VAR,$params[0].getType());};unittests.MethodTests.prototype.oneArgMethodGetParameters['@']= {test:null};unittests.MethodTests.prototype.oneArgMethodGetParameters['/']= 'Tests getParameters()';unittests.MethodTests.prototype.oneArgMethodGetParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.fixtureFirstParameter= function MethodTests$fixtureFirstParameter(){
$params=lang.XPClass.forName('unittests.MethodTests').getMethod('nameVariants').getParameters();
this.assertEquals(2,$params.length);
this.assertEquals('instance',$params[0].getName());
this.assertEquals('unittest.TestCase',$params[0].getTypeName());
this.assertEquals(lang.XPClass.forName('unittest.TestCase'),$params[0].getType());};unittests.MethodTests.prototype.fixtureFirstParameter['@']= {test:null};unittests.MethodTests.prototype.fixtureFirstParameter['/']= 'Tests getParameters()';unittests.MethodTests.prototype.fixtureFirstParameter['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.fixtureSecondParameters= function MethodTests$fixtureSecondParameters(){
$params=lang.XPClass.forName('unittests.MethodTests').getMethod('nameVariants').getParameters();
this.assertEquals(2,$params.length);
this.assertEquals('prefix',$params[1].getName());
this.assertEquals('string',$params[1].getTypeName());
this.assertEquals(lang.Primitive.$STRING,$params[1].getType());};unittests.MethodTests.prototype.fixtureSecondParameters['@']= {test:null};unittests.MethodTests.prototype.fixtureSecondParameters['/']= 'Tests getParameters()';unittests.MethodTests.prototype.fixtureSecondParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.oneArgMethodGetFirstParameter= function MethodTests$oneArgMethodGetFirstParameter(){
$param=this.$oneArgMethod.getParameter(0);
this.assertEquals('cmp',$param.getName());
this.assertEquals('var',$param.getTypeName());
this.assertEquals(lang.Type.$VAR,$param.getType());};unittests.MethodTests.prototype.oneArgMethodGetFirstParameter['@']= {test:null};unittests.MethodTests.prototype.oneArgMethodGetFirstParameter['/']= 'Tests getParameter()';unittests.MethodTests.prototype.oneArgMethodGetFirstParameter['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.oneArgMethodGetNonExistantParameters= function MethodTests$oneArgMethodGetNonExistantParameters(){
this.assertNull(this.$oneArgMethod.getParameter(1));};unittests.MethodTests.prototype.oneArgMethodGetNonExistantParameters['@']= {test:null};unittests.MethodTests.prototype.oneArgMethodGetNonExistantParameters['/']= 'Tests getParameter()';unittests.MethodTests.prototype.oneArgMethodGetNonExistantParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.noArgsMethodGetNonExistantParameters= function MethodTests$noArgsMethodGetNonExistantParameters(){
this.assertNull(this.$noArgsMethod.getParameter(0));};unittests.MethodTests.prototype.noArgsMethodGetNonExistantParameters['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodGetNonExistantParameters['/']= 'Tests getParameter()';unittests.MethodTests.prototype.noArgsMethodGetNonExistantParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.arrayReturnTypeName= function MethodTests$arrayReturnTypeName(){
this.assertEquals('string[]',lang.XPClass.forName('unittests.MethodTests').getMethod('nameVariants').getReturnTypeName());};unittests.MethodTests.prototype.arrayReturnTypeName['@']= {test:null};unittests.MethodTests.prototype.arrayReturnTypeName['/']= 'Tests getReturnTypeName()';unittests.MethodTests.prototype.arrayReturnTypeName['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.arrayReturnType= function MethodTests$arrayReturnType(){
$t=lang.XPClass.forName('unittests.MethodTests').getMethod('nameVariants').getReturnType();
this.assertInstanceOf('lang.ArrayType',$t);
this.assertEquals('string',$t.componentType());};unittests.MethodTests.prototype.arrayReturnType['@']= {test:null};unittests.MethodTests.prototype.arrayReturnType['/']= 'Tests getReturnType()';unittests.MethodTests.prototype.arrayReturnType['_']= {returns: 'void',throws: [],signature: []};






unittests.MethodTests.prototype.variableReturnTypeFixture= function MethodTests$variableReturnTypeFixture(){};unittests.MethodTests.prototype.variableReturnTypeFixture['/']= 'Fixture for the following two tests';unittests.MethodTests.prototype.variableReturnTypeFixture['_']= {returns: 'var',throws: [],signature: []};







unittests.MethodTests.prototype.variableReturnTypeName= function MethodTests$variableReturnTypeName(){
this.assertEquals('var',lang.XPClass.forName('unittests.MethodTests').getMethod('variableReturnTypeFixture').getReturnTypeName());};unittests.MethodTests.prototype.variableReturnTypeName['@']= {test:null};unittests.MethodTests.prototype.variableReturnTypeName['/']= 'Tests getReturnTypeName()';unittests.MethodTests.prototype.variableReturnTypeName['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.variableReturnType= function MethodTests$variableReturnType(){
this.assertEquals(lang.Type.$VAR,lang.XPClass.forName('unittests.MethodTests').getMethod('variableReturnTypeFixture').getReturnType());};unittests.MethodTests.prototype.variableReturnType['@']= {test:null};unittests.MethodTests.prototype.variableReturnType['/']= 'Tests getReturnType()';unittests.MethodTests.prototype.variableReturnType['_']= {returns: 'void',throws: [],signature: []};






unittests.MethodTests.prototype.voidReturnTypeFixture= function MethodTests$voidReturnTypeFixture(){};unittests.MethodTests.prototype.voidReturnTypeFixture['/']= 'Fixture for the following two tests';unittests.MethodTests.prototype.voidReturnTypeFixture['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.voidReturnTypeName= function MethodTests$voidReturnTypeName(){
this.assertEquals('void',lang.XPClass.forName('unittests.MethodTests').getMethod('voidReturnTypeFixture').getReturnTypeName());};unittests.MethodTests.prototype.voidReturnTypeName['@']= {test:null};unittests.MethodTests.prototype.voidReturnTypeName['/']= 'Tests getReturnTypeName()';unittests.MethodTests.prototype.voidReturnTypeName['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.voidReturnType= function MethodTests$voidReturnType(){
this.assertEquals(lang.Type.$VOID,lang.XPClass.forName('unittests.MethodTests').getMethod('voidReturnTypeFixture').getReturnType());};unittests.MethodTests.prototype.voidReturnType['@']= {test:null};unittests.MethodTests.prototype.voidReturnType['/']= 'Tests getReturnType()';unittests.MethodTests.prototype.voidReturnType['_']= {returns: 'void',throws: [],signature: []};






unittests.MethodTests.prototype.operate= function MethodTests$operate(){};unittests.MethodTests.prototype.operate['/']= 'Fixture for the following two tests';unittests.MethodTests.prototype.operate['_']= {returns: 'void',throws: ['lang.IllegalStateException'],signature: []};







unittests.MethodTests.prototype.noArgsMethodExceptionNames= function MethodTests$noArgsMethodExceptionNames(){
this.assertEquals([],this.$noArgsMethod.getExceptionNames());};unittests.MethodTests.prototype.noArgsMethodExceptionNames['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodExceptionNames['/']= 'Tests getExceptionNames()';unittests.MethodTests.prototype.noArgsMethodExceptionNames['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.operateExceptionNames= function MethodTests$operateExceptionNames(){
this.assertEquals(
['lang.IllegalStateException'],
lang.XPClass.forName('unittests.MethodTests').getMethod('operate').getExceptionNames());};unittests.MethodTests.prototype.operateExceptionNames['@']= {test:null};unittests.MethodTests.prototype.operateExceptionNames['/']= 'Tests getExceptionNames()';unittests.MethodTests.prototype.operateExceptionNames['_']= {returns: 'void',throws: [],signature: []};








unittests.MethodTests.prototype.noArgsMethodExceptionTypes= function MethodTests$noArgsMethodExceptionTypes(){
this.assertEquals([],this.$noArgsMethod.getExceptionTypes());};unittests.MethodTests.prototype.noArgsMethodExceptionTypes['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodExceptionTypes['/']= 'Tests getExceptionTypes()';unittests.MethodTests.prototype.noArgsMethodExceptionTypes['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.operateExceptionTypes= function MethodTests$operateExceptionTypes(){
this.assertEquals(
[lang.XPClass.forName('lang.IllegalStateException')],
lang.XPClass.forName('unittests.MethodTests').getMethod('operate').getExceptionTypes());};unittests.MethodTests.prototype.operateExceptionTypes['@']= {test:null};unittests.MethodTests.prototype.operateExceptionTypes['/']= 'Tests getExceptionTypes()';unittests.MethodTests.prototype.operateExceptionTypes['_']= {returns: 'void',throws: [],signature: []};unittests.MethodTests['/']= 'Test lang.reflect.Method class';