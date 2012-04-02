uses('unittest.TestCase');






;
;
;





unittests.MethodTests= define('unittests.MethodTests','unittest.TestCase',function MethodTests(){unittest.TestCase.apply(this, arguments);});unittests.MethodTests['_']= {throws: [],signature: []};
unittests.MethodTests.prototype.$noArgsMethod=lang.XPClass.forName('lang.Object').getMethod('hashCode');
unittests.MethodTests.prototype.$oneArgMethod=lang.XPClass.forName('lang.Object').getMethod('equals');





unittests.MethodTests.prototype.nameVariants= function MethodTests$nameVariants($instance,$prefix){};unittests.MethodTests.prototype.nameVariants['/']= 'Fixture';unittests.MethodTests.prototype.nameVariants['_']= {returns: 'string[]',throws: [],signature: ['unittest.TestCase','string',]};







unittests.MethodTests.prototype.methodName= function MethodTests$methodName(){
this.assertEquals('hashCode',this.$noArgsMethod.getName());};unittests.MethodTests.prototype.methodName['@']= {test:null};unittests.MethodTests.prototype.methodName['/']= 'Tests getName()';unittests.MethodTests.prototype.methodName['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.methodComment= function MethodTests$methodComment(){
this.assertEquals('Fixture',this.getClass().getMethod('nameVariants').getComment());};unittests.MethodTests.prototype.methodComment['@']= {test:null};unittests.MethodTests.prototype.methodComment['/']= 'Tests getComment()';unittests.MethodTests.prototype.methodComment['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.noArgsMethodHasNoAnnotations= function MethodTests$noArgsMethodHasNoAnnotations(){
this.assertFalse(this.$noArgsMethod.hasAnnotations());};unittests.MethodTests.prototype.noArgsMethodHasNoAnnotations['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodHasNoAnnotations['/']= 'Tests hasAnnotations()';unittests.MethodTests.prototype.noArgsMethodHasNoAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.noArgsMethodDoesNotHaveNonExistantAnnotation= function MethodTests$noArgsMethodDoesNotHaveNonExistantAnnotation(){
this.assertFalse(this.$noArgsMethod.hasAnnotation('any'));};unittests.MethodTests.prototype.noArgsMethodDoesNotHaveNonExistantAnnotation['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodDoesNotHaveNonExistantAnnotation['/']= 'Tests hasAnnotations()';unittests.MethodTests.prototype.noArgsMethodDoesNotHaveNonExistantAnnotation['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.noArgsMethodAnnotations= function MethodTests$noArgsMethodAnnotations(){
this.assertEquals([],this.$noArgsMethod.getAnnotations());};unittests.MethodTests.prototype.noArgsMethodAnnotations['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodAnnotations['/']= 'Tests getAnnotations()';unittests.MethodTests.prototype.noArgsMethodAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.noArgsMethodNonExistantAnnotation= function MethodTests$noArgsMethodNonExistantAnnotation(){
this.$noArgsMethod.getAnnotation('any');};unittests.MethodTests.prototype.noArgsMethodNonExistantAnnotation['@']= {test:null,expect:'lang.ElementNotFoundException'};unittests.MethodTests.prototype.noArgsMethodNonExistantAnnotation['/']= 'Tests getAnnotation()';unittests.MethodTests.prototype.noArgsMethodNonExistantAnnotation['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.thisMethodHasAnnotations= function MethodTests$thisMethodHasAnnotations(){
this.assertTrue(this.getClass().getMethod(this.$name).hasAnnotations());};unittests.MethodTests.prototype.thisMethodHasAnnotations['@']= {test:null};unittests.MethodTests.prototype.thisMethodHasAnnotations['/']= 'Tests hasAnnotations()';unittests.MethodTests.prototype.thisMethodHasAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.thisMethodHasTestAnnotation= function MethodTests$thisMethodHasTestAnnotation(){
this.assertTrue(this.getClass().getMethod(this.$name).hasAnnotation('test'));};unittests.MethodTests.prototype.thisMethodHasTestAnnotation['@']= {test:null};unittests.MethodTests.prototype.thisMethodHasTestAnnotation['/']= 'Tests hasAnnotations()';unittests.MethodTests.prototype.thisMethodHasTestAnnotation['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.thisMethodsAnnotations= function MethodTests$thisMethodsAnnotations(){
this.assertEquals({'test' : null},this.getClass().getMethod(this.$name).getAnnotations());};unittests.MethodTests.prototype.thisMethodsAnnotations['@']= {test:null};unittests.MethodTests.prototype.thisMethodsAnnotations['/']= 'Tests getAnnotations()';unittests.MethodTests.prototype.thisMethodsAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.fixtureMethodNonExistantAnnotation= function MethodTests$fixtureMethodNonExistantAnnotation(){
this.assertNull(this.getClass().getMethod(this.$name).getAnnotation('test'));};unittests.MethodTests.prototype.fixtureMethodNonExistantAnnotation['@']= {test:null};unittests.MethodTests.prototype.fixtureMethodNonExistantAnnotation['/']= 'Tests getAnnotation()';unittests.MethodTests.prototype.fixtureMethodNonExistantAnnotation['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.objectHashCodeMethodIsPublic= function MethodTests$objectHashCodeMethodIsPublic(){
this.assertTrue(lang.reflect.Modifiers.isPublic(this.$noArgsMethod.getModifiers()));};unittests.MethodTests.prototype.objectHashCodeMethodIsPublic['@']= {test:null};unittests.MethodTests.prototype.objectHashCodeMethodIsPublic['/']= 'Tests getModifiers()';unittests.MethodTests.prototype.objectHashCodeMethodIsPublic['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.objectHashCodePublic= function MethodTests$objectHashCodePublic(){
this.assertEquals(['public'],lang.reflect.Modifiers.namesOf(this.$noArgsMethod.getModifiers()));};unittests.MethodTests.prototype.objectHashCodePublic['@']= {test:null};unittests.MethodTests.prototype.objectHashCodePublic['/']= 'Tests getModifiers()';unittests.MethodTests.prototype.objectHashCodePublic['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.noArgsMethodNumParameters= function MethodTests$noArgsMethodNumParameters(){
this.assertEquals(0,this.$noArgsMethod.numParameters());};unittests.MethodTests.prototype.noArgsMethodNumParameters['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodNumParameters['/']= 'Tests numParameters()';unittests.MethodTests.prototype.noArgsMethodNumParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.oneArgMethodNumParameters= function MethodTests$oneArgMethodNumParameters(){
this.assertEquals(1,this.$oneArgMethod.numParameters());};unittests.MethodTests.prototype.oneArgMethodNumParameters['@']= {test:null};unittests.MethodTests.prototype.oneArgMethodNumParameters['/']= 'Tests numParameters()';unittests.MethodTests.prototype.oneArgMethodNumParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.fixtureNumParameters= function MethodTests$fixtureNumParameters(){
this.assertEquals(2,this.getClass().getMethod('nameVariants').numParameters());};unittests.MethodTests.prototype.fixtureNumParameters['@']= {test:null};unittests.MethodTests.prototype.fixtureNumParameters['/']= 'Tests numParameters()';unittests.MethodTests.prototype.fixtureNumParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.noArgsMethodGetParameters= function MethodTests$noArgsMethodGetParameters(){
this.assertEquals([],this.$noArgsMethod.getParameters());};unittests.MethodTests.prototype.noArgsMethodGetParameters['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodGetParameters['/']= 'Tests getParameters()';unittests.MethodTests.prototype.noArgsMethodGetParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.oneArgMethodGetParameters= function MethodTests$oneArgMethodGetParameters(){
$params=this.$oneArgMethod.getParameters();
this.assertEquals(1,$params.length);
this.assertEquals('cmp',$params[0].getName());
this.assertEquals('var',$params[0].getTypeName());
this.assertEquals(lang.Type.$VAR,$params[0].getType());};unittests.MethodTests.prototype.oneArgMethodGetParameters['@']= {test:null};unittests.MethodTests.prototype.oneArgMethodGetParameters['/']= 'Tests getParameters()';unittests.MethodTests.prototype.oneArgMethodGetParameters['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.fixtureFirstParameter= function MethodTests$fixtureFirstParameter(){
$params=this.getClass().getMethod('nameVariants').getParameters();
this.assertEquals(2,$params.length);
this.assertEquals('instance',$params[0].getName());
this.assertEquals('unittest.TestCase',$params[0].getTypeName());
this.assertEquals(lang.XPClass.forName('unittest.TestCase'),$params[0].getType());};unittests.MethodTests.prototype.fixtureFirstParameter['@']= {test:null};unittests.MethodTests.prototype.fixtureFirstParameter['/']= 'Tests getParameters()';unittests.MethodTests.prototype.fixtureFirstParameter['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.fixtureSecondParameters= function MethodTests$fixtureSecondParameters(){
$params=this.getClass().getMethod('nameVariants').getParameters();
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
this.assertEquals('string[]',this.getClass().getMethod('nameVariants').getReturnTypeName());};unittests.MethodTests.prototype.arrayReturnTypeName['@']= {test:null};unittests.MethodTests.prototype.arrayReturnTypeName['/']= 'Tests getReturnTypeName()';unittests.MethodTests.prototype.arrayReturnTypeName['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.arrayReturnType= function MethodTests$arrayReturnType(){
$t=this.getClass().getMethod('nameVariants').getReturnType();
this.assertInstanceOf('lang.ArrayType',$t);
this.assertEquals('string',$t.componentType());};unittests.MethodTests.prototype.arrayReturnType['@']= {test:null};unittests.MethodTests.prototype.arrayReturnType['/']= 'Tests getReturnType()';unittests.MethodTests.prototype.arrayReturnType['_']= {returns: 'void',throws: [],signature: []};






unittests.MethodTests.prototype.variableReturnTypeFixture= function MethodTests$variableReturnTypeFixture(){};unittests.MethodTests.prototype.variableReturnTypeFixture['/']= 'Fixture for the following two tests';unittests.MethodTests.prototype.variableReturnTypeFixture['_']= {returns: 'var',throws: [],signature: []};







unittests.MethodTests.prototype.variableReturnTypeName= function MethodTests$variableReturnTypeName(){
this.assertEquals('var',this.getClass().getMethod('variableReturnTypeFixture').getReturnTypeName());};unittests.MethodTests.prototype.variableReturnTypeName['@']= {test:null};unittests.MethodTests.prototype.variableReturnTypeName['/']= 'Tests getReturnTypeName()';unittests.MethodTests.prototype.variableReturnTypeName['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.variableReturnType= function MethodTests$variableReturnType(){
this.assertEquals(lang.Type.$VAR,this.getClass().getMethod('variableReturnTypeFixture').getReturnType());};unittests.MethodTests.prototype.variableReturnType['@']= {test:null};unittests.MethodTests.prototype.variableReturnType['/']= 'Tests getReturnType()';unittests.MethodTests.prototype.variableReturnType['_']= {returns: 'void',throws: [],signature: []};






unittests.MethodTests.prototype.voidReturnTypeFixture= function MethodTests$voidReturnTypeFixture(){};unittests.MethodTests.prototype.voidReturnTypeFixture['/']= 'Fixture for the following two tests';unittests.MethodTests.prototype.voidReturnTypeFixture['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.voidReturnTypeName= function MethodTests$voidReturnTypeName(){
this.assertEquals('void',this.getClass().getMethod('voidReturnTypeFixture').getReturnTypeName());};unittests.MethodTests.prototype.voidReturnTypeName['@']= {test:null};unittests.MethodTests.prototype.voidReturnTypeName['/']= 'Tests getReturnTypeName()';unittests.MethodTests.prototype.voidReturnTypeName['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.voidReturnType= function MethodTests$voidReturnType(){
this.assertEquals(lang.Type.$VOID,this.getClass().getMethod('voidReturnTypeFixture').getReturnType());};unittests.MethodTests.prototype.voidReturnType['@']= {test:null};unittests.MethodTests.prototype.voidReturnType['/']= 'Tests getReturnType()';unittests.MethodTests.prototype.voidReturnType['_']= {returns: 'void',throws: [],signature: []};






unittests.MethodTests.prototype.operate= function MethodTests$operate(){};unittests.MethodTests.prototype.operate['/']= 'Fixture for the following two tests';unittests.MethodTests.prototype.operate['_']= {returns: 'void',throws: ['lang.IllegalStateException'],signature: []};







unittests.MethodTests.prototype.noArgsMethodExceptionNames= function MethodTests$noArgsMethodExceptionNames(){
this.assertEquals([],this.$noArgsMethod.getExceptionNames());};unittests.MethodTests.prototype.noArgsMethodExceptionNames['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodExceptionNames['/']= 'Tests getExceptionNames()';unittests.MethodTests.prototype.noArgsMethodExceptionNames['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.operateExceptionNames= function MethodTests$operateExceptionNames(){
this.assertEquals(
['lang.IllegalStateException'],
this.getClass().getMethod('operate').getExceptionNames());};unittests.MethodTests.prototype.operateExceptionNames['@']= {test:null};unittests.MethodTests.prototype.operateExceptionNames['/']= 'Tests getExceptionNames()';unittests.MethodTests.prototype.operateExceptionNames['_']= {returns: 'void',throws: [],signature: []};








unittests.MethodTests.prototype.noArgsMethodExceptionTypes= function MethodTests$noArgsMethodExceptionTypes(){
this.assertEquals([],this.$noArgsMethod.getExceptionTypes());};unittests.MethodTests.prototype.noArgsMethodExceptionTypes['@']= {test:null};unittests.MethodTests.prototype.noArgsMethodExceptionTypes['/']= 'Tests getExceptionTypes()';unittests.MethodTests.prototype.noArgsMethodExceptionTypes['_']= {returns: 'void',throws: [],signature: []};







unittests.MethodTests.prototype.operateExceptionTypes= function MethodTests$operateExceptionTypes(){
this.assertEquals(
[lang.XPClass.forName('lang.IllegalStateException')],
this.getClass().getMethod('operate').getExceptionTypes());};unittests.MethodTests.prototype.operateExceptionTypes['@']= {test:null};unittests.MethodTests.prototype.operateExceptionTypes['/']= 'Tests getExceptionTypes()';unittests.MethodTests.prototype.operateExceptionTypes['_']= {returns: 'void',throws: [],signature: []};unittests.MethodTests['/']= 'Test lang.reflect.Method class';