'use strict';

/**
 * The recipesList component
 */
angular.module('weather.components').component("choose", {

    templateUrl: '/chooseCity.html',

    bindings: {
        recipes: '<',
    },

    // controller: ['WeatherService', ]
});