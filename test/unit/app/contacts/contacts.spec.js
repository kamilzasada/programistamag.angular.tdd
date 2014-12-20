'use strict';

describe('Module "app.contacts"', function() {
    var module;
    var moduleDependencies;

    beforeEach(function() {
        module = angular.module('app.contacts');
        moduleDependencies = module.requires;
    });

    it('should be registered', function() {
        expect(module).toBeDefined();
    });

    it('should have "app.models.contacts" as a dependency', function() {
        expect(moduleDependencies).toContain('app.models.contacts');
    });
});