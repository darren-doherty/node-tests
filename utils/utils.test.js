const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {

        it('should add two numbers', () => {
            var result = utils.add(33, 11);
        
            expect(result).toBe(44).toBeA('number');
        });
        
        it('should async add two numbers', (done) => {
            utils.asyncAdd(3, 4, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    
    describe('#square', () => {

        it('should square a number', () => {
            var result = utils.square(10);
        
            expect(result).toBe(100).toBeA('number');
        });
        
        it('should async square a number', (done) => {
            utils.asyncSquare(5, (square) => {
                expect(square).toBe(25).toBeA('number');
                done();
            });
        });
    });

    describe('#name', () => {
        
        it('should set firstName and lastName', () => {
            var user = {};
            var result = utils.setName(user, 'Darren Doherty');

            expect(result).toInclude({ firstName: 'Darren', lastName: 'Doherty' }).toBeA('object');
        });
    });
});


