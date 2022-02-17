img = "";
status = "";
objects = [];
function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("whatsappstatus").innerHTML = "Status: detecting objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}

function gotResult(error, results)
{
    if(error)
    {
        console.error();
    }
    console.log(results);

    objects = results;

}
function draw()
{
    image(video, 0, 0, 700, 500);
    if(status!="")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("whatsappstatus").innerHTML = "Status: 🅳🅴🆃🅴🅲🆃🅴🅳";
            document.getElementById("noo").innerHTML = "Number of detected objects are" + objects.length; 
            fill(r, g, b);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent+"%", objects[i].x + 15, objects[i].y + 10);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}