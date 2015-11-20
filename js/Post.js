flapperServices.service('StoryService', ['$http', '$q', function($http, $q ){
	return {
		getStory: function(story_id) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'https://hacker-news.firebaseio.com/v0/item/' + story_id +'.json?print=pretty'
			})
			.then(
			function(story){
				deferred.resolve(story)
			},
			function(err){
				console.log("Damn some error");
				deferred.reject(err);
			});
		return deferred.promise;
		}	
	}
}])