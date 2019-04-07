var http = new XMLHttpRequest();

function whoInSpace() {

http.open('GET', 'http://api.open-notify.org/astros.json');

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText)
        var data = JSON.parse(http.responseText).people;
        let a = [];
        for (var i = 0; i < data.length; i++) {
         a.push(data[i].name);
        }
        console.log(a);
    } else {
        console.log('error occurred' + http.status);
    }
}
http.send();
}

whoInSpace();