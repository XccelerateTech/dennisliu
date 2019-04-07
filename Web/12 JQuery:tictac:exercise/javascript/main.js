$(function() {

    var click = 0;
    var circle = '';
    var cross = '';
    var won = false;
    var boxes = $('.box');


    var win = ['123', '456', '789', '147', '258', '369', '159', '357'];

    boxes.on('click', function(e) {

        if (won) {
            return;
        }

        var id = e.target.id;
        var box = $(`#${id}`);

        if ((box.hasClass('circle')) || (box.hasClass('cross'))) {
            return;
        }  
       
        if (click % 2 === 0) {

            box.addClass('circle');
            circle += id;
            check(circle, 'dog');

        } else {

            box.addClass('cross');
            cross += id;
            check(cross, 'cat');

        };

        click ++;

    });


    var count = 0;

    function check(str, name) {

        var order = str.split('');

        for (var i = 0; i < win.length; i++) {

            for (var j = 0; j < win[i].length; j++) {
                
                if (order.includes(win[i][j])) {

                    count++;

                    if (count == 3) {
                    
                        setTimeout(() => {
                        alert(`${name} win!`)
                        , 500
                        });
                    };
                };
            };
            count = 0;
        };
    };

    $('#button').on('click', function(e) {

        boxes.removeClass('circle cross')
        var click = 0;
        var circle = '';
        var cross = '';
        var won = false;

    });
});