
//   let progress = document.getElementById("progress");

//   songId.onloadedmetadata = function () {
//     progress.max = songId.duration;
//     progress.value = songId.currentTime;
//   };
//   if (songId.play()) {
//     setInterval(() => {
//       progress.value = songId.currentTime;
//     }, 500);
//   }
//   progress.onchange = function () {
//     songId.play();
//     songId.currentTime = progress.value;
//   }


//image ka lenth variable
var divLenght = document.querySelectorAll('.song').length;
console.log(divLenght);
// END 

for(var i = 0; i<divLenght; i++){       //image ka lenght
var demo = document.querySelectorAll('.song')[i].addEventListener('click', playsong);  //image pe click even start

var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick', pausesong);   //image pe click even start
}
// END 

  
// sont list 
var song1 = new Audio();
song1.src = "music/song1.mp3";

var song2 = new Audio();
song2.src = "music/song2.mp3";

var song3 = new Audio();
song3.src = "music/song3.mp3";

var song4 = new Audio();
song4.src = "music/song4.mp3";

var song5 = new Audio();
song5.src = "music/song5.mp3";

var song6 = new Audio();
song6.src = "music/song6.mp3";

var song7 = new Audio();
song7.src = "music/song7.mp3";

var song8 = new Audio();
song8.src = "music/song8.mp3";

var song9 = new Audio();
song9.src = "music/song9.mp3";

var song10 = new Audio();
song10.src = "music/song10.mp3"

var song11 = new Audio();
song11.src = "music/song11.mp3"

var song12 = new Audio();
song12.src = "music/song12.mp3"

var song13 = new Audio();
song13.src = "music/song13.mp3"

var song14 = new Audio();
song14.src = "music/song14.mp3"

var song15 = new Audio();
song15.src = "music/song15.mp3"

var song16 = new Audio();
song16.src = "music/song16.mp3"
// END 


// song play function
function playsong(){
    // console.log(this)

    // song play 
    var songId = this.innerHTML;
   switch (songId) {
    case "1":
        song1.play();
        break;

        case "2":
        song2.play();
        break;

        case "3":
        song3.play();
        break;

        case "4":
        song4.play();
        break;

        case "5":
        song5.play();
        break;

        case "6":
        song6.play();
        break;

        case "7":
        song7.play();
        break;

        case "8":
        song8.play();
        break;

        case "9":
        song9.play();
        break;

        case "10":
        song10.play();
        break;

        case "11":
        song11.play();
        break;

        case "12":
        song12.play();
        break;

        case "13":
         song13.play();
        break;

         case "14":
         song14.play();
         break;

        case "15":
        song15.play();
        break;

        case "16":
        song16.play();
        break;

   
    default:
        // console.log("rong input")
        break;
   }
   
}

// END 


// song pause dubble click function
function pausesong(){
    var songId = this.innerHTML;
   switch (songId) {
    case "1":
        song1.pause();
        break;

        case "2":
        song2.pause();
        break;

        case "3":
        song3.pause();
        break;

        case "4":
        song4.pause();
        break;

        case "5":
        song5.pause();
        break;

        case "6":
        song6.pause();
        break;

        case "7":
        song7.pause();
        break;

        case "8":
        song8.pause();
        break; 

        case "9":
        song9.pause();
        break;

        case "10":
        song10.pause();
        break;

        case "11":
        song11.pause();
        break;

         case "12":
        song12.pause();
        break;

        case "13":
        song13.pause();
        break;

        case "14":
        song14.pause();
        break;
        
        case "15":
        song15.pause();
        break;

        case "16":
        song16.pause();
        break;

   
    default:
        // console.log("rong input")
        break;
   }
}

// END 