var app = angular.module('i8n', ['pascalprecht.translate']);

app.controller('MainCtrl', function($scope,$translate) {
   $scope.changeLanguage = function(language) {
        $translate.use(language);
     
    };


})
.config(function($translateProvider) {
    //Globalisation
    $translateProvider.useStaticFilesLoader({
        prefix: 'i8n/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage("en");
    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.fallbackLanguage("en");
    
});

