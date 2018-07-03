module.exports = {

    key: function (req, res) {
        BoxtestService.pressKey(req.param("key"));
        res.json('ok');
    },

    power: function (req, res) {
        BoxtestService.power();
        res.json('ok');
    },
    ok: function (req, res) {
        FreeboxService.ok();
        res.json('ok');
    },

};