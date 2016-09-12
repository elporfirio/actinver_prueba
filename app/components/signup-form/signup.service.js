/**
 * Created by elporfirio on 10/09/16.
 */
(function () {
    'use strict';

    angular
        .module('actinver_todolist')
        .service('SignUpService', signUpUserService);

    signUpUserService.$inject = ['$http'];

    /* @ngInject */
    function signUpUserService($http) {
        this.inicio = inicio;
        this.signUp = signUp;

        ////////////////

        function signUp(user){
            return $http.post('http://xofotestfront.azurewebsites.net/api/Account/Register', user)
                .then(signUpSuccess)
                .catch(signUpFailed);

            function signUpSuccess(response){
                console.log(response);
                return response;
            }

            function signUpFailed(error){
                console.error(error);
                return error;
            }
        }

        function inicio() {
            console.log("Activado el servicio");
        }
    }

})();
