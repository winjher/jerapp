let mobilenet;
let atlas;

function createImg(){
    
}

function modelReady(){
    console.log("Model is Ready!!");
    mobilenet.predict(atlas,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results)
        let label= results[0].className;
        let prob = results[0].probability;
        fillSize(0);
        text(label,10,height-10);
        createP(label);
        createP(probability);
    }
}

function imageReady(){
    image(atlas,0,0,width,height);
    console.log("Image is Ready!!")
}
function setup(){
    createCanvas(640,480);
    atlas=createImg('/storage/emulated/0/Butterfly/Atlas Moth Butterfly/AA00001.jpg',imageReady);
    atlas.hide();
    background(640);
    mobilenet= ml5.imageClassifier("MobileNet", modelReady);
}
