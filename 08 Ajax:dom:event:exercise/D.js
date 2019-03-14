var http = new XMLHttpRequest();

function randomUser(numberOfUser){

http.open('GET', `https://randomuser.me/api/?results=${numberOfUser}`);

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;

    } else if(http.status == 200) {
        // console.log(JSON.parse(http.responseText));
        var a = JSON.parse(http.responseText).results;

        class User {
            constructor(firstName, lastName, email, dob) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.dob = dob;
            }
        }
        totalUser = []
        console.log(a[1].name.first)
        for (var i = 0; i < a.length; i++){
            const user = new User( a[i].name.first, a[i].name.last, a[i].email, a[i].dob);
            totalUser.push(user);
        }

        console.log(totalUser);
    } else {
        console.log('error occurred' + http.status);
    }
}
http.send();
}


randomUser(100);

