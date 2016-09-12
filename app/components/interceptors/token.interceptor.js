/**
 * Created by elporfirio on 12/09/16.
 */
(function () {
    'use strict';

    angular
        .module('actinver_todolist')
        .service('tokenInterceptor', ['$window', tokenInterceptor]);

    function tokenInterceptor($window) {
        this.request = requestFunction;
        //this.response = responseFunction;

        ////////////////

        function requestFunction(config) {
            console.info(config.url);
            //TODO: configurar un middleware
            var noAuht = [
                '/Account/Register',
                '/Token'
            ];

            var assignToken = false;

            noAuht.forEach(function(noAuhtUrl){
                if(config.url.indexOf(noAuhtUrl) == -1){
                    assignToken = true;
                }
            });

            if($window.localStorage.access_token && assignToken){
                config.headers['Authorization'] = 'Bearer ' + $window.localStorage.access_token;
            }
            return config;
        }

        // function responseFunction(response){
        //     if(response.data.token !== undefined){
        //         delete $window.localStorage.currentUser;
        //         var currentUser = {token: response.data.token};
        //         $window.localStorage.currentUser = JSON.stringify(currentUser);
        //         //$http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
        //     }
        //     return response;
        // }
    }

})();