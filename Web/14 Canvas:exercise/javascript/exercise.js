$(function() {

    const canvas = document.getElementById('canvas');        
    var ctx = canvas.getContext('2d');

    function drawLine(ctx, start, end) {

        ctx.beginPath();
        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();

    }

    function drawRect(ctx,start,dimension,color){

        ctx.fillStyle = color;
        ctx.fillRect(start[0],start[1],dimension[0],dimension[1]);

    }

    function drawCruve(ctx, start, cp, end, color) {

        ctx.beginPath();
        ctx.moveTo(start[0], start[1]);
        ctx.strokeStyle = color;
        ctx.quadraticCurveTo(cp[0], cp[1], end[0], end[1]);
        ctx.stroke();

    }

        var circle = new Path2D();
        ctx.beginPath();
        ctx.arc(350, 250, 100, 0, 2 * Math.PI);
        ctx.arc(150, 250, 100, 0, 2 * Math.PI)
        ctx.stroke();


    drawLine(ctx, [0, 0], [500, 500]);
    drawLine(ctx, [500, 0], [0, 500]);

    drawRect(ctx, [150,150], [200,200], 'black')


    drawCruve(ctx, [150,150], [250, 0], [350, 150], 'black');

    



    })