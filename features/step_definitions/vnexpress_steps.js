'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');
var assert = require('cucumber-assert');

defineSupportCode(function({When, Then}) {

  When(/^I go to "([^"]*)"$/, function (txtWeb, next) {
    this.driver.get(txtWeb)
    .then(function() {
      next();
    });
  });

  When(/^I got classname "([^"]*)"$/, function (txtWeb, next) {
    this.driver.findElement(By.className(txtWeb))
    .then(function() {
      next();
    });
  });

  When(/^I click on classname "([^"]*)"$/, function (txtWeb, next) {
    var element =  this.driver.findElement(By.className(txtWeb));
    element.click().then(function() {
      next();
    });
  });

  Then("I compare text", function (next) {

    expect('Tin tức online').to.include('Tin tức');
    next();
  });

});
