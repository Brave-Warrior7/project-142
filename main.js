music_1="";
music_2="";
leftWrist_X= 0;
leftWrist_y= 0;

rightWrist_X= 0;
rightWrist_y= 0;

function preload(){
music_1=loadSound("music.mp3");
music_2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(400, 300);
    canvas.position(480, 260);
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function modelLoaded(){
    console.log("model is successfully Loaded")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWrist_X=results[0].pose.leftWrist.x;
        leftWrist_y=results[0].pose.leftWrist.y;

        rightWrist_X=results[0].pose.rightWrist.x;
        rightWrist_y=results[0].pose.rightWrist.y;
        
        console.log("Left Wrist-X is= "+leftWrist_X+"  "+"Left Wrist-Y is= "+leftWrist_y);
        console.log("Right Wrist-X is= "+rightWrist_X+"  "+"Right Wrist-Y is= "+rightWrist_y);

    }
}
