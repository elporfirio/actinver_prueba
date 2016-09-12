/**
 * Created by elporfirio on 10/09/16.
 */
(function () {
    'use strict';

    angular
        .module('actinver_todolist')
        .controller('SignUpController', SignUpController);

    /* @ngInject */
    function SignUpController() {
        var vm = this;
        vm.title = 'SignUpController';
        vm.successSignIN = successSignIN;

        vm.user = {
            email: 'algo@email.com',
            password: '1234'
        };

        vm.ok = false;

        activate();

        ////////////////

        function activate() {

        }

        function successSignUp(){
            console.info("TODO SALIO OKAY");
            vm.ok = true;
        }
    }

})();

