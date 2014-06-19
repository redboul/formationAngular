'use strict';

describe('Controller: RegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('poneyracerApp'));

  var RegisterCtrl,
    scope, user = {
      firstName: 'julien',
      lastName: 'reboul',
      email: 'julien.reboul@bonitasoft.com',
      birthYear : 1981,
      login: 'julien',
      password: 'poutpout'
    }, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    RegisterCtrl = $controller('RegisterCtrl', {
      $scope: scope
    });
  }));

  it('should check minority', function () {
      expect(scope.isMineur(2000)).toBe(true);
      expect(scope.isMineur(1981)).toBe(false);
  });

  it('should register user', function () {
      httpBackend.expectPOST('http://localhost:8080/poneyserver/users', user).respond(function(){return {};});
      scope.register(user);
      httpBackend.flush();
  });
});
