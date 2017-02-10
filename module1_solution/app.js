(function () {

  angular.module("Module1Assignemt", [])
  .controller("Module1AssignemtController", Module1AssignemtController);

  Module1AssignemtController.$inject = ["$scope"];
  function Module1AssignemtController ($scope) {

    $scope.lunchItems = "";
    $scope.outPutMessage = "";

    $scope.resetMessage = function () {
      $scope.outPutMessage = "";
    };

    $scope.checkLunchItems = function () {
      var lunitemsArray = $scope.lunchItems.split(',');

      if ($scope.lunchItems.length == 0) {
        $scope.outPutMessage = "Please enter data first";
      }
      else if(lunitemsArray.length <= 3) {
          $scope.outPutMessage = "Enjoy!";
      }
      else {
        $scope.outPutMessage = "Too much!";
      }

    };

  }
})();
