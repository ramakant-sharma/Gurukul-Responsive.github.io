// var images = ["school_images/IMG20190815095254.jpg",
//             "school_images/IMG20190815082810.jpg",
//             "school_images/IMG20190815082539.jpg"];
// var i = 0;

// function slides(){

// document.getElementById('slideimage').src =images[i];
// if(i<(images.length-1))
// i++;
// else{
// i=0;
// }
// }
// setInterval(slides, 5000);


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:true
    });
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







