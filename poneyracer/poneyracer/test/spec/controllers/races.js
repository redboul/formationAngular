'use strict';

describe('Controller: RacesCtrl', function () {

  // load the controller's module
  beforeEach(module('poneyracerApp'));

  var RacesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RacesCtrl = $controller('RacesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).not.toBeDefined();
  });
});
