

let mobilenet;
let classifier;
let video;
let label='';
let Butterfly;
let Moth;
let trainButton;

function modelReady(){
    console.log('Model is ready!!!');
    //mobilenet.predict(gotResults);
}

function videoReady(){
    console.log('Video is ready!!!');
    //mobilenet.predict(gotResults);
}
function gotResults(error,results){
    if (error) {
        console.error(error);
    }else{
        
    }
}
function setup(){
    createCanvas(320,270);
    video.hide();
    background(0);
    mobilenet=ml5.featureExtractor('MobileNet', modelReady);
    classifier=mobilenet.classification(video,videoReady);
    
    Butterfly=createButton('Butterfly');
    Butterfly.mousePressed(function(){
        classifier.addImage('Butterfly');
    });
    
    Moth=createButton('Moth');
    Moth.mousePressed(function(){
        classifier.addImage('Moth');
    });

    trainButton=createButton('train');
    trainButton.mousePressed(function(){
        classifier.addImage('train');
    });
}

function draw(){
    background(0);
    image(video,0,0,320,240);
    fill(255);
    textSize(6);
    text(label,10,height-10);
}


function setup()
{
  createCanvas(500,450);
  myImg=createImg('dog.jpg',onImgReady);
  myImg.hide();
    // Creating the mobilenet model object
  mobilenet = ml5.imageClassifier('MobileNet',onModelReady);
}
function onModelReady()
{
  console.log("Model is ready to predict");
  mobilenet.predict(myImg,result);  // Predict image from model
}
//Show result throughthis function
function result(err,res)
{
  if (err) {
    console.error(err);
  } else {
        console.log(res);
        console.log(res[0].label); // get the first item
  }
}

