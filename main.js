function setup()
{
canvas = createCanvas(500,500)
canvas.position(700,250)

capture = createCapture(VIDEO);
capture.size(500,500)

posenet = ml5.poseNet(capture, loaded);
posenet.on("pose", values);
}

 function loaded()

{
    console.log("PoseNet is activated right now");
}

function values(gotResults)
{
    if(gotResults.length > 0){
        console.log(gotResults);
    }
    
}

function draw()
{
    background("#3262a8")
}