angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.tareas', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/tareas.html',
        controller: 'tareasCtrl'
      }
    }
  })

  .state('tabsController.circulares', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/circulares.html',
        controller: 'circularesCtrl'
      }
    }
  })

  .state('tabsController.eventos', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/eventos.html',
        controller: 'eventosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('colegiosApp', {
    url: '/page5',
    templateUrl: 'templates/colegiosApp.html',
    controller: 'colegiosAppCtrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.notas', {
    url: '/page7',
    views: {
      'tab6': {
        templateUrl: 'templates/notas.html',
        controller: 'notasCtrl'
      }
    }
  })

  .state('tabsController.calificaciones', {
    url: '/page8',
    views: {
      'tab7': {
        templateUrl: 'templates/calificaciones.html',
        controller: 'calificacionesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});