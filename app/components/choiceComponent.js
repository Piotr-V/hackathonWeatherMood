'use strict';

/**
 * The recipesList component
 */
angular.module('weather.components').component("chooseCity", {

    templateUrl: '/chooseCity.html',

    bindings: {
        recipes: '<',
    },

    controller: ['WeatherService',

        function (WeatherService) {
           
            this.getForecast = () => {
                console.log(WeatherService.getOWM(this.query));
            };
        }
    ]
});