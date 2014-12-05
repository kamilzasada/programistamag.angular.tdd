'use strict';

angular.module('app.users')

    .config(function($stateProvider) {
        $stateProvider
            .state('app.users-list', {
                url: '/',
                templateUrl: 'app/users/views/users-list.tmpl.html',
                controller: 'usersListCtrl'
            });
    });