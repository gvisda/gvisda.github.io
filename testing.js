
      // create web audio api context
      var audioCtx = new AudioContext(); 
    
      var filter = audioCtx.createBiquadFilter();
      // create Oscillator node
      var oscillator = audioCtx.createOscillator();
      // create time
      //var now = audioCtx.currentTime();

      //oscillator.type = 'square';
      oscillator.type = 'saw';
      oscillator.frequency.value = 220;
      //gainNode.gain.value = 0.2;
      oscillator.connect(filter);
      filter.connect(audioCtx.destination);

      oscillator.start(audioCtx.currentTime);
      //oscillator.stop(now + 4);

