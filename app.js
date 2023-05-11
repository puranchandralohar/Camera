const video = document.getElementById('stream');
const button = document.querySelector(".button");
let canvas = document.querySelector("#canvas");

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(error => {
    console.error('Camera Loading Failed', error);
  });



  button.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');
    console.log(image_data_url);
});