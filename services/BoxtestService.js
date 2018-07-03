var request = require('request');
var querystring = require('querystring');

var code = sails.config.freebox.code;
var hd = sails.config.freebox.hd || "hd1";

function pressKey(key, fn){
    fn = fn || function(err){};
    var params = {
        code: code,
        key: key
    };

    request("http://"+hd+".freebox.fr/pub/remote_control?"+querystring.stringify(params), function(error, response, body){
        fn(error);
    });

};

module.exports = {

    pressKey: pressKey,

    mute: function(fn){
        pressKey("mute", fn);
    },

};