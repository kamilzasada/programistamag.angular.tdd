'use strict';

describe('Module "app"', function() {
    var module;
    var moduleDependencies;

    beforeEach(function() {
        module = angular.module('app');
        moduleDependencies = module.requires;
    });

    it('should be registered', function() {
        expect(module).toBeDefined();
    });

    it('should have "ui.router" as a dependency', function() {
        expect(moduleDependencies).toContain('ui.router');
    });

    it('should have "app.contacts" as a dependency', function() {
        expect(moduleDependencies).toContain('app.contacts');
    });
});