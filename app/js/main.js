$('.title-menu__button').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.title-menu__list').slideToggle(200).toggleClass('active');
});

$('.tab').on('click', function(e){
    e.preventDefault();  
    
    $($(this).parent().find('.tab')).removeClass('active');

    let thistitleMenu = $($(this).find('.project-page__title-menu'));

    let titleMenu = $($(this).parent().siblings().find('.project-page__title-menu'));

    if(titleMenu.hasClass('active')){ 
        titleMenu.removeClass('active');       
        titleMenu.slideUp(200);        
    } else {

    }

    $($(this).parent().siblings().find('.tab-content')).removeClass('active');  
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
    
  });

  $('.project-tasks__button-toggle').click(function(){
    $(this).toggleClass('hide');
    $(this).parent().next().slideToggle(300);
  });