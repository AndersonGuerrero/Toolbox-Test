var app = require("../src");
var chai = require("chai");
var request = require("supertest");

var expect = chai.expect;

describe("API Working Test", function() {
  describe("#GET /api", function() {
    it('should get the text "Api is working" ', function(done) {
      request(app)
        .get("/api")
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.text).to.equal("Api is working");
          expect(res.body).to.be.empty;
          done();
        });
    });
  });
});

describe("API Contact Tests", function() {
  describe("#GET /api/contacto", function() {
    it("should get the object {text : } ", function(done) {
      request(app)
        .get("/api/contacto")
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.all.keys("text");
          done();
        });
    });
  });
});

describe("API Briefcase Tests", function() {
  describe("#GET /api/portafolio", function() {
    it("should get the object { text : } ", function(done) {
      request(app)
        .get("/api/portafolio")
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.all.keys("text");
          done();
        });
    });
  });
});

describe("API about Tests", function() {
  describe("#GET /api/acerca", function() {
    it("should get the object { text : } ", function(done) {
      request(app)
        .get("/api/acerca")
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.all.keys("text");
          done();
        });
    });
  });
});