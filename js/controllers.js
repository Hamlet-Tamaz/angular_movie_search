
app.controller('mainController', function($scope, $http) {
	
	$scope.view = {};


	$scope.searchMovie = function() {
		$http.get('http://www.omdbapi.com/?s=' + $scope.movieName).then(function(info){
			$scope.view.movieData = info;
			$scope.view.movieList = info.data.Search
			// console.log($scope.view.movieList[0]);
		});
	};

	// $scope.searchMovieId = function(movie) {
	// 	// debugger
	// 	$http.get('http://www.omdbapi.com/?i=' + movie.imdbID).then(function(info) {
	// 		$scope.view.movie = info;
	// 		console.log(info);
	// 	})
	// }
});


app.controller('homeController', function($scope, $http) {

	$scope.view = {};


});

app.controller('showController', function($scope, $http, $routeParams) {
	
	$scope.view = {};

	console.log($routeParams)

	$http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function(info) {
		$scope.view.movie = info.data;

		$scope.view.movie.other = {};

		$scope.view.movie.other.title = info.data.Title;
		$scope.view.movie.other.poster = info.data.Poster;
		
		// const {Title,Poster,Plot} = info.data

		delete info.data.Title
		delete info.data.Poster
		delete info.data.Plot
		delete info.data.imdbID
		delete info.data.Type
		delete info.data.Response

		console.log(info);
	})



})