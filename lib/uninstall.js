const Promise = require('bluebird');
var shared = require('./shared.js');

module.exports = function uninstall(){
	
	gladys.boxType.getAll()
	.then((boxes) => {
	    boxes.forEach(function(box) {
	        if(box.uuid == 'f74d5613-e1da-4eba-a84f-48f7bc480dfc' )
	        {
	            gladys.boxType.delete({'id' : box.id})
	        }
	    })
	})

	sails.log.info('Boxtest : Module uninstalled');
	return Promise.resolve();
	
};
