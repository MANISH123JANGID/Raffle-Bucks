
var slideIndex = 0;
showSlides();
var slides,dots;

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

      }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

function currentSlide(index) {
    if (index > slides.length) {index = 0}
    else if(index < 1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
        slides[index-1].style.display = "block";  
        dots[index-1].className += " active";
    }

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


var slideIndex1 = 0;
showSlides1();
var slides1,dots1;

function showSlides1() {
    var a;
    slides1 = document.getElementsByClassName("mySlides1");
    dots1 = document.getElementsByClassName("dot");
    for (i = 0; i < slides1.length; i++) {
       slides1[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1> slides1.length) {slideIndex1 = 1}    
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1-1].style.display = "block";  
    dots1[slideIndex1-1].className += " active";
    setTimeout(showSlides1, 3000); // Change image every 8 seconds
}

function plusSlides1(position) {
    slideIndex1 +=position;
    if (slideIndex1> slides1.length) {slideIndex1 = 1}
    else if(slideIndex1<1){slideIndex1 = slides1.length}
    for (i = 0; i < slides1.length; i++) {
       slides1[i].style.display = "none";  
    }
    for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex-1].className += " active";
}

function currentSlide1(index1) {
  if (index1> slides.length) {index1 = 1}
  else if(index1<1){index1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
     slides1[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[index1-1].style.display = "block";  
  dots1[index1-1].className += " active";
}

if (navigator.msMaxTouchPoints) {

    $('#slider').addClass('ms-touch');
  
    $('#slider').on('scroll', function() {
      $('.slide-image').css('transform','translate3d(-' + (100-$(this).scrollLeft()/6) + 'px,0,0)');
    });
  
  } else {
  
    var slider = {
  
      el: {
        slider: $("#slider"),
        holder: $(".holder"),
        imgSlide: $(".slide-image")
      },
  
      slideWidth: $('#slider').width(),
      touchstartx: undefined,
      touchmovex: undefined,
      movex: undefined,
      index: 0,
      longTouch: undefined,
      
      init: function() {
        this.bindUIEvents();
      },
  
      bindUIEvents: function() {
  
        this.el.holder.on("touchstart", function(event) {
          slider.start(event);
        });
  
        this.el.holder.on("touchmove", function(event) {
          slider.move(event);
        });
  
        this.el.holder.on("touchend", function(event) {
          slider.end(event);
        });
  
      },
  
      start: function(event) {
        // Test for flick.
        this.longTouch = false;
        setTimeout(function() {
          window.slider.longTouch = true;
        }, 250);
  
        // Get the original touch position.
        this.touchstartx =  event.originalEvent.touches[0].pageX;
  
        // The movement gets all janky if there's a transition on the elements.
        $('.animate').removeClass('animate');
      },
  
      move: function(event) {
        // Continuously return touch position.
        this.touchmovex =  event.originalEvent.touches[0].pageX;
        // Calculate distance to translate holder.
        this.movex = this.index*this.slideWidth + (this.touchstartx - this.touchmovex);
        // Defines the speed the images should move at.
        var panx = 100-this.movex/6;
        if (this.movex < 600) { // Makes the holder stop moving when there is no more content.
          this.el.holder.css('transform','translate3d(-' + this.movex + 'px,0,0)');
        }
        if (panx < 100) { // Corrects an edge-case problem where the background image moves without the container moving.
          this.el.imgSlide.css('transform','translate3d(-' + panx + 'px,0,0)');
        }
      },
  
      end: function(event) {
        // Calculate the distance swiped.
        var absMove = Math.abs(this.index*this.slideWidth - this.movex);
        // Calculate the index. All other calculations are based on the index.
        if (absMove > this.slideWidth/2 || this.longTouch === false) {
          if (this.movex > this.index*this.slideWidth && this.index < 2) {
            this.index++;
          } else if (this.movex < this.index*this.slideWidth && this.index > 0) {
            this.index--;
          }
        }      
        // Move and animate the elements.
        this.el.holder.addClass('animate').css('transform', 'translate3d(-' + this.index*this.slideWidth + 'px,0,0)');
        this.el.imgSlide.addClass('animate').css('transform', 'translate3d(-' + 100-this.index*50 + 'px,0,0)');
  
      }
  
    };
  
    slider.init();
  }