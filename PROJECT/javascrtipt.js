let food1s = document.getElementsById('food1');
let food2s = document.getElementById('food2');
let food3s = document.getElementById('food3');
let food4s = document.getElementById('food4');
let foods = document.getElementById('food');


food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url(images/starter1.jpg)";
})
food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url(images/starter2.jpg)";
})
food3s.addEventListener('click',()=>{
    foods.style.backgroundImage="url(images/starter3.jpg)";
})
food4s.addEventListener('click',()=>{
    foods.style.backgroundImage="url(images/stater4.jpg)";
})
foods.addEventListener('click',()=>{
    foods.style.backgroundImage="url(images/food2.jpg)";
})