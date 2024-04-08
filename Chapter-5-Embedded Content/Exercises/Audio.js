//Define the list of samples
document.addEventListener('DOMContentLoaded', function() {
  const soundboard = document.getElementById('soundboard');

  //The audio files
  const audioFiles = [
      'Haha-sound-effect.mp3',
      'Oh-no-sound-effect.mp3',
       ];

  //The process to create the audio text
  function createAudioButtons() {
      audioFiles.forEach(file => {
          const button = document.createElement('button');
          button.classList.add('audio-button');
          button.innerHTML = `<span>${file.slice(0, -4)}</span>`;
          button.addEventListener('click', () => playAudio(file));
          soundboard.appendChild(button);
      });
  }

  //Playing the auido
  function playAudio(fileName) {
      const audio = new Audio(`Audio Sampler/${fileName}`);
      audio.play();
  }

  //Creating the audio buttons
  createAudioButtons();
});

  