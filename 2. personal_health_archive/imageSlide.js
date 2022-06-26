const prev = document.querySelector("figure div img.leftbutton");
const next = document.querySelector("figure div img.rightbutton");
const imageList = document.querySelectorAll("figure div div.imageList img");
let imageNumber = 1000;
let firstImageNumber;
let secondImageNumber;
let thirdImageNumber;

const prevMove = [
    {transform:'translate(100.8%)', offset:0.95},
    {transform:'translate(100.8%)'}
]
const nextMove = [
    {transform:'translate(-100.8%)', offset:0.95},
    {transform:'translate(-100.8%)'}
]
const prevMoveTiming = {
    duration :600,
    easing:"ease-in-out",
};
const nextMoveTiming = {
    duration :600,
    easing:"ease-in-out",
};

prev.addEventListener('click', ()=> {
    imageList[0].animate(prevMove, prevMoveTiming);
    imageList[1].animate(prevMove, prevMoveTiming);
    imageList[2].animate(prevMove, prevMoveTiming);
    firstImageNumber = (imageNumber-2) % 4;
    secondImageNumber = (imageNumber-1) % 4;
    thirdImageNumber = (imageNumber) % 4;
    setTimeout(() => {
        imageList[0].setAttribute("src", "image/main/"+(firstImageNumber)+".png");
        imageList[1].setAttribute("src", "image/main/"+(secondImageNumber)+".png");
        imageList[2].setAttribute("src", "image/main/"+(thirdImageNumber)+".png");
        imageNumber--;
    },600);
})
next.addEventListener('click', ()=> {
    imageList[0].animate(nextMove, nextMoveTiming);
    imageList[1].animate(nextMove, nextMoveTiming);
    imageList[2].animate(nextMove, nextMoveTiming);
    firstImageNumber = (imageNumber) % 4;
    secondImageNumber = (imageNumber+1) % 4;
    thirdImageNumber = (imageNumber+2) % 4;
    setTimeout(() => {
        imageList[0].setAttribute("src", "image/main/"+(firstImageNumber)+".png");
        imageList[1].setAttribute("src", "image/main/"+(secondImageNumber)+".png");
        imageList[2].setAttribute("src", "image/main/"+(thirdImageNumber)+".png");
        imageNumber++;
    },600);
})