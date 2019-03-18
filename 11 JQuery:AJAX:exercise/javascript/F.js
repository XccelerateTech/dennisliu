function api(latlng, callback) {

    $.ajax({

        url:`https://api.sunrise-sunset.org/json?${latlng}&formatted=0`,
        type: "GET"
      
    }).done(function(data) {
    
    console.log("This function will be run if the ajax is successful");
    console.log(data)
    callback(data);

    }).fail(function(data) {
    
    console.log("This function will be run if the ajax if failed");
    
    }).always(function(data) {
    
    console.log("This function runs no matter success or fail.");
    
    });
}

$(function(){

    $('#form1').submit(function(e) {

        e.preventDefault();
        var input = $(this).serialize();
        
        api(input, function(city) {
            api('lat=22.28&lng=114.15', function(hk) {

                cityTime = new Date(city.results.sunrise).getTime() - new Date(city.results.sunset).getTime()
                
                hkTime = new Date(hk.results.sunrise).getTime() - new Date(hk.results.sunset).getTime()

                if (cityTime > hkTime) {

                    var a = $('<p>longer than hk</p>')
                    $('#time1').append(a);

                } else {

                    var b = $('<p>longer than hk</p>')
                    $('#time1').append($(b));

                }
            })
        })
    })
})