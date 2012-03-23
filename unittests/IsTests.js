uses('unittest.TestCase', 'lang.Generic');






;





unittests.IsTests= define('unittests.IsTests','unittest.TestCase',function IsTests(){unittest.TestCase.apply(this, arguments);});






unittests.IsTests.prototype.objectIsAnInstance= function IsTests$objectIsAnInstance(){
this.assertInstanceOf('lang.Generic',new lang.Object());};unittests.IsTests.prototype.objectIsAnInstance['@']= {test:null};







unittests.IsTests.prototype.thisIsAnInstance= function IsTests$thisIsAnInstance(){
this.assertInstanceOf('lang.Generic',this);};unittests.IsTests.prototype.thisIsAnInstance['@']= {test:null};







unittests.IsTests.prototype.throwableIsAnInstance= function IsTests$throwableIsAnInstance(){
this.assertInstanceOf('lang.Generic',new lang.Throwable('test'));};unittests.IsTests.prototype.throwableIsAnInstance['@']= {test:null};







unittests.IsTests.prototype.nullIsNotAnInstance= function IsTests$nullIsNotAnInstance(){
this.assertFalse(global.is('lang.Generic',null));};unittests.IsTests.prototype.nullIsNotAnInstance['@']= {test:null};







unittests.IsTests.prototype.stringIsNotAnInstance= function IsTests$stringIsNotAnInstance(){
this.assertFalse(global.is('lang.Generic','test'));};unittests.IsTests.prototype.stringIsNotAnInstance['@']= {test:null};