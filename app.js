var app = angular.module("myApp", []);
app.service("myService", function () {
    this.students = [];
 
    this.addS = function (name) {
        this.students.push(name);
        

    }

this.remove = function (i) {
        this.students.splice(i,1);
        

    }

});

app.controller("ctrl", function ($scope, myService) {

    $scope.students = myService.students;
     


    $scope.addS = function () {
        var stdname = $scope.name;
       
        myService.addS(stdname);
      

    }
     $scope.remove = function (i) {
    
  myService.remove(i);
    }
     
});