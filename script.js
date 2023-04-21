window.onclick = function(){
   location.reload();
}

let buttons = document.getElementById('buttons');
let game = document.getElementById('game');
buttonsWidth = buttons.clientWidth
gameWidth = game.clientWidth
let halfbuttonswidthinpercent = (buttonsWidth*100/gameWidth)/2
buttons.style.left = `${50-halfbuttonswidthinpercent}%`
