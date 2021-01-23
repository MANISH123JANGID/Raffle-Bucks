$(document).ready(function(){
    // Show hide popover
    $("#usersvg").mouseover(function(){
        $(".overlay1").fadeIn(300);
        $(".verticalmenu").css("display","block");
        $("#usercolor").css("color","orangered");

    });
    });
  
  
  $(document).ready(function(){
  $('.verticalmenu ,.tooltip').on("mouseleave",function(){
    $("#usercolor").css("color","black");
    $(".verticalmenu").fadeOut(300);
    $(".overlay1").css("display","none");
  });
  });
  
  
  $(document).ready(function(){
    // Show hide popover
    $("#morebtn").mouseover(function(){
        $(".overlay2").fadeIn(300);

        $(".verticalmenu").css("display","block");
        $("#morecolor").css("color","orangered");
       
    });
  });   
  
  $(document).ready(function(){
  $('.verticalmenu,.tooltip1').on("mouseleave",function(){
    $(".verticalmenu").fadeOut(300);
    $("#morecolor").css("color","black");
    $(".overlay2").css("display","none");
  });
  });

/* THIS IS FOR THE NOTIFICATION BOX*/
$(document).ready(function(){
  // Show hide popover
  $("#usernoti").mouseover(function(){
      $(".tooltipopt2").fadeIn(100);
      $(".overlay").css("display","block");

      $("#notisvg").css("color","orangered");
      
  });
  });


$(document).ready(function(){
$('.tooltipopt2 ,.tooltip').on("mouseleave",function(){
  $("#notisvg").css("color","black");
  $(".tooltipopt2").fadeOut(300);
  $(".overlay").css("display","none");
});
});


  /* FOR SIDE NAV */
  
    $(document).ready(function(){
     $('#opensidenav').click(function(){
        $('#sidenav').addClass( "enter");
        $('#sidenav').css("transition:0.3s");
        $("#backover").css("display","block");
        
     });
     });
     $(document).ready(function(){
      $('#closenav').click(function(){
         $('#sidenav').removeClass("enter");
        $("#backover").css("display","none");
      });
      });
     $(document).ready(function(){
      $('#backover').click(function(){
         $('#sidenav').removeClass("enter");
         $("#backover").css("display","none");
      });
    });


  
  $(document).ready(function(){
    // Show hide popover
    $("#electro").mouseover(function(){
        $("#navbox1").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('.toolnav,#navbox1').on("mouseleave",function(){
    $("#navbox1").fadeOut(100);
  });
  });


  $(document).ready(function(){
    // Show hide popover
    $("#home").mouseover(function(){
        $("#navbox2").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#home,#navbox2').on("mouseleave",function(){
    $("#navbox2").fadeOut(100);
  });
  });

  $(document).ready(function(){
    // Show hide popover
    $("#men").mouseover(function(){
        $("#navbox3").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#men,#navbox3').on("mouseleave",function(){
    $("#navbox3").fadeOut(100);
  });
  });

  $(document).ready(function(){
    // Show hide popover
    $("#women").mouseover(function(){
        $("#navbox4").fadeIn(100);
    });
  });   
  
  $(document).ready(function(){
  $('#women,#navbox4').on("mouseleave",function(){
    $("#navbox4").fadeOut(100);
  });
  });

  $(document).ready(function(){
    // Show hide popover
    $("#baby").mouseover(function(){
        $("#navbox5").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#baby,#navbox5').on("mouseleave",function(){
    $("#navbox5").fadeOut(100);
  });
  });


  $(document).ready(function(){
    // Show hide popover
    $("#homeapp").mouseover(function(){
        $("#navbox6").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#homeapp,#navbox6').on("mouseleave",function(){
    $("#navbox6").fadeOut(100);
  });
  });
  
  $(document).ready(function(){
    // Show hide popover
    $("#sports").mouseover(function(){
        $("#navbox7").fadeIn(100);
       
    });
  });   
  
  $(document).ready(function(){
  $('#sports,#navbox7').on("mouseleave",function(){
    $("#navbox7").fadeOut(100);
  });
  });
  
  $(document).ready(function(){
    // Show hide popover
    $("#contest").mouseover(function(){
        $("#navbox8").fadeIn(100);
    });
  });   
  
  $(document).ready(function(){
  $('#contest,#navbox8').on("mouseleave",function(){
    $("#navbox8").fadeOut(100);
  });
  });
  

  

