
const evnt=document.getElementById('clk');
   evnt.style.padding='10px'
   evnt.style.margin='3px';

evnt.onclick=function ChangeColor(){
   document.body.style.backgroundColor='orange';
};

const grn=document.getElementById('grn');
   grn.style.padding='10px';
   grn.style.margin='3px';
   function cgColor(){
      document.getElementById('bodytag').style.backgroundColor='green';
   }

   document.getElementById('clickhere').addEventListener('click',function(){
      document.body.style.backgroundColor='red';

   });
   const padding=document.getElementById('clickhere');
   padding.style.padding='10px';