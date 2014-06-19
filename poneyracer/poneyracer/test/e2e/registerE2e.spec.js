describe('Register', function() {
  it('should display the login field', function() {
    browser.get('#register');

    var loginLabel = $('#login-label');
    var login = $('#login');
    var loginWarning = $('#login-warning');

    // when field is empty
    expect(loginLabel.getText()).toBe('Login');
    expect(loginLabel.getAttribute('class')).toBe('');
    expect(login.getAttribute('class')).not.toContain('ng-invalid-minlength');
    expect(login.getCssValue('border')).toContain('');
    expect(loginWarning.isDisplayed()).toBeFalsy();

    // typing one character should trigger invalid-length
    login.sendKeys('c');

    // it should now be invalid
    // with label red
    expect(loginLabel.getAttribute('class')).toBe('red');
    // and field with orange border
    expect(login.getAttribute('class')).toContain('ng-invalid-minlength');
    expect(login.getCssValue('border')).toContain('1px solid rgb(102, 81, 44)');
    // and warning displayed
    expect(loginWarning.isDisplayed()).toBeTruthy();
    expect(loginWarning.getText()).toBe('Your login should have at least two characters');
  });

  it('should display the birthYear field', function() {
    browser.get('#register');

    var birthYearLabel = $('#label-birthYear');
    var birthYear = $('#birthYear');
    var birthYearError = $('#label-error-birthYear');
    var birthYearParent = $('#group-birthYear');

    // when field is empty
    expect(birthYearLabel.getText()).toBe('Date Of Birth');
    expect(birthYearLabel.getAttribute('class')).toBe('');
    expect(birthYear.getCssValue('border')).toContain('');
    expect(birthYearError.isDisplayed()).toBeFalsy();

    // typing one character should trigger invalid-length
    birthYear.sendKeys('2000');

    // it should now be invalid
    // with label red
    expect(birthYearParent.getAttribute('class')).toBe('form-group has-feedback has-error');
    // and field with orange border
    expect(birthYear.getCssValue('border')).toContain('1px solid rgb(132, 53, 52)');
    // and warning displayed
    expect(birthYearError.isDisplayed()).toBeTruthy();
    expect(birthYearError.getText()).toBe('You have to be a grown-up to bet on poneys');

    birthYear.clear();
    birthYear.sendKeys('1981');
    expect(birthYearParent.getAttribute('class')).not.toContain('has-error');
  });
});
