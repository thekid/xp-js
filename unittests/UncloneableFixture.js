










unittests.UncloneableFixture= define('unittests.UncloneableFixture','lang.Object',function UncloneableFixture(){});





unittests.UncloneableFixture.prototype.__clone= function UncloneableFixture$__clone(){
throw new lang.IllegalStateException('Cannot clone this');};