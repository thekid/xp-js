uses('unittest.TestCase');






;





unittests.LambdaTests= define('unittests.LambdaTests','unittest.TestCase',function LambdaTests(){unittest.TestCase.apply(this, arguments);});unittests.LambdaTests['_']= {throws: [],signature: []};





unittests.LambdaTests.prototype.apply= function LambdaTests$apply($elements,$block){
$r=[];
for (var $T0=0;$T0<$elements.length;$T0++) {$element=$elements[$T0];
$r.push($block.call(this,$element));};

return $r;};unittests.LambdaTests.prototype.apply['/']= "Apply a given function to a list of elements";unittests.LambdaTests.prototype.apply['_']= {returns: 'var[]',throws: [],signature: ['var[]','var',]};






unittests.LambdaTests.prototype.filter= function LambdaTests$filter($elements,$block){
$r=[];
for (var $T1=0;$T1<$elements.length;$T1++) {$element=$elements[$T1];
if ($block.call(this,$element)) {$r.push($element);};};

return $r;};unittests.LambdaTests.prototype.filter['/']= "Filter a list of elements with a given function";unittests.LambdaTests.prototype.filter['_']= {returns: 'var[]',throws: [],signature: ['var[]','var',]};







unittests.LambdaTests.prototype.doApply= function LambdaTests$doApply(){
this.assertEquals([2,4,6],this.apply([1,2,3],function($a) {return $a*2;}));};unittests.LambdaTests.prototype.doApply['@']= {test:null};unittests.LambdaTests.prototype.doApply['/']= "Test";unittests.LambdaTests.prototype.doApply['_']= {returns: 'void',throws: [],signature: []};







unittests.LambdaTests.prototype.doFilterOdd= function LambdaTests$doFilterOdd(){
this.assertEquals(
[2,4,6,8,10],
this.filter([1,2,3,4,5,6,7,8,9,10],function($a) {return !($a&1);}));};unittests.LambdaTests.prototype.doFilterOdd['@']= {test:null};unittests.LambdaTests.prototype.doFilterOdd['/']= "Test short syntax";unittests.LambdaTests.prototype.doFilterOdd['_']= {returns: 'void',throws: [],signature: []};








unittests.LambdaTests.prototype.doFilterEven= function LambdaTests$doFilterEven(){
this.assertEquals(
[1,3,5,7,9],
this.filter([1,2,3,4,5,6,7,8,9,10],function($a) {$result=$a&1;return $result;}));};unittests.LambdaTests.prototype.doFilterEven['@']= {test:null};unittests.LambdaTests.prototype.doFilterEven['/']= "Test long syntax";unittests.LambdaTests.prototype.doFilterEven['_']= {returns: 'void',throws: [],signature: []};








unittests.LambdaTests.prototype.applyWithCapturing= function LambdaTests$applyWithCapturing(){
$mul=3;
this.assertEquals([3,6,9],this.apply([1,2,3],(function($mul){ return function($a) {return $a*$mul;}})($mul)));};unittests.LambdaTests.prototype.applyWithCapturing['@']= {test:null};unittests.LambdaTests.prototype.applyWithCapturing['/']= "Test";unittests.LambdaTests.prototype.applyWithCapturing['_']= {returns: 'void',throws: [],signature: []};







unittests.LambdaTests.prototype.applyWithLoop= function LambdaTests$applyWithLoop(){
$callbacks=[];
for ($i=0;$i < 2;$i++) {
$callbacks.push((function($i){ return function() {return $i;}})($i));};

this.assertEquals(0,$callbacks[0].call(this));};unittests.LambdaTests.prototype.applyWithLoop['@']= {test:null};unittests.LambdaTests.prototype.applyWithLoop['/']= "Test";unittests.LambdaTests.prototype.applyWithLoop['_']= {returns: 'void',throws: [],signature: []};







unittests.LambdaTests.prototype.execution= function LambdaTests$execution(){
this.assertEquals(3,function($a) {return $a+1;}.call(this,2));};unittests.LambdaTests.prototype.execution['@']= {test:null};unittests.LambdaTests.prototype.execution['/']= "Test";unittests.LambdaTests.prototype.execution['_']= {returns: 'void',throws: [],signature: []};







unittests.LambdaTests.prototype.executionViaVariable= function LambdaTests$executionViaVariable(){
$plusone=function($a) {return $a+1;};
this.assertEquals(3,$plusone.call(this,2));};unittests.LambdaTests.prototype.executionViaVariable['@']= {test:null};unittests.LambdaTests.prototype.executionViaVariable['/']= "Test";unittests.LambdaTests.prototype.executionViaVariable['_']= {returns: 'void',throws: [],signature: []};







unittests.LambdaTests.prototype.thisCapturing= function LambdaTests$thisCapturing(){
$greet=function() {return 'Hello '+this.$name;};
this.assertEquals('Hello thisCapturing',$greet.call(this));};unittests.LambdaTests.prototype.thisCapturing['@']= {test:null};unittests.LambdaTests.prototype.thisCapturing['/']= "Test";unittests.LambdaTests.prototype.thisCapturing['_']= {returns: 'void',throws: [],signature: []};unittests.LambdaTests['/']= "Test lambdas";