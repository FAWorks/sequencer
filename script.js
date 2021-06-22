var canvas;
var context;
var photo;
var timer;
var count = 000;

function StartAnimation() {

    img = new Image();
    canvas = document.getElementById("Canvas1");
    context = canvas.getContext("2d");
    AnimateNow();
    //  img.src = 'images/image1.JPG';
}

function AnimateNow() {
    count++;
    format = String(count).padStart(3, 0)
    img.src = '../img/m3-shot_6-' + format + '.png';
    
    img.onload = function()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img,0,0,500,281);    
    };

    timer = setTimeout(AnimateNow, 41.6666667);
    if (count >= 131) {
        StopAnimation();
    }

}

function StopAnimation() {
    count = 000;
    clearTimeout(timer);
}

function ResetCanvas() {
    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
}
