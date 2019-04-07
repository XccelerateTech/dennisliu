$(function() {

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let dragging = false;

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 0.1;
    $('#canvas').mousedown(function(e){
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        context.beginPath();
        context.moveTo(mouseX,mouseY);
        draw(mouseX,mouseY);
        dragging = true;
    });
    $('#canvas').mousemove(function(e){
        if(dragging){
            let mouseX = e.offsetX;
            let mouseY = e.offsetY;
            draw(mouseX,mouseY);
        }
    });
    $('#canvas').mouseup(function(e){
        dragging = false;
    });
    $('#canvas').mouseleave(function(e){
        dragging = false;
    });

    function draw(x,y){
        context.lineTo(x,y);
        context.moveTo(x,y);
        context.closePath();
        context.stroke();
    }

})

