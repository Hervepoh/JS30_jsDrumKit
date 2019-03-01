function drumKitMouse() {
    for (let i = 1; i < 10; i++) {

        document.getElementById('key' + i).onclick = function () {
            document.getElementById('key' + i).classList.add('playing');
            document.getElementById('audio' + i).currentTime = 0;
            document.getElementById('audio' + i).play();
            play
        }

    }
}

function playSound(event) {
    console.log(event);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return; //stop the function for running all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removedTransition(event) {
    if(event.propertyName!=='transform') return;
    this.classList.remove('playing');
}    

const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',removedTransition));

drumKitMouse();
window.addEventListener('keydown', playSound);