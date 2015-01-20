define([
	'./intern'
], function (intern) {
	intern.tunnel = 'NullTunnel';
	intern.capabilities = {
		iphone: {
		browserName: "Safari",
			version: '8.1'
		}
	};
	intern.environments = [
		{
			browserName: 'safari',
			platform: 'ios',
			device: 'iphone',
			version: '8.1'
		}
	];

	return intern;
});
