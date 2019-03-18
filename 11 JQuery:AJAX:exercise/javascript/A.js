$(function() {

    $.ajax({

        url:"./data/data.json",
        type:"GET"
        
      }).done(function(data) {

        console.log("This function will be run if the ajax is successful");
        console.log(data);
        
      }).fail(function(data) {

        console.log("This function will be run if the ajax if failed");

      }).always(function(data) {

        console.log("This function runs no matter success or fail.");

      });

})