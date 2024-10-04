var device= navigator.mediaDevices.getUserMedia({audio: true})
var items=[];
device.then(stream=>{
   var recorder = new MediaRecorder(stream);
   recorder.ondataavailable=e=>{
      if (recorder.state=='inactive' ){
        var blob = new Blob(items,{type: 'audio/wav'});
        var audio = document.getElementById('audio);
        var mainaudio = document.createElement('audio');
        mainaudio.setAttribute('controls', 'controls');
        audio.appendChild(mainaudio);
        mainaudio.innerHTML='<source src="+URL.createObjectURL((blob)+""
        type="audio/wav"/>';

    }
}
recorder.start(100);
setTimeout(()=>{
    recorder.stop();
},5000
})
   