'use strict';

var param = require('./parameters.js');

module.exports = {
    /**
     * Module Configuration
     */
     
    // You HAVE to modify this name :
    freebox: {
        uuid: 'f74d5613-e1da-4eba-a84f-48f7bc480dfc',
        // title for the Hook
        title: 'Box test',
    	// the name of the hook folder
        folderName: param.folderName
    }
};