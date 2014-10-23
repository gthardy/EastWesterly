app.controller('contactController', function($scope){
	$scope.Title = "Contact";

    $scope.Name = "Jackson Hardy";
    $scope.Email = "jackson.hardy@averware.com";
    $scope.Phone = "999-999-9999";
    $scope.BestContactTime = "Afternoon 5PM";
    $scope.Comments = "This website is totally awesome!";

    $scope.SendEmail = function(){
        toastr.success("You will be hearing from us shortly", "Email Sent");
    };
});