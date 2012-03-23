










unittests.CloneInterceptingFixture= define('unittests.CloneInterceptingFixture','lang.Object',function CloneInterceptingFixture(){});
unittests.CloneInterceptingFixture.prototype.name='Original';





unittests.CloneInterceptingFixture.prototype.__clone= function CloneInterceptingFixture$__clone(){
this.name='Cloned: '+this.name;};