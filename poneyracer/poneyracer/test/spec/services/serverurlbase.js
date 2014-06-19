'use strict';

describe('Service: serverUrlBase', function () {

  // load the service's module
  beforeEach(module('services'));

  // instantiate service
  var serverUrlBase;
  beforeEach(inject(function (_SERVER_BASE_URL_) {
    serverUrlBase = _SERVER_BASE_URL_;
  }));

  it('should do something', function () {
    expect(!!serverUrlBase).toBe(true);
  });

});
