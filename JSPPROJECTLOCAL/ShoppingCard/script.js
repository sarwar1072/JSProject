function increment(incDecc){
   let count=document.getElementById(incDecc);
    if(count.value>=5){
      count.value=5;
      alert("ur limit cross");
    }
    else{
      count.value++;
    }
}

function decrement(incDecc){
   let count=document.getElementById(incDecc);
   if(count.value<=0){
      count.value=0;
   }
   else{
      count.value--;
   }
}