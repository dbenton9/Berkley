
//  Slideshow Activity
//  ** SOLUTION **

 var audio = new Audio("assets/audio/alarm.m4a");


 // function timeUp() {
 //  setTimeout(function() 
 //  {
 //  $("#time-left").html("<h2>Time is up!</h2>")
 //  // console log 10 seconds left
 //  audio.play();
 //  }, 1000);

 //  timeup();
var showImage;
var count = 0;
$("#start").click(startSlideshow);
$("#stop").click(stopSlideshow);

var images = ["assets/images/img1.jpg", "assets/images/img2.jpg", "assets/images/img3.jpg", "assets/images/img4.jpg",
"assets/images/img5.jpg", "assets/images/img6.jpg","assets/images/img7.jpg","assets/images/img8.jpg","assets/images/img9.jpg",
"assets/images/img10.jpg","assets/images/img11.jpg","assets/images/img12.jpg","assets/images/img13.jpg"];

function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  //$("#image-holder").html("<img src='assets/images/heart.mp4' width='200px'/>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);
  audio.play();

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

displayImage();
