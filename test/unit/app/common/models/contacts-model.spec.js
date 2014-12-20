'use strict';

describe('Module "app.models.contacts"', function() {
    var module;
    var moduleDependencies;

    beforeEach(function() {
        module = angular.module('app.models.contacts');
        moduleDependencies = module.requires;
    });

    it('should be registered', function() {
        expect(module).toBeDefined();
    });

    it('should not have dependencies', function() {
        expect(moduleDependencies.length).toEqual(0);
    });
});