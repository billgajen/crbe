angular.module('starter.controllers', ['ionic'])
// A simple controller that fetches a list of data from a service
.controller('SelectPicCtrl', function($scope, $state) {
  $scope.launchPhotoLibrary = function() {
    if (navigator.camera) {
      navigator.camera.getPicture( cameraSuccess, cameraError,
                                 { sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY } );
    } else {
      $scope.imagestring = encodeURIComponent("http://lorempixel.com/200/400/");
    }
    $state.go('crop-image', {imageURI:$scope.imagestring});
  };
  function cameraSuccess(imageURI) {
    // hack until cordova 3.5.0 is released
    if (imageURI.substring(0,21)=="content://com.android") {
      var photo_split=imageURI.split("%3A");
      imageURI="content://media/external/images/media/"+photo_split[1];
    }
    $scope.image.src = imageURI;
  }
  function cameraError(message) {
    alert('Failed because: ' + message);
  }
})
// controller for image cropping view
.controller('CropImgCtrl', function($scope, $stateParams) {
  $scope.imagestring = decodeURIComponent($stateParams.imageURI);
}); 