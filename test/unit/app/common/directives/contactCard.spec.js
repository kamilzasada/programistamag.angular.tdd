'use strict';

describe('Component "<contact-card>"', function() {
    var element;
    var $scope;

    beforeEach(module('app.components.contact-card'));

    beforeEach(module('test.templates'));

    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope.$new();
        $scope.contact = {
            email: 'email@gmail.com',
            phone: '123-123-123',
            cell: '987-987-987'
        };
        element = angular.element('<contact-card contact="contact"></contact-card>');

        $compile(element)($scope);
        $scope.$digest();
    }));

    it('should have "ContactCard" class', function() {
        expect(element.hasClass('ContactCard')).toBe(true);
    });

    it('should have email equals to "email@gmail.com"', function() {
        expect($scope.contact.email).toEqual('email@gmail.com');
        expect(element.isolateScope().contact.email).toEqual('email@gmail.com');
    });
});