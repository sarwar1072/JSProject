
const generateRGB=()=>{

   const r=Math.floor(Math.random() * 255);
   const g=Math.floor(Math.random() * 255);
   const b=Math.floor(Math.random() * 255);
   
   return `rgb(${r},${g},${b})`;
}

const UpdateColor=()=>{
   const color=generateRGB();
   const colorBox=document.getElementById('colorBox');
   const colorCode=document.getElementById('colorCode');
   colorBox.style.backgroundColor=color;
   colorCode.innerText=color;
}
document.getElementById('copyButton').addEventListener('click',()=>{
   UpdateColor();
})
