(function () {
	'use strict';
	
	angular
		.module('app')
		.controller('boxtestBoxCtrl', boxtestBoxCtrl); 
		//Gardez bien le "BoxCtrl" !

	boxtestBoxCtrl.$inject  = ['boxtestService'];

	function  boxtestBoxCtrl(boxtestService) {
		var vm = this;
		vm.init = init;
		vm.box = null;
		
		function init(id){
			boxtestService.getById(id) //On appel la route "getById" du service
				.then(function(data){
					vm.box = data.data; //On sauvegarde tout 
					activate(); //On active notre box
				});
		}
		
		function activate(){
			console.log(vm.box.param)
		}

		/* Functions */
		vm.micUp = function() {
			boxtestService.micUp();
		};

		vm.micDown = function() {
			boxtestService.micDown();
		};

		vm.mute = function() {
			boxtestService.mute();
		};

		vm.volumeUp = function() {
			boxtestService.volumeUp();
		};

		vm.volumeDown = function() {
			boxtestService.volumeDown();
		};
		
	}
})(); 
