define([
	'intern!object',
	'intern/chai!assert'
], function (registerSuite, assert) {
	registerSuite({
		name: 'Test Functional Test',
		'load page and click button': function () {
			return this.remote
				.get('http://google.com/')
				.sleep(5000)
				.then(function () {
					assert(true, 'all good');
				});
		}
	});
});
