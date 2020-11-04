$(document).ready(function(){
    // Show hide popover
    $("#usersvg").mouseover(function(){
        $(".tooltipopt").fadeIn(100);
        $("#usercolor").css("color","orangered");
    });
    });
  
  
  $(document).ready(function(){
  $('.tooltipopt ,.tooltip').on("mouseleave",function(){
    $("#usercolor").css("color","black");
    $(".tooltipopt").fadeOut(300);
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
    $("#morecolor").css("color","black");
  });
  });

  /* FOR SIDE NAV */

 $(document).ready(function(){
 $('#closenav').click(function(){
    $('.sidenav').css('display','none');
    $('.sidenav').css("box-shadow","");
    $('#headopt').css("z-index","1");
   
 });
 });
 
 $sidebar = $('#mysidenav');
$( "body" ).click(function( event ) {
  var a  = $sidebar;
  if(a == event.target){
    $('.sidenav').css('display','none');
}
});


 

 $(document).ready(function(){
  $('#opensidenav').click(function(){
     $('.sidenav').css('display','block');
     $('.sidenav').css("box-shadow","1px 1px 2px 2px rgba(0, 0, 0, 0.253)");
    
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
  

  

