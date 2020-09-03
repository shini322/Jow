$('.title-menu__button').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.title-menu__list').slideToggle(200).toggleClass('active');
    $(this).next().find('.title-menu__list-button').click(function(){
        $(this).parent().parent().slideUp(200).removeClass('active');
        $(this).parent().parent().prev().removeClass('active');
    });
});

$('.tab').on('click', function(e){
    e.preventDefault();  
    
    $($(this).parent().find('.tab')).removeClass('active');

    // let thistitleMenu = $($(this).find('.project-page__title-menu'));

    // let titleMenu = $($(this).parent().siblings().find('.project-page__title-menu'));

    // if(titleMenu.hasClass('active')){ 
    //     titleMenu.removeClass('active');       
    //     titleMenu.slideUp(200);        
    // } else {

    // }

    $($(this).parent().siblings().find('.tab-content')).removeClass('active');  
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
    
  });

  $('.project-tasks__button-toggle').click(function(){
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

