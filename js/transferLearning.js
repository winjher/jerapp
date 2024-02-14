
let mobilenet;
let video;
let label="";
let ukeButton;
let whistleButton;
let trainButton;

function createImg(){
    
}

function whileTraining(loss){
    if(loss==null){
        console.log("Training Complete.");
        classifier.classify(gotResults);
    }else{
        console.log(loss);
    }
    
}

function modelReady(){
    console.log("Model is Ready!!");
    mobilenet.predict(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results)
        label= result;
        classifier.classify(gotResults);
      
    }
}


function setup(){
    createCanvas(320,270);
    video=createCapture(VIDEO)
    video.hide();
    background(0);
    mobilenet= ml5.imageClassifier("MobileNet", video,modelReady);
    classifier=mobilenet.classification()

    ukeButton=createButton('ukulele');
    ukeButton.mousePressed(function(){
        classifier.addImage('ukulele');
    });

    whistleButton=createButton('whistle');
    whistleButton.mousePressed(function(){
        classifier.addImage('whistle');
    });
    trainButton=createButton('train');
    trainButton.mousePressed(function(){
        classifier.train(whileTraining);
    });
}
function draw(){
    background(0);
    image(video,0,0,320,240);
    fill(255);
    textSize(32);
    text((label,10,height-20));
}
