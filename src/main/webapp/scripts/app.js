'use strict';

nv.dev = false;
var pinpointApp = angular.module('pinpointApp', [ 'ngRoute', 'ngResource', 'webStorageModule' ]);

pinpointApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix(''); // 해쉬뱅을 사용 안할 수 있다.
    $routeProvider.when('/main', {
        templateUrl: 'views/ready.html',
        controller: 'MainCtrl'
    }).when('/main/:application/:period/:queryEndTime', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).when('/filteredMap/:application/:period/:queryEndTime/:filter', {
        templateUrl: 'views/filteredMap.html',
        controller: 'FilteredMapCtrl'
    }).when('/inspecator/:pplication/:period/:queryEndTime', {
        templateUrl: 'views/inspector.html',
        controller: 'InspectorCtrl'
    }).when('/inspector/:application/:period/:queryEndTime/:agentId', {
        templateUrl: 'views/inspector.html',
        controller: 'InspectorCtrl'
    }).when('/transactionList', {
        templateUrl: 'views/transactionList.html',
        controller: 'TransactionListCtrl'
    }).when('/transactionDetail', {
        templateUrl: 'views/readyForTransactionDetail.html',
        controller: 'TransactionDetailCtrl'
    }).when('/transactionDetail/:traceId/:focusTimestamp', {
        templateUrl: 'views/transactionDetail.html',
        controller: 'TransactionDetailCtrl'
    }).when('/transactionView/:agentId/:traceId/:focusTimestamp', {
        templateUrl: 'views/transactionView.html',
        controller: 'TransactionViewCtrl'
    }).when('/scatterFullScreenMode/:application/:period/:queryEndTime', {
        templateUrl: 'views/scatterFullScreenMode.html',
        controller: 'ScatterFullScreenModeCtrl'
    }).when('/scatterFullScreenMode/:application/:period/:queryEndTime/:filter', {
        templateUrl: 'views/scatterFullScreenMode.html',
        controller: 'ScatterFullScreenModeCtrl'
    }).otherwise({
        redirectTo: '/main'
    });
}]);

pinpointApp.run([ '$timeout', function ($timeout) {
    if (Modernizr.canvas === false) {
        $timeout(function () {
            $('#supported-browsers').modal();
        });
    }
}]);
