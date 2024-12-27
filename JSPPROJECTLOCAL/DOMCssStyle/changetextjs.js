
document.getElementById('btn').addEventListener('click',function(){
             const getval=document.getElementById('inpt');
             const makeval=getval.value;

             const para=document.getElementById('para')
             para.innerText=makeval;
});

document.getElementById('btn2').addEventListener('click',()=>{
      const getval=document.getElementById('inp');
      const val=getval.value;
      
      const cmnt=document.getElementById('dv');

      const commonplace=document.createElement('p');
      commonplace.innerText=val;
      commonplace.style.backgroundColor='green';
      commonplace.style.margin='3px';
      commonplace.style.padding='5px';
      cmnt.appendChild(commonplace);
      val.value='';
});