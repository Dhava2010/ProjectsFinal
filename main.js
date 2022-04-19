rightx = 0;
righty = 0;
scoreright = 0;
paddle1 = 10;
paddle2 = 10;
paddle1x = 10
paddle1y;
paddle1Height = 110;
paddle2Height = 70;
paddle2y = 285;
player_score = 0;
compscore = 0;
var ball = {
    x:150/2,
    y:180/2,
    r:20,
    dx:3,
    dy:3
}

gamestatus = "";

function preload()
{
    touch = loadSound("ball_touch_paddle.wav");
    missed = loadSound("missed.wav");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded()
{
    console.log("Loaded")
}

function gotResults(results)
{
    if(results.length>0)
    {
        rightx = results[0].pose.rightWrist.x;
        righty = results[0].pose.rightWrist.y;
        scoreright = results[0].pose.keypoints[10].score;
        console.log(scoreright);
    }
}