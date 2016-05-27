var app = ons.bootstrap('myApp', ['onsen']);

app.factory('GetData', function($http) { 
    return $http.get('data/data.json');
});

// app.service('MsgService', ['$window', function(win) {
//    	var msgs = [];
//    	return function(msg) {
//     	ons.notification.alert({message: msg});
//    	};
// }]);



app.controller('HomeCtrl', function($scope, GetData){
	GetData.success(function(data) { 
	    $scope.basic_info = data.basicInfo;
	});
});

app.controller('EducationCtrl', function($scope, GetData){
	GetData.success(function(data) { 
	    $scope.all_edu_bg = data.educationBackground;
	});
});

app.controller('LanguageCtrl', function($scope, GetData){
	GetData.success(function(data) { 
	    $scope.languages = data.language;
	});
});

app.controller('AwardCtrl', function($scope, GetData){
	// GetData.success(function(data) { 
	//     $scope.languages = data.language;
	// });
});

app.controller('PublicationCtrl', function($scope, GetData){
	GetData.success(function(data) { 
	    $scope.publications = data.publications;
	});
});