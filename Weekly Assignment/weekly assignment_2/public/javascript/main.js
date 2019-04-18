const template = Handlebars.compile(
    `
    {{#each notes}}
    
    <div id='{{ @index }}'>
    <p>Note {{ @index }} :</p>
    <textarea rows="3" cols="40" class="textboxes" name='dynamic' data-id="{{ @index }}">{{ this }}</textarea>
    <button data-id="{{ @index }}" value="X">X</button>
    <br>
    </div>
    {{/each}}
    `
)

const compiledHtml = (data) => {
    $('#notebox').html(template({notes:data}));
};


$(() => {

    $.get('/api/note/').then((data) => {
        compiledHtml(data);
    });

    const lastItem = (arr) => {
        return arr[arr.length - 1];
    };

    $('#submit').on('click', function(e) {
        e.preventDefault();

        var input = $('#input').val();
        if (input == '') {
            return;
        }
        console.log(input);

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
            data: {name: val},
            success: function(response) {
                console.log('success')
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
              }
        });
        $(`#${id}`).remove()
    });
});