angular.module('starter', ['ionic'])
 
.controller('AppCtrl', function($scope) {
  //Text to Speech
  $scope.data = {
    speechText: ''
  };
  $scope.speakText = function() {
    TTS.speak({
           text: $scope.data.speechText,
           locale: 'en-GB',
           rate: 1.5
       }, function () {
           // Do Something after success
       }, function (reason) {
           // Handle the error case
       });
  };
  //Speech to Text
  $scope.recognizedText = '';
  $scope.record = function() {
    var recognition = new SpeechRecognition();
    recognition.onresult = function(event) {
        if (event.results.length > 0) {
            $scope.recognizedText = event.results[0][0].transcript;
            $scope.$apply()
        }
    };
    recognition.start();
  }; 

  $scope.open_win = function() {
      window.open("https://www.baidu.com/s?wd=" + $scope.recognizedText);
  }; 
});