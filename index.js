
module.exports = function(sails) {

	gladys.on('ready', function(){
        install();
    });

	return {
		defaults: require('./lib/defaults.js'),
		configure: require('./lib/configure')(sails),
      	initialize: require('./lib/initialize')(sails),
		uninstall: require('./lib/uninstall.js')
	};
};
