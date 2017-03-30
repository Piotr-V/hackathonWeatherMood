'use strict';

/**
 * The recgit ipesList component
 */
angular.module('weather.components').component("chooseCity", {

    templateUrl: 'app/views/chooseCity.html',

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