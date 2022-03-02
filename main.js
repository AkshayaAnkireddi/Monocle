eyeX=0;
eyeY=0;

function preload() {
monocle="https://postimg.cc/gwVQjW63"
}

function setup(){
    canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    eyeX = results[0].pose.nose.x-15;
    eyeY = results[0].pose.nose.y-15;
  }
}

function take_snapshot(){
  save('Monocle!');
}