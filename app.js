const video = document.getElementById('stream');
const button = document.querySelector(".button");
let canvas = document.querySelector("#canvas");
let clickSound = document.getElementById('click_sound');
let startCam = document.querySelector('.start_cam')
let homeBtn = document.querySelector('.home');


startCam.addEventListener('click',()=>{
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(error => {
    console.error('Camera Loading Failed', error);
  });

  button.addEventListener('click', function() {
    button.style.background = "#1b1b1b";
    setTimeout(()=>{
      button.style.background = "white";
    },1000)
    clickSound.play();
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');
    console.log(image_data_url);
  
});
})

homeBtn.addEventListener('click', ()=>{

});