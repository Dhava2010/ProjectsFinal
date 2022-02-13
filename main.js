var song = "";
scoreleftwrist = 0;
scorerightwrist = 0;
leftwristy = 0;
leftwristx = 0;
rightwristy = 0;
lx = 0;
rightwristx = 0;
rx = 0;
function preload()
{
    song = loadSound("ඞඞඞ.mp3");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 500, 500);

    fill("#00FFD9");
    stroke("#FF0000");
    circle(rightwristx, rightwristy, 20);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses()
{
    if(results[0].length>0)
    {
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.leftWrist.x;
        rightwristy = results[0].pose.leftWrist.y;
    }
}