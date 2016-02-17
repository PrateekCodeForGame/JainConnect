angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
        
      
    
      
        
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'templates/contacts.html',
      controller: 'contactsCtrl'
    })
        
      
    
      
        
    .state('doctors', {
      url: '/doctors',
      templateUrl: 'templates/doctors.html',
      controller: 'doctorsCtrl'
    })
        
      
    
      
        
    .state('bhawan', {
      url: '/bhawan',
      templateUrl: 'templates/bhawan.html',
      controller: 'bhawanCtrl'
    })
        
      
    
      
        
    .state('restaurants', {
      url: '/restaurants',
      templateUrl: 'templates/restaurants.html',
      controller: 'restaurantsCtrl'
    })
        
      
    
      
        
    .state('people', {
      url: '/people',
      templateUrl: 'templates/people.html',
      controller: 'peopleCtrl'
    })
        
      
    
      
        
    .state('addressDoctors', {
      url: '/addressdoctors',
      templateUrl: 'templates/addressDoctors.html',
      controller: 'addressDoctorsCtrl'
    })
        
      
    
      
        
    .state('addressBhawan', {
      url: '/addressbhawan',
      templateUrl: 'templates/addressBhawan.html',
      controller: 'addressBhawanCtrl'
    })
        
      
    
      
        
    .state('addressRestaurants', {
      url: '/addressrestaurants',
      templateUrl: 'templates/addressRestaurants.html',
      controller: 'addressRestaurantsCtrl'
    })
        
      
    
      
        
    .state('addressPeople', {
      url: '/addresspeople',
      templateUrl: 'templates/addressPeople.html',
      controller: 'addressPeopleCtrl'
    })
        
      
    
      
        
    .state('info', {
      url: '/sdjp',
      templateUrl: 'templates/info.html',
      controller: 'infoCtrl'
    })
        
      
    
      
        
    .state('gasAgency', {
      url: '/gasagency',
      templateUrl: 'templates/gasAgency.html',
      controller: 'gasAgencyCtrl'
    })
        
      
    
      
        
    .state('completeInfo', {
      url: '/aresssdjp',
      templateUrl: 'templates/completeInfo.html',
      controller: 'completeInfoCtrl'
    })
        
      
    
      
        
    .state('addressGasAgency', {
      url: '/addressgasagency',
      templateUrl: 'templates/addressGasAgency.html',
      controller: 'addressGasAgencyCtrl'
    })
        
      
    
      
        
    .state('information', {
      url: '/smmp',
      templateUrl: 'templates/information.html',
      controller: 'informationCtrl'
    })
        
      
    
      
        
    .state('completeInformation', {
      url: '/addresssmmp',
      templateUrl: 'templates/completeInformation.html',
      controller: 'completeInformationCtrl'
    })
        
      
    
      
        
    .state('hotels', {
      url: '/hotels',
      templateUrl: 'templates/hotels.html',
      controller: 'hotelsCtrl'
    })
        
      
    
      
        
    .state('addressHotels', {
      url: '/addresshotels',
      templateUrl: 'templates/addressHotels.html',
      controller: 'addressHotelsCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});