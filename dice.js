const roll = document.querySelector(".roll");
const reset = document.querySelector(".reset");

const topLeft = document.querySelector(".tLeft");
const topRight = document.querySelector(".tRight");
const bottomLeft = document.querySelector(".bLeft");
const bottomRight = document.querySelector(".bRight");
const bottomCenter = document.querySelector(".bCenter");
const topCenter = document.querySelector(".tCenter");
const center = document.querySelector(".ccenter"); 
const diceMain = document.querySelector(".diceMain"); 

roll.addEventListener('click', function(){
     const num =  Math.floor(Math.random() * 6 ) + 1;
     if(num === 1){
     center.classList.add('center','circle')
     
}    if(num === 2){
     bottomLeft.classList.add('bottomLeft', 'circle')
     topRight.classList.add('topRight','circle')

}    if(num === 3){
     bottomLeft.classList.add('bottomLeft','circle')
     topRight.classList.add('topRight','circle')
     center.classList.add('center','circle')

}    if(num === 4){
     bottomLeft.classList.add('bottomLeft','circle')
     topRight.classList.add('topRight','circle')
     bottomRight.classList.add('bottomRight','circle')
     topLeft.classList.add('topLeft','circle')
     
}    if(num === 5){
     bottomLeft.classList.add('bottomLeft','circle')
     topRight.classList.add('topRight','circle')
     bottomRight.classList.add('bottomRight','circle')
     topLeft.classList.add('topLeft','circle')
     center.classList.add('center','circle')

}    if(num === 6){
     bottomLeft.classList.add('bottomLeft','circle')
     topRight.classList.add('topRight','circle')
     bottomRight.classList.add('bottomRight','circle')
     topLeft.classList.add('topLeft','circle')
     bottomCenter.classList.add('bottomCenter','circle')
     topCenter.classList.add('topCenter','circle')

}})

reset.addEventListener('click', function(){
     bottomLeft.classList.remove('bottomLeft','circle')
     topRight.classList.remove('topRight','circle')
     bottomRight.classList.remove('bottomRight','circle')
     topLeft.classList.remove('topLeft','circle')
     bottomCenter.classList.remove('bottomCenter','circle')
     topCenter.classList.remove('topCenter','circle')
     center.classList.remove('center','circle')
})

