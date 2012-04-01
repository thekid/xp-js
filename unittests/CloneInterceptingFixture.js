










unittests.CloneInterceptingFixture= define('unittests.CloneInterceptingFixture','lang.Object',function CloneInterceptingFixture(){});unittests.CloneInterceptingFixture['_']= {throws: [],signature: []};
unittests.CloneInterceptingFixture.prototype.$name='Original';





unittests.CloneInterceptingFixture.prototype.__clone= function CloneInterceptingFixture$__clone(){
this.$name='Cloned: '+this.$name;};unittests.CloneInterceptingFixture.prototype.__clone['/']= 'Clone handler';unittests.CloneInterceptingFixture.prototype.__clone['_']= {returns: 'unittests.CloneInterceptingFixture',throws: [],signature: []};unittests.CloneInterceptingFixture['/']= 'Test clone()';