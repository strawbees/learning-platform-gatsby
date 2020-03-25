const buildConfigs = {
	'stage': {
		trackingId: 'UA-69443341-4',
		pathPrefix: '',
		siteUrl: 'https://learning-stage.strawbees.com',
		// graphqlUrl: 'http://localhost:8080/graphql',
		graphqlUrl: 'http://strawbees-learning.herokuapp.com/graphql',
		graphqlRefetchInterval: null
	},
	'production': {
		trackingId: 'UA-69443341-2',
		pathPrefix: '',
		siteUrl: 'https://learning.strawbees.com',
		graphqlUrl: 'http://strawbees-learning.herokuapp.com/graphql',
		graphqlRefetchInterval: null
	},
	'github': {
		trackingId: '',
		pathPrefix: '/learning-platform-gatsby',
		siteUrl: 'https://strawbees.github.io',
		graphqlUrl: 'http://strawbees-learning.herokuapp.com/graphql',
		graphqlRefetchInterval: 60
	},
	'local': {
		trackingId: '',
		pathPrefix: '/public',
		siteUrl: 'http://localhost:9000',
		graphqlUrl: 'http://localhost:8080/graphql',
		graphqlRefetchInterval: 10
	},
}

module.exports =  function(env) {
	if (!buildConfigs[env]) {
		env = 'stage'
	}
	return buildConfigs[env]
}
