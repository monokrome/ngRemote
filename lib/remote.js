var exampleController = function ($scope, $window) {
  $scope.href = $window.location.href;
};


module.exports.setup = function (angular) {
// Component declarations
angular.module('remote', [])
  .controller('exampleController', ['$scope', '$window', exampleController]);
};
