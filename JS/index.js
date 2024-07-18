var openingElement = document.querySelector('.opening');

openingElement.addEventListener('animationend', function () {
    openingElement.classList.add('delayed');
});

const circle = document.querySelector('.circle');

function pauseBallAnimation() {
    circle.style.animationPlayState = 'paused';
}

function resumeBallAnimation() {
    circle.style.animationPlayState = 'running';
}


circle.addEventListener('mouseenter', pauseBallAnimation);

circle.addEventListener('mouseleave', resumeBallAnimation);

circle.addEventListener('touchstart', pauseBallAnimation);

circle.addEventListener('touchend', resumeBallAnimation);