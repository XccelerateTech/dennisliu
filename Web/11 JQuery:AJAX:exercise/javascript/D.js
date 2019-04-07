$(function() {

    $('#form').submit(function(e) {
        e.preventDefault();
        var input = $(this).serializeArray();
        var long = input[1].value;
        var lat = input[0].value;


        $.ajax({

            url:`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`,
            type: "GET"

        }).done(function(data) {

            console.log("This function will be run if the ajax is successful");
            console.log(data);

            var sunrise = new Date(data.results.sunrise);
            var sunset = new Date(data.results.sunset);

            var suntime = $(`<p>Sunrise is at: ${sunrise}</p>
            <p>Sunset is at: ${sunset}</p>`)

            $('#time').append(suntime);

        }).fail(function(data) {

            console.log("This function will be run if the ajax if failed");

        }).always(function(data) {

            console.log("This function runs no matter success or fail.");

      });

    })

});