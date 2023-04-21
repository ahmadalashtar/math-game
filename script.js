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



// const startBar = function(milli){
//     let originalWidth = bar.clientWidth;
//     console.log(originalWidth)
//     // let decrement = originalWidth/(time*10);
//     let decrement = 1;
//     let newWidth = originalWidth;
//     const barFnc = function(){
//         bar.style.width = `${newWidth-decrement}px`
//         newWidth-=decrement
//         if (bar.clientWidth<=originalWidth*0.4){
//             if (bar.style.backgroundColor!="red"){
//                 bar.style.backgroundColor="red"
//             }
//         }
//         if (newWidth<decrement) {
//             bar.style.backgroundColor='transparent'
//              clearInterval(barInterval)
//              bar.dispatchEvent(timeOut);
//         }
//     }
//     const barInterval = setInterval(barFnc, 1);
// }

// startBar(1000);