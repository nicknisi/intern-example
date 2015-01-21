define([
	'./intern'
], function (intern) {
	intern.tunnel = 'NullTunnel';

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
