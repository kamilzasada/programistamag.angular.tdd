'use strict';

angular.module('app.contacts')

    .controller('ContactsSingleCtrl', function(Contacts, $stateParams) {
        var vm = this;

        Contacts.getContacts().then(function(result) {
            vm.contact = _.where(result.data.results, { seed: $stateParams.id })[0];
        }, function() {
            //error
        });

        vm.strenght = function() {
            var size = null;

            if (vm.contact) {
                size = vm.contact.user.password.length;

                if ( size < 6 ) {
                    return 'weak';
                }
                else {
                    return 'strong'
                }
            }
        }
    });