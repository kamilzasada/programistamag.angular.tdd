'use strict';

angular.module('app.contacts')

    .controller('ContactsListCtrl', function(Contacts) {
        var vm = this;

        Contacts.getContacts().then(function(result) {

            vm.contacts = result.data.results;

            console.log(vm.contacts);

        }, function() {
            // error
        });





    });