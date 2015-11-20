flapperControllers.controller('CommentsCtrl', ['$scope','$http','CommentService', function ($scope, $http, Comment) {
		$scope.comments = [];
		$scope.replyComment = [];
		var postId = parseInt(getURLParameter('id'));
		$scope.parentId = postId;
		$http({
				url: 'https://hacker-news.firebaseio.com/v0/item/' + postId + '.json?print=pretty',
				path: 'GET'
		})
		.then(function(item){
			var kids = item.data.kids;
			kids.forEach(function(id, index) {
			Comment.getComments(id)
				.then(function(comment){
					$scope.comments.push(comment.data);
					console.log(comment)
				});
			});
		});

		$scope.getReplyComment = function (kids){
			console.log("Got nested kids of replies")
			console.log(kids)
			
			kids.forEach(function (id, index) {
				Comment.getComments(id)
				.then(function(comment){
					$scope.replyComment.push(comment.data);
				});
			});			
		}

		function getURLParameter(name) {
 		 return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
		}
}]);

