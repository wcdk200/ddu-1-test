window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementsByClassName("scrollbar")[0].style.top = "0";
    } else {
      document.getElementsByClassName("scrollbar")[0].style.top = "-80px";
    }
}

  var slideIndex = 1;
  showSlides(slideIndex);

// Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

// Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slide");
    var dots = document.getElementsByClassName("prik");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
 }
