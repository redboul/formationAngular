'use strict';

describe('Directive: poney', function () {

  // load the directive's module
  beforeEach(module('poneyracerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<poney></poney>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the poney directive');
  }));
});
