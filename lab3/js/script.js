const body = document.querySelector('body');
const square = document.querySelector('.square');
const coordinates= document.querySelector('.coordinates')
const btn= document.querySelector('.clickme')
const message = document.querySelector('.message');

body.addEventListener('mousemove', showCoords);

function showCoords(e) {
    square.style.top = e.clientY + 'px';
    square.style.left = e.clientX + 'px';
    coordinates.innerHTML = e.clientY + ', ' + e.clientX;
    console.log('Y Position:', e.clientY, 'X Position:', e.clientX);
}

btn.addEventListener('click', animation);

function animation(e){
    square.classList.add('animate');
    message.innerHTML = "🎉 Surprise! You found me!";
    message.style.color = 'Orange';
    message.classList.add('show'); 
    btn.innerHTML= "✨ Boom!";
}



