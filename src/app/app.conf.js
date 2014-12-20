'use strict';

angular.module('app')

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '',
                //abstract: true
                template: '<div ui-view></div>'
            });

            $urlRouterProvider.otherwise('/');
    });