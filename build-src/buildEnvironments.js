const buildConfigs = {
	'stage': {
		trackingId: 'UA-69443341-4',
		pathPrefix: '',
		siteUrl: 'https://learning-stage.strawbees.com',
		headlessWordpress: 'strawbees-learning.herokuapp.com',
		headlessWordpressProtocol: 'http',
	},
	'production': {
		trackingId: 'UA-69443341-2',
		pathPrefix: '',
		siteUrl: 'https://learning.strawbees.com',
		headlessWordpress: 'strawbees-learning.herokuapp.com',
		headlessWordpressProtocol: 'https',
	},
	'github': {
		trackingId: '',
		pathPrefix: '/learning-platform-gatsby',
		siteUrl: 'https://strawbees.github.io',
		headlessWordpress: 'strawbees-learning.herokuapp.com',
		headlessWordpressProtocol: 'http',
	},
	'local': {
		trackingId: '',
		pathPrefix: '/',
		siteUrl: 'http://localhost:8000',
		headlessWordpress: 'localhost:8080',
		headlessWordpressProtocol: 'http',
	},
}

module.exports =  function(env) {
	if (!buildConfigs[env]) {
		env = 'stage'
	}
	return buildConfigs[env]
}
