'use strict';

angular.module('app.contacts')

    .controller('ContactsSingleCtrl', function(Contacts, $stateParams) {
        var vm = this;

        Contacts.getContacts().then(function(result) {
            vm.contact = _.where(result.data.results, { seed: $stateParams.id })[0];
        }, function() {
            //error
        });

        vm.passwordStrength = function() {
            if (vm.contact) {
                if ( vm.contact.user.password.length < 6 ) {
                    return 'weak';
                }
                else {
                    return 'strong'
                }
            }
        }
    });