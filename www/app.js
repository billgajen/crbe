angular.module('picUploader', ['ionic', 'starter.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })
    // the select image tab has its own child nav-view and history
    .state('tab.select-image', {
      url: '/select-image',
      views: {
        'select-tab': {
          templateUrl: 'select-image.html',
          controller: 'SelectPicCtrl'
        }
      }
    })
    .state('crop-image', {
      url: '/crop-image/:imageURI',
      templateUrl: 'crop-image.html',
      controller: 'CropImgCtrl'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/select-image');
}); 
