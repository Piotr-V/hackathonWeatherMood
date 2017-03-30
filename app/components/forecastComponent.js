'use strict';

/**
 * The recipesList component
 */
angular.module('weather.components').component("forecastDisplay", {

    templateUrl: '/forecastDisplay.html',

    bindings: {
        forecast: '<',
    },

    // controller: ['WeatherService', ]
});