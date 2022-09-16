let app = angular.module('myApp',[])

app.controller('formController', function($scope) {
    $scope.showMe = true
    $scope.showResult = false
    $scope.submitDisable = true
    $scope.profilePicture = null
    $scope.isValid = function() {
        $scope.submitDisable = birthInvalid($scope.date)
    }

    $scope.showResults = function () {
        $scope.showMe = false
        $scope.showResult = true
        $scope.userAge = getUserAge($scope.date)
        // the scope for results screen
        switch ($scope.myDropdown) {
            case "user1":
                $scope.profilePicture = "./imagenes/usuario1.png"
                break;
            case "user2":
                $scope.profilePicture = "./imagenes/usuario2.png"
                break;
            case "user3":
                $scope.profilePicture = "./imagenes/usuario3.png"
                break
        }
    }

    $scope.showForm = function () {
        $scope.showMe = true
        $scope.showResult = false
        $scope.myDropdown = ""
        $scope.profilePicture = ""
    }

})

// selector validation

function isEmpty(input) {
    if(input = null || input == ""){
        return true
    }
    return false;
}


// age validation

function birthInvalid(date){
    let dateParse = new Date(date);
    if(maxFilter(dateParse) == false ){
        if (AgeValid(dateParse) == true){
            return false
        }
    }
    return true
}

function AgeValid(date){
    let today = new Date()
    let operation = today.getFullYear() - date.getFullYear()
    if(operation >= 18){
        return true
    }
    return false
}

function getUserAge(date){
    let today = new Date()
    let operation = today.getFullYear() - date.getFullYear()
    return operation
}


function maxFilter(dates) {
    if (dates >= todayDate()) {
        return true
    }
    return false
}

function todayDate(){
    return new Date()
}