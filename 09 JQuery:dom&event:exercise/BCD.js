// B - C
// 1.
var tr = $('<tr>', {class:'row'});
$('tbody').append(tr);
var td = $('<td>Peter</td> <td>12345678</td> <td>peter@gmail.com</td>')
$('tr').last().append(td);

var tr1 = $('<tr class="row"></tr>');
$('tbody').append(tr1);
var td1 = ('<td></td> <td></td> <td></td>')
$('tr').last().append(td1);


$('.row:nth-child(5) td:nth-child(1)').html('Dennis')
$('.row:nth-child(5) td:nth-child(2)').html('5821951')
$('.row:nth-child(5) td:nth-child(3)').html('dennis@gmail.com')


// 2.
var button = $('<button type="clear" value="clear">clear</button>');
$('#row-submit').append(button);


// 3.
$('title').html(`Dennis's contact list application`)
$('h1').html(`Dennis's contact list application`)
//4.
$('#contact-list').css("color", "red");


// D
// 1.
$('#row-name input').attr('maxlength', '50')

// 2.
$('#row-phone input').attr('maxlength', 16).attr('minlength', 8)

//3. 
$('#row-submit button').on('click', function(e){
e.preventDefault();
$('#form1 [name]').val('')
})

//4.
$('#row-phone input').on('blur', function(e){
    var x = e.target.value;
    if (x.length < 8 || x.length > 16 || isNaN(x)) {
        $(this).css('border-color', 'red')
    } else {
        $(this).css('border-color', 'grey')
    }
})

//5.
$('#content').append($('<section class="sections" id="update-contact"><section>'))

$('#update-contact').append($('<h1>Update Contacts</h1> <form id="form2"></form>'))

$('#form2').append($('<div id="row-name1"><input type="text" name="name" placeholder="Name"/></div><div id="row-phone1"><input type="text" name="phone" placeholder="Telephone Number"/></div><div id="row-email1"><input type="text" name="email" placeholder="Email"/></div><div id="row-submit1"><input type="submit" value="submit"/></div>'))

var button1 = $('<button type="clear" value="clear">clear</button>');

$('#row-submit1').append(button1);

$('#row-submit1 button').on('click', function(e){
    e.preventDefault();
    $('#form2 [name]').val('')
    })

    
$('#row-phone1 input').on('blur', function(e){
    var x = e.target.value;
    if (x.length < 8 || x.length > 16 || isNaN(x)) {
        $(this).css('border-color', 'red')
    } else {
        $(this).css('border-color', 'grey')
    }
})

//6.
$('#contact-list').on('click', '.row', function(e){
    var data = $(this).children();
    var input = $('#form2 input').slice(0, data.length);
    for (var i = 0; i < data.length; i++) {
        $(input[i]).val($(data[i]).html());
    }
})

//7.

$('#form1').submit(function(e){

    e.preventDefault();
    var name = e.target.name.value;
    var phone = e.target.phone.value;
    var email = e.target.email.value;
    const row = $(`
        <tr class="row">
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
        </tr>
    `)
    $('tbody').last().append(row);
    $(this).find('button').click()

})