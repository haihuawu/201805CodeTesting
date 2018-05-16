var app = angular.module('todoapp', []);

app.controller('appCtrl', function($scope, $http) {
    const baseUrl = "http://127.0.0.1:8000/";

    $scope.statuses = ["complete", "pending"];
    $scope.status = "pending";
    /**
     * TODO:
     * 1.use $http to call backend rest API
     * GET todos(Which is corresponding to index() function inside TodoController)(AJAX CALL)
     * 2.store all data in todolist variable, then use ng-repeat to show a list(using ul li tag) in index.html
     */
    getList();

    function getList() {
        $http({
            method: "GET",
            url: baseUrl+"todos",
            params: {}
        }).then(response => $scope.todoList = response.data)
    }

    /**
     * TODO:
     * 1.Each task can be delete. when user click(need to create event handler) on that task.
     * 2.Send delete request to rest API to delete it in mysql database.(AJAX CALL)
     */
    $scope.deleteTask = id => {
        $http({
            method: "DELETE",
            url: baseUrl+"todos/"+id,
            params: {}
        }).then(getList());
    };

    /**
     * TODO:
     * 1.create a form under the todo list
     * 2.user create a new todo task; send data to backend rest API
     * 3.store the new todo task in database and return the new list
     * 4.update $scope.todoList with the API returned new list
     */
    $scope.createTask = () => {
        if (!$scope.status || !$scope.task) {
            return;
        }
        const params = {
            status: $scope.status,
            task: $scope.task
        }
        $http({
            method: "POST",
            url: baseUrl+"todos",
            params: params
        }).then(getList());
    }

    /**
     * TODO:
     * update status
    */
    $scope.updateTask = id => {
        if (!$scope.status || !$scope.task) {
            return;
        }

        if ($scope.status == "pending") {
            $scope.status = "complete";
        }

        const params = {
            status: $scope.status,
            task: $scope.task
        }

        $http({
            method: "PUT",
            url: baseUrl+"todos/"+id,
            params: params
        }).then(getList());
    }

    /**
     * optional tasks:
     * 1.edit todo task
     */


});