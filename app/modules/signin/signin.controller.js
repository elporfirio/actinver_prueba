/**
 * Created by elporfirio on 12/09/16.
 */
(function () {
    'use strict';

    angular
        .module('actinver_todolist')
        .controller('SignInController',['$state', SignInController]);

    /* @ngInject */
    function SignInController($state) {
        var vm = this;
        vm.successSignIn = successSignIn;

        vm.user = {
            username: 'elporfirio@gmail.com',
            password: 'ABcd1234*',
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

            $state.go('tasks');
        }
    }

})();