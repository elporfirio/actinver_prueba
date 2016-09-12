/**
 * Created by elporfirio on 10/09/16.
 */

angular
    .module('actinver_todolist').config(['$stateProvider', '$urlRouterProvider', routes]);

//routes.$inject = ['$stateProvider'];

/* @ngInject */
function routes ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    // Arreglo de States
    var states = [
        {
            name: 'home',
            url: '/',
            templateUrl: 'views/home.view.html'
        },
        {
            name: 'signup',
            url: '/registro',
            templateUrl: 'views/signup.view.html',
            controller: 'SignUpController',
            controllerAs: 'signupctrl'
        },
        {
            name: 'signin',
            url: '/login',
            templateUrl: 'views/signin.view.html',
            controller: 'SignInController',
            controllerAs: 'signinctrl'
        },
        {
            name: 'tasks',
            url: '/tareas',
            templateUrl: 'views/task-dashboard.view.html'
        }
        // {
        //     name: 'hello',
        //     url: '/hello',
        //     // Using component: instead of template:
        //     component: 'hello'
        // },
        //
        // {
        //     name: 'about',
        //     url: '/about',
        //     component: 'about'
        // },
        //
        // {
        //     name: 'people',
        //     url: '/people',
        //     component: 'people',
        //     // This state defines a 'people' resolve
        //     // It delegates to the PeopleService to HTTP fetch (async)
        //     // The people component receives this via its `bindings: `
        //     resolve: {
        //         people: function(PeopleService) {
        //             return PeopleService.getAllPeople();
        //         }
        //     }
        // },
        //
        // {
        //     name: 'person',
        //     // This state takes a URL parameter called personId
        //     url: '/people/{personId}',
        //     component: 'person',
        //     // This state defines a 'person' resolve
        //     // It delegates to the PeopleService, passing the personId parameter
        //     resolve: {
        //         person: function(PeopleService, $transition$) {
        //             return PeopleService.getPerson($transition$.params().personId);
        //         }
        //     }
        // }
    ];

    // Registrar States
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
}
