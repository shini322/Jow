$('.title-menu__button').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.title-menu__list').toggleClass('active');
    $(this).next().find('.title-menu__list-button').click(function(){
        $(this).parent().parent().removeClass('active');
        $(this).parent().parent().prev().removeClass('active');
    });
});

$(document).mouseup(function (e){ 
    var div = $(".title-menu"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
        div.removeClass('active'); 
        div.find('.title-menu__list').removeClass('active'); 
        div.find('.title-menu__button').removeClass('active');
    }
});

// $(document).mouseup(function (e) {
//     var container = $(".project-page__title-menu");
//     if (container.has(e.target).length === 0){
//         container.removeClass('active');
//         container.prev().removeClass('active');
//     }
// });

$('.search-page__condition').click(function(){
    $(this).find('.search-page__condition-button').toggleClass('active');
    $(this).parent().find('.title-menu__list').slideToggle(0).toggleClass('active');
    $(this).next().find('.title-menu__list-button').click(function(){
        $(this).parent().parent().slideUp(0).removeClass('active');
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


$('.view__item').on('click', function(e){
    e.preventDefault();  
    $($(this).parent().find('.tab')).removeClass('active');    
    $($(this).parent().parent().parent().next().find('.tab-content')).removeClass('active');  
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');    
  });


$('.tab').on('click', function(e){
    e.preventDefault();  
    
    $($(this).parent().find('.tab')).removeClass('active');
    
    $($(this).parent().siblings().find('.tab-content')).removeClass('active');  
    $(this).addClass('active');
    // if($(this).hasClass("active")){
    //     $(this).find('.title-menu__list').slideUp();
    // }
    $($(this).attr('href')).addClass('active');
    if($(this).attr("href") == '#budget'){
        $('.project-budget-calc').addClass('active');
    } else{
        $('.project-budget-calc').removeClass('active');
    }
    if($(this).attr("href") == '#weeks'){
        $('.timesheets__weeks-start').addClass('active');
    } else{
        $('.timesheets__weeks-start').removeClass('active');
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

$('.register__form').validate({
  messages:{
      email: {
          required: "Please, enter valid e-mail.",
      }
  }

}
);

$('.project-edit__dropdown-button').click(function (){
    $(this).toggleClass('open');
    $(this).find('.project-edit__dropdown').toggleClass('open');
});

const notificationNew = document.querySelectorAll('.notifications__sticker');

notificationNew.forEach((item) => {
    item.addEventListener('click', (e)=>{
        e.target.remove();
    });
});

$('.files-table__tr').click(function(e){
    let x = e.pageX;
    let y = e.pageY;
    $(this).find('.title-menu').toggleClass('active').css({top:y, left:x}).dblclick();
    
});

$('.projects-table__th').click(function(){
    $(this).toggleClass('active');
});


$('.search-filters__input').keyup(function(){
    var $page = $('.search-results__list-item');
    $page.each(function(i,a){
          $a = $(a);
        $a.html($a.html().replace(/<span>/g,"").replace(/\<\/span\>/g,""));
      });
    var searchedText = $('.search-filters__input').val();
    
    if(searchedText != ""){
      $page.each(function(i,a){
        $a = $(a);
        var html = $a.text().replace(new RegExp("("+searchedText+")", "igm"), "<span>$1</span>");
        $a.html(html);
      });
  
    }
  });

  $('.search__input').keyup(function(){
    var $page = $('.search__list-link');
    $page.each(function(i,a){
          $a = $(a);
        $a.html($a.html().replace(/<span>/g,"").replace(/\<\/span\>/g,""));
      });
    var searchedText = $('.search__input').val();
    
    if(searchedText != ""){
      $page.each(function(i,a){
        $a = $(a);
        var html = $a.text().replace(new RegExp("("+searchedText+")", "igm"), "<span>$1</span>");
        $a.html(html);
      });
  
    }
  });

  $('.search__input').focus(function(){
    $(this).addClass('active');
    $(this).next().addClass('active');
  });
  $('.search__input').blur(function(){
    $(this).removeClass('active');
    $(this).next().removeClass('active');
  });

  $( '.projects-page__timeline-td' ).sortable({
    // handle: '.handle'
  });

  // const loginTab = document.querySelectorAll('.login__title-tab'),
  //       loginTitle = document.querySelectorAll('.login__title');
  
  // loginTitle.forEach((item) =>{
  //   item.addEventListener('click', (e)=>{
  //     e.preventDefault();
  //     if(e.target && e.target.matches('.login__title-tab[href="#signup"]')){
  //       let login = document.querySelector('.login__title-tab--active[href="#login"]');
  //       let text = e.target.textContent;
  //       e.target.textContent = login.textContent;
  //       login.textContent = text;
  //     }
  //     if(e.target && e.target.matches('.login__title-tab[href="#login"]') && e.target.classList.contains('active')){
  //       let signup = document.querySelector('.login__title-tab--active[href="#signup"]');
  //       let text = e.target.textContent;
  //       e.target.textContent = signup.textContent;
  //       signup.textContent = text;
  //     }
  //   });
  // });

  $('.login__title').on('click', 'span:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.login__tabs-container').find('.login__tab-container').removeClass('active').eq($(this).index()).addClass('active');
  });