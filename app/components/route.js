'use strict';
const app = angular.module('WeatherMood');

app.config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state({
                name: 'chooseCity',
                url: '/views/chooseCity',
                component: 'chooseCity',
                resolve: {
                    forecast: ['WeatherService', function (WeatherService) {
                        return WeatherService.get();
                    }]
                }
            })

            .state({
                name: 'forecastDiplay',
                url: '/views/forecastDiplay',
                component: 'forecastDisplay',
                // resolve: {
                //     forecacst: ['WeatherService', function (WeatherService) {
                //         return WeatherService.get();
                //     }]


            })
    }
]);