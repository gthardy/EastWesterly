app.controller('contactController', function($scope){
	$scope.Title = "Contact";

    $scope.Name = "Jackson Hardy";
    $scope.Email = "jackson.hardy@averware.com";
    $scope.Phone = "999-999-9999";
    $scope.BestContactTime = "Afternoon 5PM";

    $scope.SendEmail = function(){
        toastr.success("Email has been sent!", "you will be hearing form us shortly!");
    };

});