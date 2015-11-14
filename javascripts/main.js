var app = angular.module("MusicApp", ["ngRoute"], ["firebase"]);

app.config (['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/songs/list', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongListCtrl'
    })
    .when('/songs/new', {
      templateUrl: 'partials/song-form.html',
      controller: 'SongCtrl'
        })
    }]);

//loading songs

app.controller("SongListCtrl",
  // Notice the new syntax. Since I'm including one of my own dependencies
  // then I need to include each one in array of strings (just like RequireJS)
  // and have a matching argument in the callback function.
  [
    "$scope", "$q", "$http","song_service","$firebaseArray",
    function($scope, $q,$http,$firebaseArray) {

      var ref = new Firebase("https://music-application.firebaseio.com");

      $scope.songList = $firebaseArray[ref];
      // $scope.song_list = simple_songs.getSongs();  // Returns all songs
        return $q(function(resolve, reject) {
        $http
          .get('./javascripts/songs.json')
          .success(
            function(mySongs) {
              $scope.songList = mySongs.songs;
              resolve(mySongs.songs);
            },function(error) {
              reject(error);
            }
          );
      });
    }
  ]
);
app.controller("artistCtrl",
  [
    "$scope", "$q", "$http","song_service",
    function($scope, $q,$http) {
      $scope.songList = [];
      // $scope.song_list = simple_songs.getSongs();  // Returns all songs
        return $q(function(resolve, reject) {
        // $http
        //   .get('./javascripts/songs.json')
        //   .success(
        //     function(myArtists) {
        //       $scope.songList = myArtists.songs;
        //       resolve(myArtists.songs);
        //     },function(error) {
        //       reject(error);
            }
          );
      });
    }
  ]
);

app.factory("song_service", function($http,$q) {
  var getSongData = function() {
    return $q(function(resolve,reject) {

    }
    $http
    .get('./data/songs.json')
    .success(
      function(objectFromJSONFile) {
        resolve(objectFromJSONFile.songs);
        },function(error){
        reject(error);
      }
    };
  };
};






// app.controller("SongListCtrl", function($scope, $rootScope,$q,$http) {
//     $scope.title = "Welcome to your Music App";
//     $rootScope.hello ="i am everywhere";

//     // $scope.artists = [
//     //   {name:"Taylor Swift"},
//     //   {name:"The Weekend"},
//     //   {name:"Demi Lovato"},
//     //   {name:"Carrie Underwood"},
//     //   {name:"Rihanna"},
//     //   {name:"Eminem"},
//     //   {name:"Christina Aguilera"}
//     // ];

// $scope.killMusicArtists=function(artist) {
//       var musicIndex = $scope.artists.indexOf(artist);

//     if(musicIndex>=0) {
//       $scope.artists.splice(musicIndex, 1)
//     };
//   };
// })
