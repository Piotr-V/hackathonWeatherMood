'use strict';

/**
 * The recipesList component
 */
angular.module('weather.components').component("forecastDisplay", {

    templateUrl: '/views/forecastDisplay.html',

    bindings: {
        forecast: '<',
    },

    // controller: ['WeatherService', ]
});