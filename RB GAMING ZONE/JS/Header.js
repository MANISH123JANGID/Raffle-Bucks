$(document).ready(function(){
      $("#usercolor").css("color","white");
  });

  $(document).ready(function(){
    $("#mobilenav").css("color","orangered");
});

  $(document).ready(function(){
    $("#cart").css("color","white");
});
$(document).ready(function(){
  $("#morecolor").css("color","white");
});
$(document).ready(function(){
  $("#noti").css("color","white");
});
$(document).ready(function(){
    // Show hide popover
    $("#usersvg").mouseover(function(){
        $(".tooltipopt").fadeIn(100);
        $("#usercolor").css("color","orangered");
    });
    });
  
  
  $(document).ready(function(){
  $('.tooltipopt ,.tooltip').on("mouseleave",function(){
    $("#usercolor").css("color","white");
    $(".tooltipopt").fadeOut(300);
  });
  });

  $(document).ready(function(){
    // Show hide popover
    $("#pos1").mouseover(function(){
        $("#cart").css("color","orangered");
    });
    });
  
  
  $(document).ready(function(){
  $('#pos1').on("mouseleave",function(){
    $("#cart").css("color","white");
  });
  });

  $(document).ready(function(){
    // Show hide popover
    $("#pos2").mouseover(function(){
        $("#noti").css("color","orangered");
    });
    });
  
  
  $(document).ready(function(){
  $('#pos2').on("mouseleave",function(){
    $("#noti").css("color","white");
  });
  });
  
  $(document).ready(function(){
    // Show hide popover
    $("#morebtn").mouseover(function(){
        $(".tooltipopt1").fadeIn(100);
        $("#morecolor").css("color","orangered");
    });
  });   

  $(document).ready(function(){
  $('.tooltipopt1,.tooltip1').on("mouseleave",function(){
    $(".tooltipopt1").fadeOut(300);
    $("#morecolor").css("color","white");
  });
  });

  /* FOR SIDE NAV */

 $(document).ready(function(){
 $('#closenav').click(function(){
    $('#sidenav').removeClass("enter");
   $('#sidenav').css("box-shadow","");
    $('#headopt').css("z-index","1");
     
    
 });
 });
 $('body').on('click', function(){
 if( parseInt( $('#sidenav').css('left') ) == 0 ) {
     $('#sidenav').removeClass('enter');
  }
 });
//  $('#sidenav').on('click',function(event){
//  var id=$(this).attr(id);
//  alert(event.target);
  
//  if(id===event.target)
//  {
  
//  }
//  else{
//   $('#sidenav').removeClass('enter');
//  }
//  });

  
 $(document).ready(function(){
  $('#opensidenav').click(function(){
     $('#sidenav').addClass( "enter");
     $('#sidenav').css("box-shadow","1px 1px 2px 2px rgba(0, 0, 0, 0.253)");
     $('#sidenav').css("transition:0.3s");
     
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
  

  

