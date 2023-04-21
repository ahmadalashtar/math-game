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
        console.log("Bar finished!")
    },
    false
  );

  const startBar = function(seconds){
  let test = Date.now()
  let start = Date.now();
  let originalWidth = bar.clientWidth;
  let decrement = originalWidth/(seconds);
  let newWidth = originalWidth;
  let difference = 0;
  const barFnc = function(){
    difference = Date.now()-start;
    if (difference>=1000){
      start += difference
      bar.style.width = `${newWidth-decrement}px`
      newWidth-=decrement
      if (newWidth<1) {
        bar.style.backgroundColor='transparent'
        clearInterval(barInterval)
        bar.dispatchEvent(timeOut);
      }
      }
      
    

  }
  const barInterval = setInterval(barFnc, 1);
}

// startBar(3);