'use strict';

describe('Contacts list page', function() {
    it('should have 10 contacts', function() {
        browser.get('/#/');

        var contactsList = element.all(by.repeater('contact in contactsListCtrl.contacts'));

        expect(contactsList.count()).toEqual(10);
    });
});