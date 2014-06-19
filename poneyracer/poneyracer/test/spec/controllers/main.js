'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('controllers'));

  var scope,
    httpBackend,
    userList =[{
        'login': 'ced',
        'password': 'password',
        'firstName': 'Cédric',
        'lastName': 'Exbrayat',
        'email': 'cedric@ninja-squad.com',
        'birthYear': 1986
      },
      {
        'login': 'ju',
        'password': 'test',
        'firstName': 'Julien',
        'lastName': 'Reboul',
        'email': 'julien.reboul@bonitasoft.com',
        'birthYear': 1981
      }
    ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    $controller('MainCtrl', {
          '$scope': scope,
          'SERVER_BASE_URL': 'http://localhost:8080/poneyserver'
        });
  }));

  it('should attach a list of 2 users to the scope', inject(function () {
    httpBackend.expectGET('http://localhost:8080/poneyserver/users').respond(userList);
    //scope.list();
    httpBackend.flush();
    expect(scope.users.length).toBe(2);
    expect(scope.users).toEqual(userList);
  }));
});
