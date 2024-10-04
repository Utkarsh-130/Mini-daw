(async () => {
    let volumeCallback = null;
    let volumeInterval = null;
    const volumeVisualizer = document.getElementById('volume-visualizer');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (e) => {
            if (recorder.state === 'inactive') {
                const blob = new Blob([e.data], { type: 'audio/wav' });
                const mainaudio = document.createElement('audio');
                mainaudio.setAttribute('controls', 'controls');
                mainaudio.innerHTML = '<source src="' + URL.createObjectURL(blob) + '" type="audio/wav"/>';
                document.getElementById('audio').appendChild(mainaudio);
            }
        };

        recorder.start(100);

        setTimeout(() => {
            recorder.stop();
        }, 5000);
    } catch (error) {
        console.error('Error accessing microphone:', error);
    }
})();
