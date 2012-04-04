










unittests.UncloneableFixture= define('unittests.UncloneableFixture','lang.Object',function UncloneableFixture(){});unittests.UncloneableFixture['_']= {throws: [],signature: []};





unittests.UncloneableFixture.prototype.__clone= function UncloneableFixture$__clone(){
throw new lang.IllegalStateException('Cannot clone this');};unittests.UncloneableFixture.prototype.__clone['/']= "Clone handler";unittests.UncloneableFixture.prototype.__clone['_']= {returns: 'unittests.UncloneableFixture',throws: [],signature: []};unittests.UncloneableFixture['/']= "Test clone()";