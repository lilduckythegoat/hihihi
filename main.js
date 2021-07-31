function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(300, 100);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 130, 100, 370, 280);
    video
    fill('#42FFF2');
    circle(120, 100, 30);
    circle(500, 100, 30);
    circle(500, 380, 30);
    circle(120, 380, 30);
    fill('#FD00FFAA');
    rect(130, 90, 380, 10);
    rect(130, 90, 10, 290);
    rect(500, 90, 10, 290);
    rect(130, 370, 380, 10);
}

function take_snapshot() {
    save('a.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_text_input").value;
}