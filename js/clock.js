// alert("hi");
setInterval( function(){
let d=new Date();
let h=d.getHours();
// console.log(h);
let m=d.getMinutes();
// console.log(m);
let s=d.getSeconds();
// console.log(s);
let hdeg= h*30 + m*(0.5);
// console.log();
let mdeg=6*m;
let sdeg=6*s;
hr.style.transform="rotate("+hdeg+"deg)";
min.style.transform=`rotate(${mdeg}deg)`;
sec.style.transform=`rotate(${sdeg}deg)`;
},1000);


