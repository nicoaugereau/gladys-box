const Promise = require('bluebird');
const fs = require('fs');

module.exports = function install(){
	var boxBoxtest = {
		uuid: 'f74d5613-e1da-4eba-a84f-48f7bc480dfc',
		title: 'Box test',
		ngcontroller: 'boxtextBoxCtrl as vm',
		path: 'views/boxs/gladys-box.ejs',
		icon: 'fa fa-volume-down',
		type: 'box box-primary',
		view: 'dashboard'
	}
	// Création de la box
	gladys.boxType.create(boxBoxtest);

	// Copy files into Gladys
	fs.copyFile('api/hooks/gladys-box/views/gladys-box.ejs', 'views/boxs/gladys-box.ejs', function (err) {
		if (err) throw err;
		console.log('file copied');
	  });
	if (!fs.existsSync('assets/js/app/gladys-box/')){
		fs.mkdir('assets/js/app/gladys-box/', 755, function (err) {
			if (err) throw err;
			console.log('creaded folder');
		  });
	}
	
	fs.copyFile('api/hooks/gladys-box/assets/js/gladys-box.controller.js', 'assets/js/app/gladys-box/gladys-box.controller.js', function (err) {
		if (err) throw err;
		console.log('file copied');
	  });
	  fs.copyFile('api/hooks/gladys-box/assets/js/gladys-box.service.js', 'assets/js/app/gladys-box/gladys-box.service.js', function (err) {
		if (err) throw err;
		console.log('file copied');
	  });
	  // add boxType.js data to config/boxTypes.js
	  // add internationalization data to config/locales
	  /*
	  https://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback

	  https://stackoverflow.com/questions/33418777/node-js-write-a-line-into-a-txt-file/33419220
	  http://stackabuse.com/writing-to-files-in-node-js/
	  http://disasterjs.blogspot.com/2013/03/appending-text-to-file-in-nodejs.html
	  https://stackoverflow.com/questions/38843016/how-to-remove-one-line-from-a-txt-file
	  https://stackoverflow.com/questions/17363206/node-js-how-to-delete-first-line-in-file/17365494

	  */

	
	sails.log.info('Gladys box : Module installed');
	return Promise.resolve();
};
