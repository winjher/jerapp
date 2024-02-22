//transfer learning
let mobilenet;
let classifier;
let video;
let label="test";

let butterflyButton;
let larvaeButton;
let pupaeButton;
let eggsButton;
let pupaedefectsButton;
let healthypupaeButton;
let larvaldiseaseButton;
let healthylarvaeButton;
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
function videoReady(){
    console.log("video is Ready!!");
    
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        //console.log(results)
        label= result;
        classifier.classify(gotResults);
      
    }
}


function setup(){
    const newDiv = document.createElement("div");
    createCanvas(320,270);
    video=createCapture(VIDEO)
    video.hide();
    background(0);
    mobilenet= ml5.featureExtractor("MobileNet", video,modelReady);
    classifier=mobilenet.classification(video,videoReady);

    eggsButton=createButton('eggs');
    eggsButton.mousePressed(function(){
        classifier.addImage('eggs');
    });

    larvaeButton=createButton('larvae');
    larvaeButton.mousePressed(function(){
        classifier.addImage('larvae');
    });
    
    pupaeButton=createButton('pupae');
    pupaeButton.mousePressed(function(){
        classifier.addImage('pupae');
    });

    butterflyButton=createButton('butterfly');
    butterflyButton.mousePressed(function(){
        classifier.addImage('butterfly');
    });

    larvaldiseaseButton=createButton('larval disease');
    larvaldiseaseButton.mousePressed(function(){
        classifier.addImage('larval disease');
    });
    
    pupaedefectsButton=createButton('pupae defects');
    pupaedefectsButton.mousePressed(function(){
        classifier.addImage('pupae defects');
    });
    
    healthylarvaeButton=createButton('healthy larvae');
    healthylarvaeButton.mousePressed(function(){
        classifier.addImage('healthy larvae');
    });

    healthypupaeButton=createButton('healthy pupae');
    healthypupaeButton.mousePressed(function(){
        classifier.addImage('healthy pupae');
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
