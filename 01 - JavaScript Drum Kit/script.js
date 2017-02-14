function removeTransition(event) {
  // console.log(event);

  // if propertyName is not transform, skip it
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

  function playSound(event) {
    // use VanillaJS & ES6 template strings to target the data keyCode
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // console.log(audio);
    // console.log(key);

    // stop the function from running if there's no audio element attached to the key
    if (!audio) return;

    // similar to jQuery's .addClass method; this is VanillaJS adding a class:
    key.classList.add('playing');

    // rewind to the start to remove lag between keydowns
    audio.currentTime = 0;

    // play the audio on keydown
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  // console.log('window event: ', event.keyCode);
