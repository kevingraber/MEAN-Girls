var app = angular.module('chirpApp', []);

app.controller('mainController', function($scope){

	$scope.posts = [];
	$scope.newPost = {created_by: '', text: '', created_at: ''};

	$scope.post = function() {
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {created_by: '', text: '', created_at: ''};
	};
	
});

app.controller('authController', function($scope){
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	// postService.getAll().success(function(data){
	// 	$scope.posts = data;
	// });

	$scope.login = function(){
		$scope.error_message = 'login request for ' + $scope.user.username
	};

	$scope.register = function(){
		$scope.error_message = 'register request for ' + $scope.user.username
	};

});