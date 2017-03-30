'use strict';

/**
 * The recipesList component
 */
angular.module('weather.components').component("chooseCity", {

    templateUrl: '/chooseCity.html',

    bindings: {
        forecast: '<',
    },

    controller: ['WeatherService',

        function (WeatherService) {
           
            this.getForecast = () => {
                WeatherService.getOWM(this.query).then((data) => {
                this.forecast = data;
                console.log(data)
            }).catch((err) => {});
            };
        }
    ]
});