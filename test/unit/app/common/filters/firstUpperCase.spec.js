'use strict';

describe('Filter "firstUpperCase"', function() {
    var firstUpperCase;

    beforeEach(module('app.filters.firstUpperCase'));

    beforeEach(inject(function($filter) {
        firstUpperCase = $filter('firstUpperCase');
    }));

    it('should change first letter of string to capital letter', function() {
        expect(firstUpperCase).toBeDefined();
        expect(firstUpperCase('test')).toBe('Test');
        expect(firstUpperCase('Test')).toBe('Test');
        expect(firstUpperCase('test test')).toBe('Test test');
    });
});