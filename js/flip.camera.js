

// camera stream video element
let on_stream_video = document.querySelector('#camera-stream');
// flip button element
let flipBtn = document.querySelector('#flip-btn');

// default user media options
let constraints = { audio: false, video: true }
let shouldFaceUser = true;

// check whether we can use facingMode
let supports = navigator.mediaDevices.getSupportedConstraints();
if( supports['facingMode'] === true ) {
  flipBtn.disabled = false;
}

let stream = null;

function capture() {
  constraints.video = {
      width: {
      min: 192,
      ideal: 192,
      max: 192,
    },
    height: {
      min: 192,
      ideal: 192,
      max: 192
    },
    facingMode: shouldFaceUser ? 'user' : 'environment'
  }
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
      stream  = mediaStream;
      on_stream_video.srcObject = stream;
      on_stream_video.play();
    })
    .catch(function(err) {
      console.log(err)
    });
}

flipBtn.addEventListener('click', function(){
  if( stream == null ) return
  // we need to flip, stop everything
  stream.getTracks().forEach(t => {
    t.stop();
  });
  // toggle / flip
  shouldFaceUser = !shouldFaceUser;
  capture();
})

capture();

document.getElementById("webcam").addEventListener("click", function() {
  // Elements for taking the snapshot
    const video = document.querySelector('video');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
});

 // Save the image
 // import { saveAs } from 'file-saver';
//  const canvas = document.createElement('canvas');
//  canvas.width = img.shape[1];
//  canvas.height = img.shape[0];
//  const ctx = canvas.getContext('2d');
//  const imageData = new ImageData(new Uint8ClampedArray(img.dataSync()), img.shape[1], img.shape[0]);
//  ctx.putImageData(imageData, 0, 0);
//  canvas.toBlob((blob) => {
//    saveAs(blob, `class-${classId}.png`);
//  });

