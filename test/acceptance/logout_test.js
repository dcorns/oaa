'use strict';
/*global casper*/

casper.test.begin('loginout', 3, function suite(test) {

  casper.start('http://localhost:3000/index.html', function() {
     test.assertHttpStatus(200);
  });

  casper.then(function(){
    test.assertExists('#btnlogout');
    test.assertExists('#btnlogin');
  });

  casper.then(function() {
    // Click on 1st result link
    this.click('#btnlogin');
  });

  casper.then(function() {
    console.log('clicked btnlogin, new location is ' + this.getCurrentUrl());
  });

  casper.run(function(){
    test.done();
  });

});