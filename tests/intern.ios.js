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
			browserName: 'safari',
			version: '8.1',
			device: 'iphone',
			simulator: true
		}
	];

	return intern;
});
