let playBtn = document.getElementById('play-btn');
let video = document.querySelector('.video');
let progressBar = document.querySelector('.progress-bar');
let progressRange = document.querySelector('.progress-range');
let volumeIcon = document.getElementById('volume-icon');
let timeElapse = document.querySelector('.time-elapsed');
let timeDuration = document.querySelector('.time-duration');
let playerSpeed = document.querySelector('.player-speed');
let fullScreen = document.querySelector('.fa-expand');
let volumeBar = document.querySelector('.volume-bar');
let volumeRange = document.querySelector('.volume-range');



let isVideoplaying = false;
function videoPlay(event){
    if(!isVideoplaying){
        video.play();
        isVideoplaying = true;
        playBtn.classList.replace('fa-play','fa-pause');
    }
    else{
        video.pause();
        isVideoplaying = false;
        playBtn.classList.replace('fa-pause','fa-play');
    }

}
function spacenterPlay(event){
    let key = event.code;
    console.log(key);

    if(key =='Enter' || key == 'Space'){
        if(!isVideoplaying){
            video.play();
            isVideoplaying = true;
            playBtn.classList.replace('fa-play','fa-pause');
        }
        else{
            video.pause();
            isVideoplaying = false;
            playBtn.classList.replace('fa-pause','fa-play');
        }
    }
    
   
}

function updateProgressbar(event){
    let elapseTime = parseFloat(event.target.currentTime).toFixed(2);
    let durationTime = parseFloat(event.target.duration).toFixed(2);    
    timeElapse.innerHTML = elapseTime;
    timeDuration.innerHTML = durationTime;
    // console.log(event.target.currentTime,event.target.duration );
    progressBar.style.cssText = `width: ${(event.target.currentTime/event.target.duration)*100}%`;

}
function updateSeekbar(event){
    let currentPoint = event.offsetX;
    let ProgressWidth = this.clientWidth;
    let currentRange = (currentPoint/ProgressWidth)* video.duration;
    video.currentTime = currentRange;
    


}

let isVolumeup = false;
function volume(event){
    console.log(event);

    if(!isVolumeup){
        video.muted=true;
        isVolumeup = true;
        volumeIcon.classList.replace('fa-volume-up','fa-volume-mute');
        
    }
    else{
        video.muted = false;
        isVolumeup = false;
        volumeIcon.classList.replace('fa-volume-mute','fa-volume-up');
       
    }
    
}

function playSpeed(){
    
    let playSpeedValue = playerSpeed.value;
    console.log(playSpeedValue);
    if(playSpeedValue == 0.5){
        video.playbackRate = 0.5;
    }
    else if(playSpeedValue == 0.75){
        video.playbackRate = 0.75;
    }
    else if(playSpeedValue == 1.5){
        video.playbackRate = 1.5;
    }else if(playSpeedValue == 2){
        video.playbackRate = 2;
    }

}


function expandScreen(){
    video.requestFullscreen();
}




playBtn.addEventListener('click',videoPlay)
video.addEventListener('click',videoPlay)
document.addEventListener('keyup',spacenterPlay)
video.addEventListener('timeupdate',updateProgressbar)
progressRange.addEventListener('click',updateSeekbar)
volumeIcon.addEventListener('click',volume)
playerSpeed.addEventListener('click',playSpeed)
fullScreen.addEventListener('click',expandScreen)




