/**
 * Created by elporfirio on 12/09/16.
 */
(function () {
    'use strict';

    angular
        .module('actinver_todolist')
        .controller('SignInController', SignInController);

    /* @ngInject */
    function SignInController() {
        var vm = this;
        vm.successSignIn = successSignIn;

        vm.user = {
            username: 'apitest@gmail.com',
            password: '12345678z!A',
            grant_type: 'password'
        };

        vm.ok = false;

        activate();

        ////////////////

        function activate() {

        }

        function successSignIn(){
            console.info("TODO SALIO OKAY");
            vm.ok = true;
        }
    }

})();