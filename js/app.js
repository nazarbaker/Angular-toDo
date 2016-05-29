angular.module('myapp', [])

.controller('ToDoCtrl', function($scope) {
  $scope.toDolist = [
    {
      "text": "learn angular",
      "status": false
    },
    {
      "text": "learn mongodb",
      "status": false
    }
  ];

  $scope.total = function(){
    return $scope.toDolist.length;
  };

  $scope.addTask = function() {
    var task = $scope.todo;
    $scope.toDolist.push({
      "text": task,
      "status": false
    })
    $scope.todo = "";
  };

  $scope.clear = function() {
    $scope.toDolist = _.filter($scope.toDolist, function(item) {
      return !item.status;
    });
  }
})
