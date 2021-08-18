var request = require('request');
var expect = require('chai').expect;

describe('POST method', function() {
    it('Create order endpoint', function(done) {
        request('http://localhost:8080/api/orders', function(error, response, body) {
            done();
        });
    });
});

describe('GET method', function() {
    it('Get orders endpoint', function(done) {
        request('http://localhost:8080/api/orders', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});