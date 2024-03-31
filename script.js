console.log("Welcome to Spotify");
// Intialise the variables
let songsIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Hame Bhi Pyar Huaa", filePath: "songs/0.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chadhal jawani rasgula", filePath: "songs/1.mp3", coverPath: "covers/2.jpg"},
    {songName: "kalaastar", filePath: "songs/2.mp3", coverPath: "covers/3.jpg"},
    {songName: "vaste ja bhi du", filePath: "songs/3.mp3", coverPath: "covers/4.jpg"},
    {songName: "jihale masti", filePath: "songs/4.mp3", coverPath: "covers/5.jpg"},
]
songItems.forEach((element, i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//  audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    

//  update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    console.log(progress);

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

    
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songsIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/&&{songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        



    })
})