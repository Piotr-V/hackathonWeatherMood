'use strict';

/**
 * Create the components module
 */
const components = angular.module('weather.components', []);
components.component("weather", {
    templateUrl: 'app/views/chooseCity.html',

    controller: ['WeatherService', function (WeatherService) {
        var vm = this;
        vm.getForecast = () => {
            WeatherService.getOWM(this.query).then((data) => {
                this.forecast = data;
            }).catch((err) => { });
        };
    }]
});

