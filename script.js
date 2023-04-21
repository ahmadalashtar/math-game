window.onclick = function(){
   location.reload();
}

//                                                          elemenets
let buttons = document.getElementById('buttons');
let game = document.getElementById('game');
let calculation = document.getElementById('calculation')
let bar = document.getElementById('bar')

//                                                           Bar Code
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


