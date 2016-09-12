/**
 * Created by elporfirio on 10/09/16.
 */

(function () {
    'use strict';

    angular
        .module('actinver_todolist')
        .component('signupForm', {
            bindings: {
                user: '=',
                onSuccess: '&'
            },
            templateUrl: 'views/signup.frm.html',
            controller: ['SignUpService', Controlador]
        });

    function Controlador(SignUpService){
        var vm = this;

        this.signUp = function(user){
            console.log(user);
            SignUpService.signUp(user)
                .then(function(response){
                    console.info(response);
                    vm.onSuccess();
                });
        }
    }

})();



