flapperControllers.controller('StoryCtrl', ['$scope','$http','StoryService', function ($scope, $http, Story) {
	var storyIds = undefined;
	$scope.topStories = [];
	var all = [];
	var __index = 0;
	$scope.loading = true;
	$http({
			method: 'GET',
			url: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
		}).then(
		function(stories){
			console.log("Got the data");
			storyIds = stories.data;
			storyIds.forEach(function (id, index) {
			
		   	Story.getStory(id)
				.then(function(story){
					all.push(story.data);
					if(all.length == 15){
						$scope.$emit("gotit");						
					}					
				});
			});			
		},
		function(err){
			console.log("Error occured");
			console.log(err);
		});
		$scope.$on("gotit",function(){
			console.log("gotit ",all);
			$scope.topStories = all.slice(0,14);
			$scope.loading = false;
			console.log($scope.topStories)
			__index++;
		});
}]);

var showForm = function(elem){
		$(elem).parent().next().slideToggle();
}