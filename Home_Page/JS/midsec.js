

  

  // Set the date we're counting down to
  var countDownDate = new Date("Nov 28, 2020 13:34:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " +"LEFT";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("coming").innerHTML = "Live";
      document.getElementById("soon").innerHTML = "Now!";
      var countDownDate1 = new Date("Nov 30, 2020 13:39:00").getTime();
      document.getElementById("demo").innerHTML = "00d " + "00h "
       + "00m " + "00s " +"LEFT";
      // Update the count down every 1 second
      var x1 = setInterval(function() {
      
        // Get today's date and time
        var now1 = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance1 = countDownDate1 - now1;
      
        // Time calculations for days, hours, minutes and seconds
        var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
        var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = hours1 + "h "
        + minutes1 + "m " + seconds1 + "s " +"LEFT";
      
        // If the count down is finished, write some text
        if (distance1 < 0) {
          clearInterval(x);
          document.getElementById("coming").innerHTML = "DEALS";
          document.getElementById("soon").innerHTML = "EXPIRED!";
          document.getElementById("demo").innerHTML ="BETTER LUCK NEXT TIME!"
        }
      }, 1000);


    }
  }, 1000);

  var countDownDate1 = new Date("Nov 25, 2020 13:39:00").getTime();
 
  // Update the count down every 1 second
  var x1 = setInterval(function() {
  
    // Get today's date and time
    var now1 = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance1 = countDownDate1 - now1;
  
    // Time calculations for days, hours, minutes and seconds
    var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("demo1").innerHTML = days1+"d "+ hours1 + "h "
    + minutes1 + "m " + seconds1 + "s " +"LEFT";
  
    // If the count down is finished, write some text
    if (distance1 < 0) {
      clearInterval(x);
    
      document.getElementById("demo1").innerHTML ="DEAL EXPIRED!"
    }
  }, 1000);
