

// <!-- tab script s -->
  $(document).ready(function(){

  $('ul.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
});

 //visual 영역 swipe
let thisSlide,
    autoPlayBtn,
    autoPlayState;
new Swiper('.swiper-container', {
  slidesPerView: 1,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  a11y: {
    prevSlideMessage: '이전 슬라이드',
    nextSlideMessage: '다음 슬라이드',
    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
  on: {
    init: function () {
      thisSlide = this;
      autoPlayBtn = document.querySelector('.wrap-autoplay-control > button');
      autoPlayBtn.addEventListener('click', (e) => {
        autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
        if (autoPlayState === 'false') {
          autoPlayBtn.setAttribute('aria-pressed', 'true');
          thisSlide.autoplay.stop();
        } else if (autoPlayState === 'true') {
          autoPlayBtn.setAttribute('aria-pressed', 'false');
          thisSlide.autoplay.start();
        };
      });
    },
  },
});

//hot movie
var swiper = new Swiper(".creat_play", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});


});

