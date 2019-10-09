var app = require('../src')
var chai = require('chai')
var request = require('supertest')

var expect = chai.expect

describe('API Working Test', function() {
  describe('#GET /api', function() {
    it('should get the text "Api is working" ', function(done) {
      request(app)
        .get('/api')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200)
          expect(res.body.text).to.equal('Api is working')
          done()
        })
    })
  })
})

describe('API Post Tests', function() {
  describe('#POST /api', function() {
    it('should get the object { text : } ', function(done) {
      request(app)
        .post('/api')
        .send({ text: 'test' })
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200)
          expect(res.body).to.have.all.keys('text')
          done()
        })
    })
  })
})