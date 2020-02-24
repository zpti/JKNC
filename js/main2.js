// main.js
$(function(){
  
  // toggle gnb 메뉴
  $('#toggle').click(function(){
    $('.nav_group').toggleClass('show');
  });


  /*** SNS slider ***/
  // bx slider option
  var settings1 = {
    minSlides: 5,
    maxSlides: 5,
    moveSlides: 1,
    slideWidth: 1920,
  };

  var settings2 = {
    minSlides: 2,
    maxSlides: 2,
    moveSlides: 1,
    slideWidth: 1920,
  };

  // 최초 실행시 화면 크기별 슬라이더 칼럼수 설정
  var width = window.innerWidth;
  var slider;
  
  // 이미지 로드 채크
    imagesLoaded( document.querySelector('.slider'), function() {
      console.log('all images are loaded');
       // 화면 크기가 768 보다 크면 setting1 아니면 setting2
      (width > 767) ? 
      slider = $('#sns .slider').bxSlider(settings1) :
      slider = $('#sns .slider').bxSlider(settings2)
    });

  // 창크기 변화시 슬라이더 설정 변경
  $(window).resize(function(){
    width = window.innerWidth;

    if(width > 767){
      slider.reloadSlider(settings1);
    } else {
      slider.reloadSlider(settings2);
    }
  });


}); // $end jquery