$('.title-menu__button').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.title-menu__list').slideToggle(200).toggleClass('active');
    $(this).next().find('.title-menu__list-button').click(function(){
        $(this).parent().parent().slideUp(200).removeClass('active');
        $(this).parent().parent().prev().removeClass('active');
    });
});
$('.search-page__condition').click(function(){
    $(this).find('.search-page__condition-button').toggleClass('active');
    $(this).parent().find('.title-menu__list').slideToggle(200).toggleClass('active');
    $(this).next().find('.title-menu__list-button').click(function(){
        $(this).parent().parent().slideUp(200).removeClass('active');
        $(this).parent().parent().prev().removeClass('active');
    });
});
// $(document).mouseup(function (e) {
//     var container = $(".title-menu__list");
//     var container2 = $(".title-menu__button");
//     if (container.has(e.target).length === 0 && container2.has(e.target).length === 0){
//         container.slideUp(200);
//     }
// });

$('.tab').on('click', function(e){
    e.preventDefault();  
    
    $($(this).parent().find('.tab')).removeClass('active');   
    $(this).find('.title-menu__list').slideUp();
    $($(this).parent().siblings().find('.tab-content')).removeClass('active');  
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
    if($(this).attr("href") == '#budget'){
        $('.project-budget-calc').addClass('active');
    } else{
        $('.project-budget-calc').removeClass('active');
    }
    
  });


  $('.calendar-nav__tab').on('click', function(e){
    e.preventDefault();  
    
    $($(this).parent().find('.tab')).removeClass('active');
    if($(this).attr("href") == '#year'){
        $('.calendar-nav__slider--mouth').removeClass('active');
    } else{
        $('.calendar-nav__slider--mouth').addClass('active');
    }
    $($(this).parent().parent().parent().siblings().find('.tab-content')).removeClass('active');  
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
    
  });




  $('.view__item').on('click', function(e){
    $($(this).parent().find('.view__item')).removeClass('active'); 
    $(this).addClass('active');   
  });

  $('.project-tasks__button-toggle').click(function(){
    $(this).toggleClass('hide');
    $(this).parent().next().slideToggle(300);
  });
  $('.projects-table__button-toggle').click(function(){
    $(this).toggleClass('hide');
    $(this).parent().next().slideToggle(300);
  });



$('.datepicker').each(function(){
    $(this).datepicker({
        dateFormat: "dd M yy",
        firstDay: 1,
        currentText: "Now",
        monthNames: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ]
    });
    $( this ).datepicker( "setDate", $(this).attr("placeholder") );
    $( "#anim" ).on( "change", function() {
      $( this ).datepicker( "option", "showAnim", $( this ).val() );
      
    });
});

$('.project-tasks__td-list-open').click(function(){
    $(this).next().slideToggle(200);
});

$('.project-tasks__td-list-item').click(function(){
    $(this).parent().slideUp(200);
});

$('.project-tasks__assigned-to-button').click(function(){
    $(this).next().slideDown(200);
});

$(document).mouseup(function (e) {
    var container = $(".project-tasks__assigned-to");
    if (container.has(e.target).length === 0){
        container.slideUp(200);
    }
});

$(document).mouseup(function (e) {
    var container = $(".project-tasks__td-list");
    if (container.has(e.target).length === 0){
        container.slideUp(200);
    }
});

$('.nav-toggle').click(function(){
    $(this).toggleClass('opened')
    $('.menu-block').slideToggle()
});

$('.project-timeline__button-toggle-graphic').click(function(){
    $(this).toggleClass('hide')
    $(this).parent().parent().parent().nextAll('.project-timeline__tr-completed').slideToggle(0);
   
    
});


$('.select').niceSelect();

$('.login__form').validate({
    messages:{
        email: {
            required: "Please, enter valid e-mail.",
        }
    }

}
);
