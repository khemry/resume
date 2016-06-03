var app = ons.bootstrap('myApp', ['onsen']);

app.factory('GetData', function($http) { 
    return $http.get('data/data.json');
});

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

app.controller('AwardsCtrl', function($scope, GetData){
	GetData.success(function(data) { 
	    $scope.awards = data.awards_scholarships;
	});
});

app.controller('PublicationCtrl', function($scope, GetData){
	GetData.success(function(data) { 
	    $scope.publications = data.publications;
	});
});

app.controller('ExperiencesCtrl', function($scope, GetData){
	GetData.success(function(data) { 
	    $scope.experiences = data.experiences;
	});
});

app.controller('InterestsCtrl', function($scope, GetData){
	GetData.success(function(data) { 
	    $scope.interests = data.interests;
	});
});