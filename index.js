
function playSound(e){
	// console.log(e.keycode);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	// console.log(audio);
	const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
	if(!audio)return; //stop function from running all together
	audio.currentTime = 0; //rewind to start
	audio.play(); //play the audio
	// console.log(key);

	// add in style animation transition on keydown
	//add in .class "playing"
	key.classList.add('playing');
};

function removeTransition(e){
	if(e.propertyName !== 'transform')return; //skip it if it's not a transform
	this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
//listen for transition end
//keys is an array of elements
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);







