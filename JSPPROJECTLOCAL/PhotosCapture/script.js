
var video=document.getElementById("video");
var webcam=navigator.mediaDevices.getUserMedia();
var webcam=navigator.mediaDevices.getUserMedia();

if(webcam){
    navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true
    })
 .then(function(Live){
video.srcObject=Live;
 
})
.catch(function(error){
     console.log("error pleae try again")
})
}

var canva=document.getElementById("canva");
var takepoto=document.getElementById("takePhoto");

var context=canva.getContext('2d');
takepoto.addEventListener('click',function(){
     context.drawImage(video,0,0,560,560);
})