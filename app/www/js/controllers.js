angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('contactsCtrl', function($scope) {

})
   
.controller('doctorsCtrl', function($scope) {

})
   
.controller('bhawanCtrl', function($scope) {

})
   
.controller('restaurantsCtrl', function($scope) {

})
   
.controller('peopleCtrl', function($scope) {

})
   
.controller('addressDoctorsCtrl', function($scope) {

})
   
.controller('addressBhawanCtrl', function($scope) {

})
   
.controller('addressRestaurantsCtrl', function($scope) {

})
   
.controller('addressPeopleCtrl', function($scope) {

})
   
.controller('infoCtrl', function($scope, Linkdata) {
	$scope.contacts = Linkdata.contacts;
	$scope.showContacts = Linkdata.contacts;

	$scope.searchName = function(keyword) {
		$scope.showContacts = [];
		for (var i = 0; i < $scope.contacts.length; i++){
			if( $scope.contacts[i].name.toLowerCase().indexOf(keyword) >= 0 ){
				$scope.showContacts.push($scope.contacts[i]);
			}
		}
	};
})
   
.controller('gasAgencyCtrl', function($scope) {

})
   
.controller('completeInfoCtrl', function($scope) {

})
   
.controller('addressGasAgencyCtrl', function($scope) {

})
   
.controller('informationCtrl', function($scope) {

})
   
.controller('completeInformationCtrl', function($scope) {

})
   
.controller('hotelsCtrl', function($scope) {

})
   
.controller('addressHotelsCtrl', function($scope) {

})
 