//                                                          elemenets
let buttons = document.querySelectorAll('button');
let game = document.getElementById('game');
let calculation = document.getElementById('calculation')
let bar = document.getElementById('bar')
let p = document.querySelector('p')
//                                                          Buttons Event Listeners
// https://fjolt.com/article/javascript-multiple-elements-addeventlistener

let clickEvent = (event)=>{
  window.dispatchEvent(new KeyboardEvent('keydown',{'key':event.target.innerText}));
}

buttons.forEach(button =>{
  button.addEventListener('click',clickEvent);
})

//                                                           Bar Code
const timeOut = new Event("timeOut");
bar.addEventListener("timeOut", (e) => { 
  alert('Loss!');
  time = initTime;
  numberOfDigits=initNmberOfDigits;
  newRound(time,numberOfDigits)
 }, false);

let barInterval;

//                                                        Start bar
const startBar = function(seconds){
  bar.style.width='100%'
  let test = Date.now();
  let start = Date.now();
  let originalWidth = bar.clientWidth;
  let decrement = originalWidth/(seconds);
  // originalWidth -= originalWidth%decrement;
  let newWidth = originalWidth;
  let difference = 0;
  const barFnc = function(){
    difference = Date.now()-start;
    if (difference>=1000){
      start += difference
      bar.style.width = `${newWidth-decrement}px`
      newWidth-=decrement
      if (newWidth<=0) {
        console.log(Date.now()-test)
        bar.style.backgroundColor='transparent'
        clearInterval(barInterval)
        bar.dispatchEvent(timeOut);
      }
    }
  }
  barInterval = setInterval(barFnc, 1);
}
//                                                                Get numbers and sum
const getNumbersAndSum = function(numOfnumbers){
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const generateNumbers = function(n){
    return  Array(n).fill(0).map(()=>getRandomInt(-9,10))
  }
  const sum = function(array){
    return array.reduce((acc,element)=>acc+element);
  }
  const force0to9 = function(array,count,numOfnumbers){
    // -9..-1 => revert the signs
    if (count>-10 && count <0){
      array = array.map(element=>element*(-1));
      count = count*(-1);
      return [array,count]
    } 
    // 20 or -20 try until you succeed
    else if (count>9 || count <0){
      array.forEach((element,index,arr)=>{
        if (count<10 && count>-1){ return [arr,count]}
        arr[index]=element*(-1);
        count +=arr[index]*2;
      })
    }
    return [array,count]
  }
  let array = generateNumbers(numOfnumbers);
  let count = sum(array);
  while(count>9 || count <0) {
    [array, count] = force0to9(array,count)
  }
  return [array,count]
}

let numbers;
let answer;
let time = 5;
let initTime = 5;
let initNmberOfDigits = 2;
let numberOfDigits = 2;
let reachedMax = false;
//                                                          New Round
const newRound = function(time,numOfDigits ){
  startBar(time);
[ numbers, answer] =getNumbersAndSum(numOfDigits);
let pArray = [];
numbers.forEach((number,index)=>{
  if (number>-1 && index==0 ){
    pArray.push(`${number}`)
  } 
  else if (number>-1){
    pArray.push(`+ ${Math.abs(number)}`)
  } 
  else{
    pArray.push(`- ${Math.abs(number)}`)

  }
})
p.innerText = pArray.join(' ')
}
window.onkeydown = (e)=>{
  if (answer==e.key){
    if (numberOfDigits>4){reachedMax=true} 
    else {numberOfDigits+=1};
    if (reachedMax){time-=0.1;}
  }
  else {
    time-=1;
  }

  clearInterval(barInterval); 
  newRound(time,numberOfDigits); 

}

newRound(time,numberOfDigits);