'use strict';

angular.module('app.contacts')

    .config(function($stateProvider) {
        $stateProvider
            .state('app.contacts-list', {
                url: '/',
                templateUrl: 'app/contacts/views/contacts-list.tmpl.html',
                controller: 'ContactsListCtrl',
                controllerAs: 'contactsListCtrl'
            })
            .state('app.contacts-single', {
                url: '/:id',
                templateUrl: 'app/contacts/views/contacts-single.tmpl.html',
                controller: 'ContactsSingleCtrl',
                controllerAs: 'contactsSingleCtrl'
            });
    });