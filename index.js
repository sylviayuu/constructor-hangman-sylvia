//import the request package 
var request = require ("request");
var userYear = +process.argv[2];
request("http://www.omdbapi.com/?apikey=trilogy&t=Game of Thrones&Season=1&Episode=1", 
	function (error, response, body){
		const data = JSON.parse(body)
		const year = +data.Year;
		console.log(data.Title);
		console.log(year);

		if (userYear > year){
			console.log("before your time");
		} else{
			console.log("you old as hell");
		}

}
);