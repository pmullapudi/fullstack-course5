(function () {

  angular.module("Module1Assignemt", [])
  .controller("Module1AssignemtController", Module1AssignemtController);

  Module1AssignemtController.$inject = ["$scope"];

  function Module1AssignemtController ($scope) {

    $scope.lunchItems = "";
    $scope.outputMessage = "";

    $scope.resetMessage = function () {
      $scope.outputMessage = "";
      $scope.messageStyle = {"color":"green"};
      $scope.boxStyle = {"border-color": ""};
    };

    $scope.checkLunchItems = function () {
      const numberOfItems = $scope.lunchItems.split(',').filter(el => el.trim()).length;

        if (numberOfItems === 0) {
        $scope.outputMessage = "Please enter data first";
        $scope.messageStyle = {"color":"red"};
        $scope.boxStyle = {"border-color": "red"};
      }
      else if(numberOfItems < 4) {
        $scope.outputMessage = " Enjoy! ";
        // $scope.messageStyle = {"color":"green"};
        $scope.boxStyle = {"border-color": "green"};
      }
      else {
        $scope.outputMessage = " Too much! ";
        // $scope.messageStyle = {"color":"green"};
        $scope.boxStyle = {"border-color": "green"};
      }

    };

  }
})();
