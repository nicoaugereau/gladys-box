'use strict';

module.exports = {
    
    folderName: 'boxtest',
    // Inject Boxs in dashboard
    // dashboadBoxs is an array of dashboardBox 
    dashboardBoxs: [{
        uuid: 'f74d5613-e1da-4eba-a84f-48f7bc480dfc',
        title: 'Boxtest',
        // the name of your Angular Controller for this box (put an empty string if you don't use angular)
        ngController: 'boxtestBoxCtrl as vm',
        file : 'boxtest.ejs',
        icon: 'fa fa-code',
        type: 'box box-primary'
    }],
    // link assets to project
    linkAssets: true
};