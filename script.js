window.onclick = function(){
   location.reload();
}

//                                      elemenets
let buttons = document.getElementById('buttons');
let game = document.getElementById('game');
// let start = document.getElementById('start')
let calculation = document.getElementById('calculation')
let bar = document.getElementById('bar')

//                                      center buttons vertically                
let buttonsWidth = buttons.clientWidth
let gameWidth = game.clientWidth
let halfbuttonswidthinpercent = (buttonsWidth*100/gameWidth)/2
buttons.style.left = `${50-halfbuttonswidthinpercent}%`

//                                      center start vertically                
// let startWidth = start.clientWidth
// start.style.left = `${50-(startWidth*100/gameWidth)/2}%`


//                                      Bar Code
const timeOut = new Event("timeOut");
bar.addEventListener(
    "timeOut",
    (e) => {
        
    },
    false
  );
const barFnc = function(){
    bar.style.width = `${bar.clientWidth - 1}px`
    if (bar.clientWidth==0) {
         clearInterval(barInterval)
         bar.dispatchEvent(timeOut);
    }
}
const startBar = function(){
const barInterval = setInterval(barFnc, 1);
}


