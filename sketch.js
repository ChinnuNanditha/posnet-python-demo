let capture;
let posenet;
let noseX,noseY;
let singlePose;
let dog2_img,dog3_img;
let reyeX,reyeY;
let leyeX,leyeY;
let skeleton;
let dog_img;


function setup() {
    createCanvas(800,500);

  capture=createCapture(VIDEO)
  capture.hide();

  posenet=ml5.poseNet(capture,modelLoaded);

  posenet.on('pose',receivedPoses);

 dog_img=loadImage('images/one.png');
  dog2_img=loadImage('images/four.png');
  dog3_img=loadImage('images/five.png');
}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length>0){
        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton;
        // noseX=singlePose.nose.x;
        // noseY=singlePose.nose.y;

        // reyeX=singlePose.rightEye.x;
        // reyeY=singlePose.rightEye.y;

        // leyeX=singlePose.leftEye.x;
        // leyeY=singlePose.leftEye.y;
    }

    console.log(noseX + " " +noseY);
}
function modelLoaded(){
    console.log('Model has Loaded');
}

function draw() {

   image(capture,0,0,800,600);
   fill(255,0,0);

   if(singlePose){
   for(let i=0;i<singlePose.keypoints.length;i++){
    ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,50);
   }

   stroke(255,255,255);
   strokeWeight(5);
   for(let j=0;j<skeleton.length;j++){
    line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
   }

   image(dog_img,singlePose.nose.x-45,singlePose.nose.y-60,100,100);

   
   image(dog_img2,singlePose.nose.x-45,singlePose.nose.y-60,100,100);

   
   image(dog_img3,singlePose.nose.x-45,singlePose.nose.y-60,100,100);
}
}