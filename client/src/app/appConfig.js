/**
 * Created by erick304 on 15/02/2016.
 */

(function(){
    'use strict';
    angular.module('trainingApp')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './src/app/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});
    }

})();
