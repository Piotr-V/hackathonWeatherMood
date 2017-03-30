'use strict';

/**
 * The recipesList component
 */
components.component("forecast", {

    templateUrl: '/list.html',

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