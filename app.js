/**
 * Created by phn on 2016/2/2.
 */

var app = angular.module("webApp", ["tm.pagination", "ngRoute", "ngSanitize",'ui.bootstrap', "ui.router", "ngFileUpload"]);
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');
});
app.config(function ($routeProvider) {
    $routeProvider.when("/index", {
        templateUrl: "modules/index/main.view.html",
        controller: 'IndexController'
    }).when("/test-case",{
        templateUrl: "modules/test/test.view.html",
        controller: 'TestCaseController'
    }).when("/test-case/:id",{
        templateUrl: "modules/test/test.detail.view.html",
        controller: 'TestCaseDetailController'
    });

    $routeProvider.otherwise({
        templateUrl: "modules/index/main.view.html"
    });
});
app.run(function ($rootScope, $location, $window) {
    //$rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
    //});
});
app.controller("webAppCtrl", function ($scope, $rootScope, $window) {

    console.log("老子进来了，现在是9-11 3:25 我睡不着！")
});


