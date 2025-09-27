const body = document.querySelector('body');
const bear = document.getElementById('bear');
const restartBtn = document.getElementById('restartbtn');

const bearSrc = 'images/bear.jpeg';
const originalPhrase = "“Click anywhere… the bear is sneaky but not invisible!”";

body.addEventListener('click', (e) => {
  console.log('body click event:', e);

  bear.innerHTML = `Catch Me If You Can, Human!!<br>X: ${e.pageX}, Y: ${e.pageY}`;

  const img = document.createElement('img');
  img.src = bearSrc;
  img.className = 'bear-image';
  img.style.left = `${e.pageX - 60}px`; 
  img.style.top  = `${e.pageY - 60}px`;
  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 1000);
});

restartBtn.addEventListener('click', (e) => {
  e.stopPropagation(); 

  bear.classList.add('fade-out');

  setTimeout(() => {
    bear.classList.remove('fade-out');
    bear.innerHTML = originalPhrase;
    bear.classList.add('fade-in');

    setTimeout(() => {
      bear.classList.remove('fade-in');
    }, 500);
  }, 500);
});

bear.addEventListener('mousemove', () => {
  bear.classList.add('wiggle');

  setTimeout(() => {
    bear.classList.remove('wiggle');
  }, 500);
});
