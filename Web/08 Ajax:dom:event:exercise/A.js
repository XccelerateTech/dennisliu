var http = new XMLHttpRequest();

http.open('GET', './data/data.json');

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(JSON.parse(http.responseText));
        // document.getElementById("demo").innerHTML = JSON.parse(http.responseText);
    } else {
        console.log('error occurred' + http.status);
    }
}
http.send();
