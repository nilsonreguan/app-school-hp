// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.run(function($ionicPlatform, $cordovaPush, $rootScope) {
  $ionicPlatform.ready(function() {     
    //PUT IN PUSH
    if(ionic.Platform.isWebView()) {
         
        var androidConfig = {
            "senderID":"469201422848",
        };
         
        androidConfig.ecb = "window.onNotification"
         
        window.onNotification = function(e) {
          switch( e.event )
          {
              case 'registered':
                  if ( e.regid.length > 0 )
                  {
                      //DEVICE REGISTRATION ID
                      alert(e.regid);
                  }
                  break;
 
              case 'message':
                  alert(e.message);
                   
                  //We send an angular broadcast notification
                  var elem = angular.element(document.querySelector('[ng-app]'));
                  var rootScope = elem.injector().get('$rootScope');
                  rootScope.$broadcast('pushNotificationReceived', e);
                  break;
 
              case 'error':
                  alert(e.msg);
                  break;
 
              default:
                    alert('unknown');
                  break;
          }
        };
         
        //DEVICE REGISTER
        $cordovaPush.register(androidConfig).then(function(result) {
            alert(result);
          }, function(err) {
              alert(err);
          });
           
        $rootScope.$on('pushNotificationReceived', function(event, notification) {
            //WE RECEIVE THE BROADCAST
              alert("received");
          });
    }
  });
})