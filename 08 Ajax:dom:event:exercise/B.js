var http = new XMLHttpRequest();

function informMe(endpoint, value, callback){

http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`, true);

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(JSON.parse(http.responseText));
        let data = http.responseText;

        callback(data)
    } else {
        console.log('error occurred' + http.status);
    }
}
http.send();
}

// onScreen(data);
// }

// function onScreen(i) {
// document.getElementById("demo").innerHTML = i;
// }

informMe('capital', 'london', function(data){
        console.log(JSON.parse(data));
}
);