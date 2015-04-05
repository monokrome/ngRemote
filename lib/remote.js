var remoteController = {
  template: '<div>This is a remote controller.</div>',
};


module.exports.setup = function (angular) {
// Component declarations
angular.module('remote', [])
  .directive('mk', function () { return remoteController; });
};
