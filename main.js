var noseX = 0;
var noseY = 0;

function preload()
{
    moustache = loadImage("https://i.postimg.cc/W30Gz7FF/Moustache-PNG-Pic.png");
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}
function draw()
{
image(video, 0, 0, 300, 300);
image(moustache, noseX, noseY, 100, 50);
}

function modelLoaded()
{
    console.log("PoseNet has been loaded!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
noseX = noseX - 47;
noseY = noseY -10;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
    }
}
function screenshot()
{
    save("MoustacheFilter.png")
}
