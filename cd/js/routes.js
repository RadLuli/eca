angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu-lateral',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('cadastro', {
    url: '/login-cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('menu.preReqs', {
    url: '/aulas-pre-reqs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/preReqs.html',
        controller: 'preReqsCtrl'
      }
    }
  })

  .state('menu.programa', {
    url: '/aulas-programa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programa.html',
        controller: 'programaCtrl'
      }
    }
  })

  .state('menu.aula1', {
    url: '/aula-01',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula1.html',
        controller: 'aula1Ctrl'
      }
    }
  })

  .state('menu.aula2', {
    url: '/aula-02',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula2.html',
        controller: 'aula2Ctrl'
      }
    }
  })

  .state('menu.aula3', {
    url: '/aula-03',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula3.html',
        controller: 'aula3Ctrl'
      }
    }
  })

  .state('menu.aula4', {
    url: '/aula-04',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula4.html',
        controller: 'aula4Ctrl'
      }
    }
  })

  .state('menu.aula5', {
    url: '/aula-05',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula5.html',
        controller: 'aula5Ctrl'
      }
    }
  })

  .state('menu.aula6', {
    url: '/aula-06',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula6.html',
        controller: 'aula6Ctrl'
      }
    }
  })

  .state('menu.aula7', {
    url: '/aula-07',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula7.html',
        controller: 'aula7Ctrl'
      }
    }
  })

  .state('menu.aula8', {
    url: '/aula-08',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula8.html',
        controller: 'aula8Ctrl'
      }
    }
  })

  .state('menu.aula9', {
    url: '/aula-09',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula9.html',
        controller: 'aula9Ctrl'
      }
    }
  })

  .state('menu.aula10', {
    url: '/aula-10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula10.html',
        controller: 'aula10Ctrl'
      }
    }
  })

  .state('menu.aula11', {
    url: '/aula-11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula11.html',
        controller: 'aula11Ctrl'
      }
    }
  })

  .state('menu.aula12', {
    url: '/aula-12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula12.html',
        controller: 'aula12Ctrl'
      }
    }
  })

  .state('menu.aula13', {
    url: '/aula-13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula13.html',
        controller: 'aula13Ctrl'
      }
    }
  })

  .state('menu.aula14', {
    url: '/aula-14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula14.html',
        controller: 'aula14Ctrl'
      }
    }
  })

  .state('menu.aula15', {
    url: '/aula-15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aula15.html',
        controller: 'aula15Ctrl'
      }
    }
  })

  .state('menu.contato', {
    url: '/contato-luli',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('menu.local', {
    url: '/etc-local',
    views: {
      'side-menu21': {
        templateUrl: 'templates/local.html',
        controller: 'localCtrl'
      }
    }
  })

  .state('menu.pKN', {
    url: '/etc-pechakucha',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pKN.html',
        controller: 'pKNCtrl'
      }
    }
  })

  .state('menu.tarefas', {
    url: '/etc-tarefas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tarefas.html',
        controller: 'tarefasCtrl'
      }
    }
  })

  .state('menu.final', {
    url: '/trabalho-final',
    views: {
      'side-menu21': {
        templateUrl: 'templates/final.html',
        controller: 'finalCtrl'
      }
    }
  })

  .state('menu.links', {
    url: '/etc-links',
    views: {
      'side-menu21': {
        templateUrl: 'templates/links.html',
        controller: 'linksCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu-lateral/home')

  

});