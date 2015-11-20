flapperApp
	.filter('formatDate',function(){
		return function(input){
			var date = new Date(input * 1000 );
			var	date1 = new Date(date.toGMTString());
			var date2 = new Date();

			var one_day=1000*60*60*24; 

		    // Convert both dates to milliseconds
	     	var date1_ms = date1.getTime();
		 	var date2_ms = date2.getTime();

			// Calculate the difference in milliseconds
			var difference_ms = date2_ms - date1_ms;
		  	//take out milliseconds
		  	difference_ms = difference_ms/1000;
		  	
		  	var seconds = Math.floor(difference_ms % 60);
		  	difference_ms = difference_ms/60; 
		  	
		  	var minutes = Math.floor(difference_ms % 60);
		  	difference_ms = difference_ms/60; 
		  	
		  	var hours = Math.floor(difference_ms % 24);  
		  	
		  	var days = Math.floor(difference_ms/24);
		  	
		  	if(days < 1 && hours > 0 ) {
		  		return hours + ' hours ago';
		  	}
		  	else if(hours < 1) {
		  		return minutes+' minutes';
		  	} 
		  	else {
		  		return seconds+' seconds ago';
		  	} 
		}
	})

//filter to replace symbols to special charaters
flapperApp
	.filter('filterText',function(){
		return function (comment) {
			return comment.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/&#x27/g,"'");
		} 
	});
