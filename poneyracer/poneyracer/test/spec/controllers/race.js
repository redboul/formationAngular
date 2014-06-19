'use strict';

describe('Controller: RaceCtrl', function () {

  // load the controller's module
  beforeEach(module('poneyracerApp'));

  var RaceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RaceCtrl = $controller('RaceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).not.toBeDefined();
  });
});
