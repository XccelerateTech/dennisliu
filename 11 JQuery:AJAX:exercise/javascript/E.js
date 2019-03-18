function api(latlong, date, callback) {

    $.ajax({

        url:`https://api.sunrise-sunset.org/json?${latlong}&date=${date}&formatted=0`,
        type:"GET"
      
      }).done(function(data) {
      
        console.log("This function will be run if the ajax is successful");
        console.log(data)
        callback(data);

      }).fail(function(data) {
      
        console.log("This function will be run if the ajax if failed");
        
      }).always(function(data) {
      
        console.log("This function runs no matter success or fail.");
      
      });
};


function msToTime(milliseconds){

    //Get hours from milliseconds
    var hours = milliseconds / (1000*60*60);
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;
  
    //Get remainder from hours and convert to minutes
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;
  
    //Get remainder from minutes and convert to seconds
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;
  
  
   return(h + ':' + m + ':' + s)
  }



$(function() {

    $('#form').submit(function(e) {

        e.preventDefault();
        var input = $(this).serialize();
        console.log(input)
        var nowS = new Date().getTime();
        console.log(nowS);


        api(input, 'yesterday', function(ytd) {
            api(input, 'today', function(tdy) {
                api(input, 'tomorrow', function(tmr) {

                    // YTD 
                    var sunriseYtd = ytd.results.sunrise;
                    var secRiseYtd = new Date(sunriseYtd).getTime();

                    var sunsetYtd = ytd.results.sunset;
                    var secSetYtd = new Date(sunsetYtd).getTime();

                    // TDY
                    var sunriseTdy = tdy.results.sunrise;
                    var secRiseTdy = new Date(sunriseTdy).getTime();

                    var sunsetTdy = tdy.results.sunset;
                    var secSetTdy = new Date(sunsetTdy).getTime();

                    // TMR
                    var sunriseTmr = tmr.results.sunrise;
                    var secRiseTmr = new Date(sunriseTmr).getTime();

                    var sunsetTmr = tmr.results.sunset;
                    var secSetTmr = new Date(sunsetTmr).getTime();

                    // millisec

                    var a = msToTime(secRiseTdy - nowS);
                    var b = msToTime(secSetTmr - nowS);
                    var c = msToTime(secSetYtd - nowS);
                    var d = msToTime(secSetTdy - nowS);
                    var e = msToTime(secRiseYtd - nowS);
                    var f = msToTime(secSetYtd - nowS);
                    var g = msToTime(secRiseTmr - nowS);
                    var h = msToTime(secSetTmr - nowS);

                    var suntime = $(`
                    <p>Time diff btw pre sunrise and now: ${a}</p>
                    <p>Time diff btw nxt sunrise and now: ${b}</p>
                    <p>Time diff btw pre sunset and now: ${c}</p>
                    <p>Time diff btw nxt sunset and now: ${d}</p>
                    <p>Time diff btw ytd sunrise and now: ${e}</p>
                    <p>Time diff btw ytd sunset and now: ${f}</p>
                    <p>Time diff btw tmr sunrise and now: ${g}</p>
                    <p>Time diff btw tmr sunset and now: ${h}</p>
                    `);

                   $('#time').append(suntime);

                });
            });
        });
    });
});