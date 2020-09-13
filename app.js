$(document).ready(function(){
    var scrollLink = $('.scroll');
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
    $('#sun').addClass('inactive');
    $('#moon').on('click',function(){
        $('body').addClass('dark');
        $('body').addClass('light-text');
        $('#moon').addClass('inactive');
        $('#sun').removeClass('inactive');
        $('header').addClass('dark');
        $('.card-body').addClass('dark');
        $('.list-group li').addClass('dark-text');
    });
    $('#sun').click(function(){
        $('body').removeClass('dark');
        $('body').removeClass('light-text');
        $('#moon').removeClass('inactive');
        $('#sun').addClass('inactive');
        $('header').removeClass('dark');
        $('.card-body').removeClass('dark');
    });
    $('.burger').click(function(){
        $('nav').toggleClass('links-activated');
        $('section').toggleClass('display-none');
    });
    $('.why-form-spree small').click(function(){
      $('.modal-bg').addClass('modal-active');
    });
    $('.modal-bg').click(function(){
      $('.modal-bg').removeClass('modal-active');
      $('body').removeClass('unfocussed');
    });
    const screenWidth = window.innerWidth;
    if(screenWidth<380){
        $('.welcome-section').css({'height':'150vh','width':'100%'});
        $('.technologies-section').css({'height':'230vh','width':'100%'});
        $('.myskills-section').css({'height':'230vh','width':'100%'});
        if(screenWidth<=320){
          $('header').css('height','6vh');
          alert('Your device is too small! Some sections of the website will not be displayed!');
          $('header h2,h4').css('display','none');      
          $('.technologies-image').addClass('display-none');        
      }
    }
});
const texts = ['George ', 'Tananis '];
let c = 0;
let i = 0;
let currentText = '';
let letter = 0;
(function type(){
  if(c === texts.length){
    c = 0;
  }
  currentText = texts[c];
  letter = currentText.slice(0,++i);
  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length){
    c++;
    i = 0;
  }
  setTimeout(type,400);
}());
