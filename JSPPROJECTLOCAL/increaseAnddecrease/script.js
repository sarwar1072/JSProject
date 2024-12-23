
const counertElement=document.getElementById('counter');
const plBtn=document.getElementById('plusButton');
const mnBtn=document.getElementById('minusButton');

let count=0;

const updateCounter=(value)=>{
         count=count+value;
      counertElement.textContent=count;  
      if(count >=10){
         plusButton.setAttribute('disabled',true);
      }
      else{
         plusButton.removeAttribute('disabled',false);
      }
      if(count==0){
         minusButton.setAttribute('disabled',true);
      }
      else{
         minusButton.removeAttribute('disabled',false);
      }
      };

      plBtn.addEventListener('click',()=>{
         updateCounter(1);
      });
      mnBtn.addEventListener('click',()=>{
         updateCounter(-1);
});