const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it('should save user with user object', () => {
        var email = 'darren@example.com';
        var password = "kdf80erAEFAfjif£4#*90";
        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});