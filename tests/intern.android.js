define([
	'./intern'
], function (intern) {
	intern.tunnel = 'NullTunnel';
	intern.proxyUrl = 'http://10.0.2.2:9000/',

	intern.capabilities = {
		driver: {
			version: '0.6.5'
		}
	};

	intern.environments = [
		{
			browserName: 'android',
			device: 'android',
			simulator: true
		}
	];

	return intern;
});
