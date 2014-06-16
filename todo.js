
function TodoCtrl($scope){
  $scope.totalTodos = 4;

  $scope.todos = [
    {text: 'Do some work tonight', done:false},
    {text: 'Go work out at the gym', done:false},
    {text: 'Learn javascript', done:false},
    {text: 'Walk the dog', done:false},
    {text: 'Rent a movie', done:false}
    ];

  $scope.getTotalTodos = function(){
    return $scope.todos.length
  }

  $scope.clearCompleted = function () {
    $scope.todos = _.filter($scope.todos, function(todo){
      return !todo.done;
    });
  }
  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  }
}
