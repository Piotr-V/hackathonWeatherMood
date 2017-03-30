'use strict';

/**
 * The recipesList component
 */
angular.module('weather.components').component("forecastDisplay", {

    templateUrl: 'app/views/forecastDisplay.html',

    bindings: {
        forecast: '<',
    },

    // controller: ['WeatherService', ]
});