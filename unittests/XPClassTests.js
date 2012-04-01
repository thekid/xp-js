uses('unittest.TestCase', 'lang.Generic');






;
;





unittests.XPClassTests= define('unittests.XPClassTests','unittest.TestCase',function XPClassTests(){unittest.TestCase.apply(this, arguments);});unittests.XPClassTests['_']= {throws: [],signature: []};






unittests.XPClassTests.prototype.className= function XPClassTests$className(){
this.assertEquals('unittests.XPClassTests',this.getClass().getName());};unittests.XPClassTests.prototype.className['@']= {test:null};unittests.XPClassTests.prototype.className['/']= 'Tests getName()';unittests.XPClassTests.prototype.className['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.classNameShortCut= function XPClassTests$classNameShortCut(){
this.assertEquals('unittests.XPClassTests',this.getClassName());};unittests.XPClassTests.prototype.classNameShortCut['@']= {test:null};unittests.XPClassTests.prototype.classNameShortCut['/']= 'Tests getClassName()';unittests.XPClassTests.prototype.classNameShortCut['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.forName= function XPClassTests$forName(){
this.assertEquals(this.getClass(),lang.XPClass.forName('unittests.XPClassTests'));};unittests.XPClassTests.prototype.forName['@']= {test:null};unittests.XPClassTests.prototype.forName['/']= 'Tests forName()';unittests.XPClassTests.prototype.forName['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.forNameNonExistant= function XPClassTests$forNameNonExistant(){
lang.XPClass.forName('non-existant-class');};unittests.XPClassTests.prototype.forNameNonExistant['@']= {test:null,expect:'lang.ClassNotFoundException'};unittests.XPClassTests.prototype.forNameNonExistant['/']= 'Tests forName()';unittests.XPClassTests.prototype.forNameNonExistant['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.hasNameField= function XPClassTests$hasNameField(){
this.assertTrue(this.getClass().hasField('name'));};unittests.XPClassTests.prototype.hasNameField['@']= {test:null};unittests.XPClassTests.prototype.hasNameField['/']= 'Tests hasField()';unittests.XPClassTests.prototype.hasNameField['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.nameField= function XPClassTests$nameField(){
$field=this.getClass().getField('name');
this.assertInstanceOf('lang.reflect.Field',$field);
this.assertEquals('name',$field.getName());};unittests.XPClassTests.prototype.nameField['@']= {test:null};unittests.XPClassTests.prototype.nameField['/']= 'Tests getField()';unittests.XPClassTests.prototype.nameField['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisClassFields= function XPClassTests$thisClassFields(){
$fields=this.getClass().getFields();
this.assertEquals(1,$fields.length);
this.assertInstanceOf('lang.reflect.Field',$fields[0]);
this.assertEquals('name',$fields[0].getName());};unittests.XPClassTests.prototype.thisClassFields['@']= {test:null};unittests.XPClassTests.prototype.thisClassFields['/']= 'Tests getFields()';unittests.XPClassTests.prototype.thisClassFields['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.doesNotHaveNonExistantField= function XPClassTests$doesNotHaveNonExistantField(){
this.assertFalse(this.getClass().hasField('non-existant'));};unittests.XPClassTests.prototype.doesNotHaveNonExistantField['@']= {test:null};unittests.XPClassTests.prototype.doesNotHaveNonExistantField['/']= 'Tests hasField()';unittests.XPClassTests.prototype.doesNotHaveNonExistantField['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.getNonExistantField= function XPClassTests$getNonExistantField(){
this.getClass().getField('non-existant');};unittests.XPClassTests.prototype.getNonExistantField['@']= {test:null,expect:'lang.ElementNotFoundException'};unittests.XPClassTests.prototype.getNonExistantField['/']= 'Tests getField()';unittests.XPClassTests.prototype.getNonExistantField['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.hasNameMethod= function XPClassTests$hasNameMethod(){
this.assertTrue(this.getClass().hasMethod('name'));};unittests.XPClassTests.prototype.hasNameMethod['@']= {test:null};unittests.XPClassTests.prototype.hasNameMethod['/']= 'Tests hasMethod()';unittests.XPClassTests.prototype.hasNameMethod['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.nameMethod= function XPClassTests$nameMethod(){
$method=this.getClass().getMethod('name');
this.assertInstanceOf('lang.reflect.Method',$method);
this.assertEquals('name',$method.getName());};unittests.XPClassTests.prototype.nameMethod['@']= {test:null};unittests.XPClassTests.prototype.nameMethod['/']= 'Tests getMethod()';unittests.XPClassTests.prototype.nameMethod['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.doesNotHaveNonExistantMethod= function XPClassTests$doesNotHaveNonExistantMethod(){
this.assertFalse(this.getClass().hasMethod('non-existant'));};unittests.XPClassTests.prototype.doesNotHaveNonExistantMethod['@']= {test:null};unittests.XPClassTests.prototype.doesNotHaveNonExistantMethod['/']= 'Tests hasMethod()';unittests.XPClassTests.prototype.doesNotHaveNonExistantMethod['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.getNonExistantMethod= function XPClassTests$getNonExistantMethod(){
this.getClass().getMethod('non-existant');};unittests.XPClassTests.prototype.getNonExistantMethod['@']= {test:null,expect:'lang.ElementNotFoundException'};unittests.XPClassTests.prototype.getNonExistantMethod['/']= 'Tests getMethod()';unittests.XPClassTests.prototype.getNonExistantMethod['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.objectMethods= function XPClassTests$objectMethods(){
$methods=lang.XPClass.forName('lang.Object').getMethods();
$expected=['getClass','getClassName','equals','hashCode','toString'];
this.assertEquals($expected.length,$methods.length);
for (var $T0=0;$T0<$methods.length;$T0++) {$method=$methods[$T0];
this.assertTrue(global.native.in_array($method.getName(),$expected));};};unittests.XPClassTests.prototype.objectMethods['@']= {test:null};unittests.XPClassTests.prototype.objectMethods['/']= 'Tests getMethods()';unittests.XPClassTests.prototype.objectMethods['_']= {returns: 'void',throws: [],signature: []};








unittests.XPClassTests.prototype.thisIsInstanceofSelf= function XPClassTests$thisIsInstanceofSelf(){
this.assertTrue(this.getClass().isInstance(this));};unittests.XPClassTests.prototype.thisIsInstanceofSelf['@']= {test:null};unittests.XPClassTests.prototype.thisIsInstanceofSelf['/']= 'Tests isInstance()';unittests.XPClassTests.prototype.thisIsInstanceofSelf['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisIsInstanceofParentClass= function XPClassTests$thisIsInstanceofParentClass(){
this.assertTrue(lang.XPClass.forName('unittest.TestCase').isInstance(this));};unittests.XPClassTests.prototype.thisIsInstanceofParentClass['@']= {test:null};unittests.XPClassTests.prototype.thisIsInstanceofParentClass['/']= 'Tests isInstance()';unittests.XPClassTests.prototype.thisIsInstanceofParentClass['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisIsInstanceofObjectClass= function XPClassTests$thisIsInstanceofObjectClass(){
this.assertTrue(lang.XPClass.forName('lang.Object').isInstance(this));};unittests.XPClassTests.prototype.thisIsInstanceofObjectClass['@']= {test:null};unittests.XPClassTests.prototype.thisIsInstanceofObjectClass['/']= 'Tests isInstance()';unittests.XPClassTests.prototype.thisIsInstanceofObjectClass['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisIsNotAnInstanceOfThrowable= function XPClassTests$thisIsNotAnInstanceOfThrowable(){
this.assertFalse(lang.XPClass.forName('lang.Throwable').isInstance(this));};unittests.XPClassTests.prototype.thisIsNotAnInstanceOfThrowable['@']= {test:null};unittests.XPClassTests.prototype.thisIsNotAnInstanceOfThrowable['/']= 'Tests isInstance()';unittests.XPClassTests.prototype.thisIsNotAnInstanceOfThrowable['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.nullIsNotAnInstanceOfObject= function XPClassTests$nullIsNotAnInstanceOfObject(){
this.assertFalse(lang.XPClass.forName('lang.Object').isInstance(null));};unittests.XPClassTests.prototype.nullIsNotAnInstanceOfObject['@']= {test:null};unittests.XPClassTests.prototype.nullIsNotAnInstanceOfObject['/']= 'Tests isInstance()';unittests.XPClassTests.prototype.nullIsNotAnInstanceOfObject['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.annotatedClassHasAnnotations= function XPClassTests$annotatedClassHasAnnotations(){
this.assertTrue(lang.XPClass.forName('unittests.AnnotatedClass').hasAnnotations());};unittests.XPClassTests.prototype.annotatedClassHasAnnotations['@']= {test:null};unittests.XPClassTests.prototype.annotatedClassHasAnnotations['/']= 'Tests hasAnnotations()';unittests.XPClassTests.prototype.annotatedClassHasAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.annotatedClassHasWebserviceAnnotation= function XPClassTests$annotatedClassHasWebserviceAnnotation(){
this.assertTrue(lang.XPClass.forName('unittests.AnnotatedClass').hasAnnotation('webservice'));};unittests.XPClassTests.prototype.annotatedClassHasWebserviceAnnotation['@']= {test:null};unittests.XPClassTests.prototype.annotatedClassHasWebserviceAnnotation['/']= 'Tests hasAnnotation()';unittests.XPClassTests.prototype.annotatedClassHasWebserviceAnnotation['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.annotatedClassDoesNotHaveTestAnnotation= function XPClassTests$annotatedClassDoesNotHaveTestAnnotation(){
this.assertFalse(lang.XPClass.forName('unittests.AnnotatedClass').hasAnnotation('test'));};unittests.XPClassTests.prototype.annotatedClassDoesNotHaveTestAnnotation['@']= {test:null};unittests.XPClassTests.prototype.annotatedClassDoesNotHaveTestAnnotation['/']= 'Tests hasAnnotation()';unittests.XPClassTests.prototype.annotatedClassDoesNotHaveTestAnnotation['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.annotatedClassAnnotations= function XPClassTests$annotatedClassAnnotations(){
this.assertEquals({'webservice' : null},lang.XPClass.forName('unittests.AnnotatedClass').getAnnotations());};unittests.XPClassTests.prototype.annotatedClassAnnotations['@']= {test:null};unittests.XPClassTests.prototype.annotatedClassAnnotations['/']= 'Tests getAnnotations()';unittests.XPClassTests.prototype.annotatedClassAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.annotatedClassChildAnnotations= function XPClassTests$annotatedClassChildAnnotations(){
this.assertEquals({'webservice' : null},lang.XPClass.forName('unittests.AnnotatedClassChild').getAnnotations());};unittests.XPClassTests.prototype.annotatedClassChildAnnotations['@']= {test:null};unittests.XPClassTests.prototype.annotatedClassChildAnnotations['/']= 'Tests getAnnotations()';unittests.XPClassTests.prototype.annotatedClassChildAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.annotatedClassWebserviceAnnotations= function XPClassTests$annotatedClassWebserviceAnnotations(){
this.assertNull(lang.XPClass.forName('unittests.AnnotatedClass').getAnnotation('webservice'));};unittests.XPClassTests.prototype.annotatedClassWebserviceAnnotations['@']= {test:null};unittests.XPClassTests.prototype.annotatedClassWebserviceAnnotations['/']= 'Tests getAnnotation()';unittests.XPClassTests.prototype.annotatedClassWebserviceAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisClassHasNoAnnotations= function XPClassTests$thisClassHasNoAnnotations(){
this.assertFalse(this.getClass().hasAnnotations());};unittests.XPClassTests.prototype.thisClassHasNoAnnotations['@']= {test:null};unittests.XPClassTests.prototype.thisClassHasNoAnnotations['/']= 'Tests hasAnnotations()';unittests.XPClassTests.prototype.thisClassHasNoAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisClassAnnotations= function XPClassTests$thisClassAnnotations(){
this.assertEquals([],this.getClass().getAnnotations());};unittests.XPClassTests.prototype.thisClassAnnotations['@']= {test:null};unittests.XPClassTests.prototype.thisClassAnnotations['/']= 'Tests getAnnotations()';unittests.XPClassTests.prototype.thisClassAnnotations['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisClassWebserviceAnnotation= function XPClassTests$thisClassWebserviceAnnotation(){
this.getClass().getAnnotation('webservice');};unittests.XPClassTests.prototype.thisClassWebserviceAnnotation['@']= {test:null,expect:'lang.ElementNotFoundException'};unittests.XPClassTests.prototype.thisClassWebserviceAnnotation['/']= 'Tests getAnnotation()';unittests.XPClassTests.prototype.thisClassWebserviceAnnotation['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisClassParent= function XPClassTests$thisClassParent(){
this.assertEquals(lang.XPClass.forName('unittest.TestCase'),this.getClass().getParentclass());};unittests.XPClassTests.prototype.thisClassParent['@']= {test:null};unittests.XPClassTests.prototype.thisClassParent['/']= 'Tests getParentclass()';unittests.XPClassTests.prototype.thisClassParent['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.objectsClassParent= function XPClassTests$objectsClassParent(){
this.assertNull(lang.XPClass.forName('lang.Object').getParentclass());};unittests.XPClassTests.prototype.objectsClassParent['@']= {test:null};unittests.XPClassTests.prototype.objectsClassParent['/']= 'Tests getParentclass()';unittests.XPClassTests.prototype.objectsClassParent['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisClassPackage= function XPClassTests$thisClassPackage(){
this.assertEquals(new lang.reflect.Package('unittests'),this.getClass().getPackage());};unittests.XPClassTests.prototype.thisClassPackage['@']= {test:null};unittests.XPClassTests.prototype.thisClassPackage['/']= 'Tests getPackage()';unittests.XPClassTests.prototype.thisClassPackage['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.objectImplementsGenericInterface= function XPClassTests$objectImplementsGenericInterface(){
this.assertEquals([lang.XPClass.forName('lang.Generic')],lang.XPClass.forName('lang.Object').getInterfaces());};unittests.XPClassTests.prototype.objectImplementsGenericInterface['@']= {test:null};unittests.XPClassTests.prototype.objectImplementsGenericInterface['/']= 'Tests getInterfaces()';unittests.XPClassTests.prototype.objectImplementsGenericInterface['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisClassComment= function XPClassTests$thisClassComment(){
this.assertEquals('Test lang.XPClass',this.getClass().getComment());};unittests.XPClassTests.prototype.thisClassComment['@']= {test:null};unittests.XPClassTests.prototype.thisClassComment['/']= 'Tests getComment()';unittests.XPClassTests.prototype.thisClassComment['_']= {returns: 'void',throws: [],signature: []};







unittests.XPClassTests.prototype.thisMethodsComment= function XPClassTests$thisMethodsComment(){
this.assertEquals(
'Tests Method::getComment()',
this.getClass().getMethod(this.$name).getComment());};unittests.XPClassTests.prototype.thisMethodsComment['@']= {test:null};unittests.XPClassTests.prototype.thisMethodsComment['/']= 'Tests Method::getComment()';unittests.XPClassTests.prototype.thisMethodsComment['_']= {returns: 'void',throws: [],signature: []};unittests.XPClassTests['/']= 'Test lang.XPClass';