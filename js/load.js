let shapeClassifier;
let canvas;

function setup(){
    canvas=createCanvas(64, 64);
    background(0);
    image(squares[0],0,0,width, height);

    let options = {
        inputs: [64,64,4],
        task: 'imageClassification',
      
    };
    
    shapeClassifier = ml5.neuralNetwork(options);
    const modelDetails = {
        model:'model/model.json',
        metadata: 'model/model_meta.json',
        weights: 'model/model.weghts.bin'
    }
    shapeClassifier.load(modelDetails,modeLoaded);
    background(255);
}
function modelLoaded(){
    console.log('model ready!');
    classifyImage();
}
//pag mouse pressed
// function mousePressed(){
//     shapeClassifier.classify({image:canvas},gotResults);
// }
function classifyImage(){
    let input =createGraphics(64,64);
    input.copy(canvas,0,0,400, 400,0,0,64, 64);
    image(input,0,0);
    shapeClassifier.classify({image:input},gotResults);
}


function gotResults(err, results){
    if (err){
        console.log(err);
        return;
    }
    console.log(results);
    classifyImage();

}

function draw(){
   
    if (mouseIsPressed){
        strokeWeight(4);
        AudioListener(mouseX,mouseY,pmouseX,pmouseY)
    }
    // background(225);
    // stroke(0);
    // noFill();
    // strokeWeight(4);
    // circles(width/2,height/2,150)
}