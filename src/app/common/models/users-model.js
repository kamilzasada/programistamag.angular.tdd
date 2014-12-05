'use strict';

angular.module('app.models.users', [])

    .service('Users', function($http) {
        var model = this;
        //var users = [
        //    { id: 1, name: 'John Doe' }
        //];
        //var users;

        model.getUsers = function() {

            //return users;
            return $http.get('data/users.json');
        };

    });