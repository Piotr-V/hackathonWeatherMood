'use strict';
const services = angular.module('weather.services', []);

services.service('WeatherService', function ($http, $log, $q) {

    const OWM_KEY = "&APPID=3ffcb9c8de5af67ad5eabf718d1ee6d4";
    const UNIT = "&units=metric";
    const townByName = "http://api.openweathermap.org/data/2.5/weather?q=";
    var inputCity = "london";
    const OWM_URL = townByName + inputCity + UNIT + OWM_KEY;

    return {

        getOWM(query) {
            var deferred = $q.defer();
            $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&APPID=3ffcb9c8de5af67ad5eabf718d1ee6d4").then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.reject(error);
                $log.error(error);
            });
            return deferred.promise;
        }
    }

});