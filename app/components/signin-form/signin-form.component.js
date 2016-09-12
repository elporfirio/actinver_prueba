/**
 * Created by elporfirio on 10/09/16.
 */

(function () {
    'use strict';

    angular
        .module('actinver_todolist')
        .component('signinForm', {
            bindings: {
                user: '=',
                onSuccess: '&'
            },
            templateUrl: 'views/signin.frm.html',
            controller: ['SignInService', Controlador]
        });

    function Controlador(SignInService){
        var vm = this;

        this.signIn = function(user){
            console.log(user);
            SignInService.signIn(user)
                .then(function(response){
                    console.info("LOGGIADO",response);
                    vm.onSuccess();
                });
        }
    }

})();



