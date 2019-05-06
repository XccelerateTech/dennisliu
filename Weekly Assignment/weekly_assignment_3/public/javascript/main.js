const template = Handlebars.compile(
    `
    {{#each notes}}
    
    <div id='{{ id }}'>
    <p>Note {{ id }} :</p>
    <textarea rows="3" cols="40" class="textboxes" name='dynamic' data-id="{{ id }}">{{ note }}</textarea>
    <button data-id="{{ id }}" value="X">X</button>
    <br>
    </div>
    {{/each}}
    `
)

const compiledHtml = (data) => {
    $('#notebox').html(template({notes:data}));
};


$(() => {

    axios.get('/api/note/').then((res) => {
        
        console.log(res.data, 'hi')
        compiledHtml(res.data);
    }).catch((err) => {
        console.log(err);
    })

    // $.get('/api/note/').then((data) => {
    //     compiledHtml(data);
    // });

    const lastItem = (arr) => {
        return arr[arr.length - 1];
    };

    $('#submit').on('click', function(e) {
        e.preventDefault();

        var input = $('#input').val();
        if (input == '') {
            return;
        }
        console.log(input, 'front');

        $.post('/api/note/', {note:input}
        ).then((data) => {
            compiledHtml(data)
            // $('#notebox').append(note(lastItem(data)));
        });  
        $('#input').val("") 
    });

    $('#notebox').on('keyup', 'textarea', function(e) {
        var id = $(e.currentTarget).data('id');
        var val = $(e.currentTarget).val();
        console.log(id);
        console.log(val);
        

        $.ajax({
            type: 'PUT',
            url: '/api/note/' + id,
            data: {note: val},
            success: function(response) {
                console.log(response)
                compiledHtml(response);
              }
        });
    });

    $('#notebox').on('click', 'button', function(e) {
        var id = $(e.currentTarget).data('id');
        console.log(id);

        $.ajax({
            type: 'DELETE',
            url: '/api/note/' + id,
            success: function(response) {
                console.log('success');
                compiledHtml(response);
              }
        });
        $(`#${id}`).remove()
    });
});