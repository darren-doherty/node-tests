const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

    describe('GET /', () => {

        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello world')
                .end(done);
        });
    });

    describe('GET /404', () => {

        it('should return 404 response', (done) => {
            request(app)
                .get('/404')
                .expect(404)
                .expect({
                    error: 'Page not found'
                })
                .end(done);
        });
    });

    describe('GET /users', () => {

        it('should return an array of users that contains user "Darren Doherty"', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Darren Doherty',
                        age: 34
                    });
                })
                .end(done);
        });
    });

});
