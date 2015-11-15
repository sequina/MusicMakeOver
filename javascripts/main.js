var app = angular.module("MusicApp", ["ngRoute", "firebase"]);

app.config (['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/songs/list', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongListCtrl'
    })
    .when('/songs/new', {
      templateUrl: 'partials/song-form.html',
      controller: 'AddSongCtrl'
        })
    }]);

//loading songs
app.controller("SongListCtrl",
   [
    "$scope",
    "$firebaseArray",
      function($scope, $firebaseArray) {
        var ref = new Firebase("https://music-application.firebaseio.com/songs");
        $scope.songList = $firebaseArray(ref);
        $scope.newSong = {};
      }
   ]
)


app.controller("AddSongCtrl",["$scope","$firebaseArray",
      function($scope, $firebaseArray) {
        var fireBaseRef = new Firebase("https://music-application.firebaseio.com/songs")

        $scope.songList = $firebaseArray(fireBaseRef);
        $scope.newSong = { title: "", album: "", year: "", artist: ""};

          $scope.addSong = function() {
            $scope.songs.$add({
              artist: $scope.newSong.artist,
              name: $scope.newSong.title,
              album: $scope.newSong.album
              });
          }
}]);


// app.factory("song_service", function($http,$q) {
//   var getSongData = [];

//   function init() {
//     return $q(function(resolve, reject) {

//     $http
//     .get('./data/songs.json')
//     .success(
//       function(objectFromJSONFile) {
//         getSongData = objectFromJSONFile.songs;
//         resolve(getSongData)
//         },
//         function(error) {
//         reject(error);
//       });
//     };
//   });
// });

//   init();

// function grabSongs () {
//   return getSongData;
// };

// function grabSingleSong(id) {
//   return getSongData.filter(function(oneSong) {
//     return song.id === id;
//   })[0];
// };

// function addSong(songObj) {
//   getSongData.push(songObj);
//   return getSongData;
// };

  // return {
  //   grabSongs: grabSongs,
  //   grabSingleSong: grabSingleSong,
  //   addSong: addSong
  // };
