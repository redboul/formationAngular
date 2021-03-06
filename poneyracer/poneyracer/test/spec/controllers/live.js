'use strict';

describe('Controller: LiveCtrl', function () {

  // load the controller's module
  beforeEach(module('poneyracerApp'));

  var LiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LiveCtrl = $controller('LiveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).not.toBeDefined();
  });
});
