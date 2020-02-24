// gnb
$(function(){
  // 마우스 오버시 메뉴 열림
  $('#main_gnb').mouseover(function(){
    // class추가되면 보임
    $('.depth2').addClass('show');
    $('#ex').addClass('show');
  });

  // 마우스가 나가면 메뉴 닫힘
  $('#main_gnb').mouseout(function(){
    $('.depth2').removeClass('show');
    $('#ex').removeClass('show');
  });

});

// bxslider
$(function(){
  $('.bxslider').bxSlider({
    pager: false,
    pause: 4000,            // 정지시간(대기)
    auto: true,             // 자동재생
    easing: "ease-in-out"  // 가속도(timing-function)
  });
});

$(function(){
  $('.slide').bxSlider({
    pager: false,
  });
});