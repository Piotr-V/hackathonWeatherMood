'use strict';

/**
 * The recipesList component
 */
angular.module('weather.components').component("forecast", {

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