RightEyeX=0;
RightEyeY=0;
LeftEyeX=0;
LeftEyeY=0;
img1="";
img2="";
function preload(){
    img1=loadImage("BearEar2.png");
    img2=loadImage("BearEar1.png");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    vid=createCapture(VIDEO);
    vid.size(400,400);
    vid.hide();
    yay=ml5.poseNet(vid,modelLoaded);
    yay.on('pose',gotPoses);
}
function draw(){
    image(vid,0,0,500,400);
    image(img1,LeftEyeX,LeftEyeY,100,130);
    image(img2,RightEyeX,RightEyeY,100,130);
}
function snap(){
    save("FILTERZ 3.0.png");
}
function modelLoaded(){
    console.log("CODING IS COOL 😎");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        RightEyeX=results[0].pose.rightEye.x+90;
        RightEyeY=results[0].pose.rightEye.y-160;
        LeftEyeX=results[0].pose.leftEye.x-75;
        LeftEyeY=results[0].pose.leftEye.y-160;
    }
}