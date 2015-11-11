var app = angular.module("MusicApp", [])

app.controller("MusicCtrl", function($scope, $rootScope) {
    $scope.title = "Welcome to your Music App"
    $rootScope.hello ="i am everywhere"

    $scope.artists = [
      {name:"Taylor Swift"},
      {name:"The Weekend"},
      {name:"Demi Lovato"},
      {name:"Carrie Underwood"},
      {name:"Rihanna"},
      {name:"Eminem"},
      {name:"Christina Aguilera"}
    ];

$scope.killMusicArtists=function(artist) {
      var musicIndex = $scope.artists.indexOf(artist);

    if(musicIndex>=0) {
      $scope.artists.splice(musicIndex, 1)
    };
  };
})
