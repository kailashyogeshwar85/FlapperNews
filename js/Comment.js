flapperServices.service('CommentService',['$http', '$q', function ($http, $q ){
	return {
		getComments: function(kidId) {
			var deffered = $q.defer();
			$http({
				url:'https://hacker-news.firebaseio.com/v0/item/' + kidId + '.json?print=pretty',
				path:'GET'
			})
			.then(
			function(comment){
				deffered.resolve(comment);
			},
			function(err){
				deffered.reject(err)
			});
		return deffered.promise;	
		}
	}
}]);