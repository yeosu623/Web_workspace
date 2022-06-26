const leftbutton = document.querySelector("nav.left img");
const rightbutton = document.querySelector("nav.right img");
let img0 = document.querySelector("main div img.img0");
let img1 = document.querySelector("main div img.img1");
let img2 = document.querySelector("main div img.img2");
let count = 0;
const max_count = 5;

const img0to1 = [
    {width:'100px',height:'100px',marginTop:'100px',marginLeft:'0px',zIndex:'10'},
    {width:'150px',height:'150px',marginTop:'50px',marginLeft:'50px',zIndex:'10',offset:0.3},
    {width:'285px',height:'285px',marginTop:'0px',marginLeft:'100px',zIndex:'10',offset:0.8},
    {width:'300px',height:'300px',marginTop:'0px',marginLeft:'100px',zIndex:'10'}
];
const img1to2 = [
    {width:'300px',height:'300px',marginTop:'0px',marginLeft:'100px',zIndex:'10'},
    {width:'250px',height:'250px',marginTop:'-20px',marginLeft:'150px',zIndex:'10',offset:0.3},
    {width:'150px',height:'150px',marginTop:'100px',marginLeft:'400px',zIndex:'10',offset:0.8},
    {width:'100px',height:'100px',marginTop:'100px',marginLeft:'400px',zIndex:'10'}
];
const img1to0 = [
    {width:'300px',height:'300px',marginTop:'0px',marginLeft:'100px',zIndex:'10'},
    {width:'250px',height:'250px',marginTop:'-20px',marginLeft:'83.3px',zIndex:'10',offset:0.3},
    {width:'150px',height:'150px',marginTop:'100px',marginLeft:'0px',zIndex:'10',offset:0.8},
    {width:'100px',height:'100px',marginTop:'100px',marginLeft:'0px',zIndex:'10'}
];
const img2to1 = [
    {width:'100px',height:'100px',marginTop:'100px',marginLeft:'400px',zIndex:'10'},
    {width:'150px',height:'150px',marginTop:'50px',marginLeft:'250px',zIndex:'10',offset:0.3},
    {width:'285px',height:'285px',marginTop:'0px',marginLeft:'100px',zIndex:'10',offset:0.8},
    {width:'300px',height:'300px',marginTop:'0px',marginLeft:'100px',zIndex:'10'}
];

leftbutton.addEventListener('click', ()=> {
    if(1 <= count) {
        count -= 1;

        img0.animate(img0to1,500);
        img1.animate(img1to2,500);

        setTimeout(() => {
        img0.setAttribute("src", "cat"+(count)+".png");
        img1.setAttribute("src", "cat"+(count+1)  +".png");
        img2.setAttribute("src", "cat"+(count+2)+".png");
        console.log(count);
        }, 500);
    };
});
rightbutton.addEventListener('click', ()=> {
    if(count <= max_count-2 ) {
        count += 1;

        img1.animate(img1to0,500);
        img2.animate(img2to1,500);

        setTimeout(() => {
        img0.setAttribute("src", "cat"+(count)+".png");
        img1.setAttribute("src", "cat"+(count+1)+".png");
        img2.setAttribute("src", "cat"+(count+2)+".png");
        console.log(count);
        }, 500);
    };
});