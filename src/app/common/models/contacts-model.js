'use strict';

angular.module('app.models.contacts', [])

    .service('Contacts', function($http) {
        var model = this;

        model.getContacts = function() {
            return $http.get('data/contacts.json');
        };
    });