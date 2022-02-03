song = "";
scoreleftwrist = 0;
scorerightwrist = 0;
leftwristy = 0;
lx = 0;
rightwristy = 0;
rx = 0;
function preload()
{
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.posenet(video, modelLoaded);
    posenet.on("Pose", gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is initialized.");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristy = results[0].pose.leftWrist.y;
        rightwristy = results[0].pose.leftWrist.y;
    }
}

function draw()
{
    image(video, 0, 0, 500, 500);

    fill("#00FFD9");
    stroke("#FF0000");
    if(scoreleftwrist < 0.2)
    {
        circle(leftWristx, leftwristy, 20);
        InNumberleftWristY = Number(leftWristY);
        decimal_perished_numbers = floor(InNumberleftWristY);
        volume = 1 - decimal_perished_numbers/500;
        document.getElementById("volumebutton").innerHTML = volume;
        song.setvolume(volume); 
    }
}

function start()
{
    song.play();
    song.volume(1);
    song.rate(1);
}