//                                                          elemenets
let buttons = document.getElementById('buttons');
let game = document.getElementById('game');
let calculation = document.getElementById('calculation')
let bar = document.getElementById('bar')
let p = document.querySelector('p')
//                                                           Bar Code
const timeOut = new Event("timeOut");
bar.addEventListener(
    "timeOut",
    (e) => {
        console.log("Bar finished!")
    },
    false
  );

  let barInterval;
  const startBar = function(seconds){
    bar.style.width='100%'
  let test = Date.now()
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

// startBar(8);
let numbers;
let answer;
const newRound = function(){
  startBar(3);
[ numbers, answer] =getNumbersAndSum(2);
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
newRound();
window.onkeydown = (e)=>{
  let key = e.keyCode;
  if (answer==0 && (key==96 || key==48 )){
    clearInterval(barInterval); newRound(); 
  }
  else if (answer==1 && (key==97 || key==49 )){
    clearInterval(barInterval); newRound();
  } 
  else if (answer==2 && (key==98 || key==50 )){
    clearInterval(barInterval); newRound();
  }
  else if (answer==3 && (key==99 || key==51 )){
    clearInterval(barInterval); newRound();
  }
  else if (answer==4 && (key==100 || key==52 )){
    clearInterval(barInterval); newRound();
  }
  else if (answer==5 && (key==101 || key==53 )){
    clearInterval(barInterval);newRound();
  }
  else if (answer==6 && (key==102 || key==54 )){
    clearInterval(barInterval); newRound();  }
  else if (answer==7 && (key==103 || key==55 )){
    clearInterval(barInterval); newRound();  }
  else if (answer==8 && (key==104 || key==56 )){
    clearInterval(barInterval); newRound();  }
  else if (answer==9 && (key==105 || key==57 )){
    clearInterval(barInterval); newRound();  }
}

