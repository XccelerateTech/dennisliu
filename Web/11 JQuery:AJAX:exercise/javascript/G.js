
var latLngHK;

$(function() {

    function getCountryData(countryName) {
        return $.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
    };

    function getSunriseSunsetData(lat, lng) {
        return $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`);
    };

    
        //the function below turns milliseconds into the type structure of HHMMSS
    function hms(milliseconds) {

        var seconds = Math.abs(milliseconds) / 1000;
        var hourDisplayed = Math.floor(seconds / 3600) + "";
        var minuteDisplayed = Math.floor(seconds % 3600 / 60) + "";
        var secondDisplayed = (seconds % 60).toFixed(0) + "";
        return `${hourDisplayed.padStart(2, "0")}:${minuteDisplayed.padStart(2, "0")}:${secondDisplayed.padStart(2, "0")}`;

    };

    $('#form2').submit(function(e) {

        e.preventDefault();
        var input = $(this).serializeArray();
        var country1 = input[0].value;
        var country2 = input[1].value;

        $.when(getCountryData(country1), getCountryData(country2)).then(function(countrydata1, countrydata2) {

            console.log(countrydata1);

            //country 1 : latlng
            var lat1 = countrydata1[0][0].latlng[0].toFixed(1);
            var lng1 = countrydata1[0][0].latlng[1].toFixed(1);

            console.log(lat1);
            console.log(lng1);

            //country 2 : latlng
            var lat2 = countrydata2[0][0].latlng[0].toFixed(1);
            var lng2 = countrydata2[0][0].latlng[1].toFixed(1);

            console.log(lat2);
            console.log(lng2);

            $.when(getSunriseSunsetData(lat1, lng1), getSunriseSunsetData(lat2, lng2)).then(function(countrytime1, countrytime2) {

                console.log(countrytime1);
                console.log(countrytime2);

                //country 1 : sunrise and sunset 
                var sunrise1 = countrytime1[0].results.sunrise;
                var sunrisetime1 = new Date(sunrise1).getTime()

                var sunset1 = countrytime1[0].results.sunset;
                var sunsettime1 = new Date(sunset1).getTime()
                
                //country 2 : sunrise and sunset 
                var sunrise2 = countrytime2[0].results.sunrise;
                var sunrisetime2 = new Date(sunrise2).getTime()

                var sunset2 = countrytime2[0].results.sunset;
                var sunsettime2 = new Date(sunset2).getTime()


                //diff
                var risediff = sunrisetime1 - sunrisetime2;
                var setdiff = sunsettime1 - sunsettime2;

                var risedifftime = hms(risediff);
                var setdifftime = hms(setdiff);

                console.log(risedifftime)
                console.log(setdifftime)

                var suntime = $(`
                <p>Sunrise diff is at: ${risedifftime}</p>
                <p>Sunset diff is at: ${setdifftime}</p>
                `)
    
                $('#time2').append(suntime);

            })
            
        })


    })

})

