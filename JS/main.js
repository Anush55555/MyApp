const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

let data = {
    xDelta:3,
    yDelta:4,
    x:10,
    y:10,
    width:100,
    height:100,
    color:"blue"
}
function draw()
{
    context.clearRect(0,0,canvas.width, canvas.height);
    context.fillStyle = data.color;
    context.fillRect(data.x,data.y,data.width, data.height);
}
function update()
{
    if(data.x + data.width > canvas.width)
    {
        data.xDelta = -3;
    }else if(data.x < 0)
    {
        data.xDelta = 3;
    }
    if(data.y + data.height > canvas.height)
    {
        data.yDelta = -5;
    }else if(data.y < 0 )
    {
        data.yDelta = 5;
    }
    data.x += data.xDelta;
    data.y += data.yDelta;
}
function loop()
{
    requestAnimationFrame(loop);
    draw();
    update();
}
loop();
