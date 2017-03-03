(function () {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

//shortNameList
  // SignupController.$inject = [];
  function SignupController() {

    var signupCtrl = this;

    // signupCtrl.shortNameList = shortNameList;

    signupCtrl.submit = function () {
      signupCtrl.completed = true;
    };





  }
})();
