const buildConfigs = {
	'stage': {
		trackingId: 'UA-69443341-4',
		pathPrefix: '',
		headlessWordpress: 'learning-cms.strawbees.com',
		headlessWordpressProtocol: 'http',
	},
	'production': {
		trackingId: 'UA-69443341-2',
		pathPrefix: '',
		headlessWordpress: 'strawbees-learning.herokuapp.com',
		headlessWordpressProtocol: 'https',
	},
	'github': {
		trackingId: '',
		pathPrefix: '/learning-platform-gatsby',
		headlessWordpress: 'strawbees-learning.herokuapp.com',
		headlessWordpressProtocol: 'https',
	},
	'local': {
		trackingId: '',
		pathPrefix: '/',
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
