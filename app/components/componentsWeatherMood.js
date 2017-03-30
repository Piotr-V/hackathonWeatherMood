'use strict';

/**
 * Create the components module
 */
const components = angular.module('weather.components', []);


components.component("forecast", {

    templateUrl: '/forecast.html',

    bindings: {
        recipes: '<',
    },

    controller: ['WeatherService',

        function (forecastService) {
            var vm = this;

            vm.getForecast = () => { alert("coucou") };
        }
    ]
});