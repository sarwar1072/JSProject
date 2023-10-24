
var image=['img/p1.jpg','img/p2.jpg','img/p3.jpg','img/4.jpg'];
var my_img=document.getElementById("img1");
var count_index=-1;

function MyImg_Change(){
count_index ++;
if(count_index >= image.length){
   count_index=0;
   my_img.src=image[count_index];
   }
   else{
    my_img.src=image[count_index];

   }
   setTimeout("MyImg_Change()",4000);
}

window.onload=MyImg_Change();