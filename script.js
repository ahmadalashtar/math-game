window.onclick = function(){
   location.reload();
}

//                                      elemenets
let buttons = document.getElementById('buttons');
let game = document.getElementById('game');
let start = document.getElementById('start')

//                                      center buttons vertically                
let buttonsWidth = buttons.clientWidth
let gameWidth = game.clientWidth
let halfbuttonswidthinpercent = (buttonsWidth*100/gameWidth)/2
buttons.style.left = `${50-halfbuttonswidthinpercent}%`

//                                      center start vertically                
let startWidth = start.clientWidth
start.style.left = `${50-(startWidth*100/gameWidth)/2}%`

for (let item of buttons.childNodes){
    for (let i of item.childNodes){
        console.log(i)
    }
}
console.log(buttons.childNodes)