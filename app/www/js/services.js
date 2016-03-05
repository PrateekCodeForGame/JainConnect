angular.module('app.services', [])

.factory('Linkdata', [function(){
	var fac = {};
    fac.linkClicked = 0;

    fac.updateAddress = function(index) {
    	fac.linkClicked = index;
		console.log("......................", fac.linkClicked);
    },

    fac.contacts = [
  {
  	"id": 0,
    "name":"Aleshia Tomkiewicz",
    "address":"14 Taylor St",
    "phone":"01835-703597"
  },
  {
  	"id": 1,
    "name":"Evan Zigomalas",
    "address":"5 Binney St",
    "phone":"01937-864715"
  },
  {
  	"id": 2,
    "name":"France Andrade",
    "address":"8 Moor Place",
    "phone":"01347-368222"
  },
  {
  	"id": 3,
    "name":"Ulysses Mcwalters",
    "address":"505 Exeter Rd",
    "phone":"01912-771311"
  },
  {
  	"id": 4,
    "name":"Tyisha Veness",
    "address":"5396 Forth Street",
    "phone":"01547-429341"
  },
  {
  	"id": 5,
    "name":"Eric Rampy",
    "address":"9472 Lind St",
    "phone":"01969-886290"
  },
  {
  	"id": 6,
    "name":"Marg Grasmick",
    "address":"7457 Cowl St #70",
    "phone":"01865-582516"
  },
  {
  	"id": 7,
    "name":"Laquita Hisaw",
    "address":"20 Gloucester Pl #96",
    "phone":"01746-394243"
  },
  {
  	"id": 8,
    "name":"Lura Manzella",
    "address":"929 Augustine St",
    "phone":"01907-538509"
  },
  {
  	"id": 9,
    "name":"Yuette Klapec",
    "address":"45 Bradfield St #166",
    "phone":"01903-649460"
  },
  {
  	"id": 10,
    "name":"Fernanda Writer",
    "address":"620 Northampton St",
    "phone":"01630-202053"
  },
  {
  	"id": 11,
    "name":"Charlesetta Erm",
    "address":"5 Hygeia St",
    "phone":"01276-816806"
  },
  {
  	"id": 12,
    "name":"Corrinne Jaret",
    "address":"2150 Morley St",
    "phone":"01625-932209"
  },
  {
  	"id": 13,
    "name":"Niesha Bruch",
    "address":"24 Bolton St",
    "phone":"01874-856950"
  },
  {
  	"id": 14,
    "name":"Rueben Gastellum",
    "address":"4 Forrest St",
    "phone":"01976-755279"
  },
  {
  	"id": 15,
    "name":"Michell Throssell",
    "address":"89 Noon St",
    "phone":"01967-580851"
  },
  {
  	"id": 16,
    "name":"Edgar Kanne",
    "address":"99 Guthrie St",
    "phone":"01326-532337"
  },
  {
  	"id": 17,
    "name":"Dewitt Julio",
    "address":"7 Richmond St",
    "phone":"01253-528327"
  },
  {
  	"id": 18,
    "name":"Charisse Spinello",
    "address":"9165 Primrose St",
    "phone":"01719-831436"
  },
  {
  	"id": 19,
    "name":"Mee Lapinski",
    "address":"9 Pengwern St",
    "phone":"01578-287816"
  },
  {
  	"id": 20,
    "name":"Peter Gutierres",
    "address":"4410 Tarlton St",
    "phone":"01842-767201"
  },
  {
  	"id": 21,
    "name":"Octavio Salvadore",
    "address":"6949 Bourne St",
    "phone":"01552-709248"
  },
  {
  	"id": 22,
    "name":"Martha Teplica",
    "address":"148 Rembrandt St",
    "phone":"01677-684257"
  },
  {
  	"id": 23,
    "name":"Tamesha Veigel",
    "address":"2200 Nelson St #58",
    "phone":"01217-342071"
  },
  {
  	"id": 24,
    "name":"Tess Sitra",
    "address":"61 Rossett St",
    "phone":"01473-229124"
  },
  {
  	"id": 25,
    "name":"Leonard Kufner",
    "address":"41 Canning St",
    "phone":"01230-623547"
  },
  {
  	"id": 26,
    "name":"Svetlana Tauras",
    "address":"8289 Cadogan St",
    "phone":"01781-827317"
  },
  {
  	"id": 27,
    "name":"Pok Molaison",
    "address":"211 Hobart St",
    "phone":"01866-248660"
  },
  {
  	"id": 28,
    "name":"Augustine Growcock",
    "address":"114 Falkland St #8845",
    "phone":"01541-802635"
  },
  {
  	"id": 29,
    "name":"Karma Quarto",
    "address":"1 Birkett St",
    "phone":"01857-864722"
  },
  {
  	"id": 30,
    "name":"Reed Weisinger",
    "address":"5147 Blackstone St",
    "phone":"01243-678286"
  },
  {
  	"id": 31,
    "name":"German Zelaya",
    "address":"7 Shenstone St",
    "phone":"01400-269033"
  },
  {
  	"id": 32,
    "name":"Milly Savidge",
    "address":"129 Alexander Pope St",
    "phone":"01702-725589"
  },
  {
  	"id": 33,
    "name":"Luis Ear",
    "address":"2 Birchfield Rd",
    "phone":"01462-648669"
  },
  {
  	"id": 34,
    "name":"Ciara Cobbley",
    "address":"7523 Kempton Rd",
    "phone":"01235-647932"
  },
  {
  	"id": 35,
    "name":"Alethea Mould",
    "address":"6305 Elstow St",
    "phone":"01662-114247"
  },
  {
  	"id": 36,
    "name":"Margurite Loperfido",
    "address":"218 Greenbank Drive",
    "phone":"01407-866759"
  },
  {
  	"id": 37,
    "name":"Vernice Sperazza",
    "address":"8921 Forge St",
    "phone":"01822-563044"
  },
  {
  	"id": 38,
    "name":"Vicente Rawicki",
    "address":"3060 St Ambrose Grove #261",
    "phone":"01327-770774"
  },
  {
  	"id": 39,
    "name":"Craig Cua",
    "address":"8388 Bessemer St #5",
    "phone":"01483-418969"
  },
  {
  	"id": 40,
    "name":"Jenise Dulle",
    "address":"87 Pownall Sq",
    "phone":"01709-854691"
  },
  {
  	"id": 41,
    "name":"Marylin Cornelison",
    "address":"39 Wye St",
    "phone":"01609-882184"
  },
  {
  	"id": 42,
    "name":"Marget Gunst",
    "address":"2732 Bostock St #1",
    "phone":"01693-310794"
  },
  {
  	"id": 42,
    "name":"Annett Bunselmeyer",
    "address":"5562 Fairfield St #847",
    "phone":"01891-702579"
  },
  {
  	"id": 43,
    "name":"Kip Turziano",
    "address":"37 Meadow St",
    "phone":"01850-347846"
  },
  {
  	"id": 44,
    "name":"Melina Orizabal",
    "address":"3 Nevison St",
    "phone":"01420-307327"
  },
  {
  	"id": 45,
    "name":"Tina Clapham",
    "address":"5662 William Moult St",
    "phone":"01567-296442"
  },
  {
  	"id": 46,
    "name":"Luisa Devereux",
    "address":"3 North View #35",
    "phone":"01607-269930"
  },
  {
  	"id": 47,
    "name":"Pedro Aschoff",
    "address":"135 Opie St",
    "phone":"01386-981141"
  }
];
    return fac;
}])

.service('BlankService', [function(){

}]);

