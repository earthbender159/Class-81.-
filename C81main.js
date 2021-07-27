var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 
ctx.beginPath();
ctx.strokeStyle = ("blue")
ctx.lineWidth = 4; 
ctx.arc(300, 200, 40, 0, 2*Math.PI);//180
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
    mouse_X = e.clientX - canvas.offsetLeft;
    mouse_Y = e.clientY - canvas.offsetTop; 
    circle(mouse_X, mouse_Y); 
}
function circle (mouse_X, mouse_Y){
    ctx.beginPath();
    ctx.strokeStyle = ("blue")
    ctx.lineWidth = 4; 
    // x, y, radius, startangle, endangle. 
    ctx.arc(mouse_X, mouse_Y, 40, 0, 2*Math.PI);//180
    ctx.stroke();  
}