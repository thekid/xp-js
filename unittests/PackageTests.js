uses('unittest.TestCase');






;
;





unittests.PackageTests= define('unittests.PackageTests','unittest.TestCase',function PackageTests(){unittest.TestCase.apply(this, arguments);});unittests.PackageTests['_']= {throws: [],signature: []};






unittests.PackageTests.prototype.packageName= function PackageTests$packageName(){
this.assertEquals('unittests',this.getClass().getPackage().getName());};unittests.PackageTests.prototype.packageName['@']= {test:null};unittests.PackageTests.prototype.packageName['/']= "Tests getName()";unittests.PackageTests.prototype.packageName['_']= {returns: 'void',throws: [],signature: []};







unittests.PackageTests.prototype.stringRepresentation= function PackageTests$stringRepresentation(){
this.assertEquals('lang.reflect.Package<unittests>',this.getClass().getPackage().toString());};unittests.PackageTests.prototype.stringRepresentation['@']= {test:null};unittests.PackageTests.prototype.stringRepresentation['/']= "Tests toString()";unittests.PackageTests.prototype.stringRepresentation['_']= {returns: 'void',throws: [],signature: []};







unittests.PackageTests.prototype.getClassNames= function PackageTests$getClassNames(){
this.assertEquals(
['unittests.classes.A','unittests.classes.B','unittests.classes.C'],
lang.reflect.Package.forName('unittests.classes').getClassNames());};unittests.PackageTests.prototype.getClassNames['@']= {test:null};unittests.PackageTests.prototype.getClassNames['/']= "Tests getClassNames()";unittests.PackageTests.prototype.getClassNames['_']= {returns: 'void',throws: [],signature: []};








unittests.PackageTests.prototype.getClasses= function PackageTests$getClasses(){
this.assertEquals(
[lang.XPClass.forName('unittests.classes.A'),lang.XPClass.forName('unittests.classes.B'),lang.XPClass.forName('unittests.classes.C')],
lang.reflect.Package.forName('unittests.classes').getClasses());};unittests.PackageTests.prototype.getClasses['@']= {test:null};unittests.PackageTests.prototype.getClasses['/']= "Tests getClasses()";unittests.PackageTests.prototype.getClasses['_']= {returns: 'void',throws: [],signature: []};unittests.PackageTests['/']= "Test lang.reflect.Package";