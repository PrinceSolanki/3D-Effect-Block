const pre = document.querySelector("pre");

document.addEventListener('mousemove', (e) =>{
rotateElement(e,pre);
});

function rotateElement(event,element){
    let x = event.clientX;
    let y = event.clientY;

    //find the middle
    let middleX = window.innerWidth / 2;
    let middleY = window.innerHeight / 2;

    let offsetX = ((x - middleX) / middleX) * 45;
    let offsetY = ((y - middleY) / middleY) * 45;

    element.style.setProperty("--rotateX",-1*offsetY+"deg");
    element.style.setProperty("--rotateY",offsetX+"deg");

};