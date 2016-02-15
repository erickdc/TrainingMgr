(function(){
    'use strict';
    angular.module('trainingApp')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl() {
        var vm = this;

        function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
        }


        window.onSignIn = onSignIn;
    }
})();