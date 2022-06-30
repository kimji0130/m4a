"use strict";

$(document).ready(function(){
  
  /* mo_nav */
  $('.cdj_mo_nav .mo_nav .mo_nav_list_dep1 .item_dep1 > .link_text:not(.no_fold)').on('click', function (e){
    e.preventDefault()
    $(this).toggleClass('on').siblings('.mo_nav_list_dep2').stop(true,true).slideToggle();
    $(this).parent().siblings().children('.mo_nav_list_dep2').stop(true,true).slideUp();
    $(this).parent().siblings().children('.link_text').removeClass('on');
  });
  
  // document ready
  header_fix();
  
  // window scroll
  $(window).on('scroll', function(){
    header_fix();
  });
  
  // top banner closed
  $('.main_top_banner_close').on('click', function(){
    $(this).parents('.main_top_banner').addClass('hidden');
    
    header_fix();
  });
  
  function header_fix(){
    var scrTop = $(window).scrollTop();
    var $header = $('.cdj_header');
    var $bnr = $('.main_top_banner');
    var bnrH = $bnr.outerHeight();
    var $main = $('main.main');
    
    if ( $main.hasClass('main_contents') ) {
      if ( $bnr.hasClass('hidden') ) {
        $header.addClass('fixed');
      } else {
        if ( scrTop > bnrH ) {
          $header.addClass('fixed');
        } else {
          $header.removeClass('fixed');
        }
      }
    } else {
      $header.addClass('fixed sub_header');
    }
  }
  
  $('.cdj_header .wrapper .nav .nav_list_dep1 .item_dep1').on('mouseenter',function (){
    if ( $(this).hasClass('no-child') ) {
      $('.dim_bg').stop(true,true).fadeOut(100);
    } else {
      $('.dim_bg').stop(true,true).fadeIn(100);
    }
  });
  $('.cdj_header .wrapper .nav .nav_list_dep1').on('mouseleave',function (){
    $('.dim_bg').stop(true,true).fadeOut(100);
  });
  
  /* header scroll */
  $(window).on('scroll', function (){
    if ( $('.cdj_renew .main_banner').length > 0 ) {
      var scrTop = $(window).scrollTop();
      var mainBanOffBottom = $('.cdj_renew .main_banner').offset().top + $('.cdj_renew .main_banner').outerHeight();
      
      if ( scrTop > mainBanOffBottom ) {
        $('.cdj_header').addClass('scroll');
      } else {
        $('.cdj_header').removeClass('scroll');
      }
    }
  });
  
  var $iconMoNav = $('.cdj_header .wrapper .inner_box .right_box .nav_util .item .nav_util_icon.icon_mo_nav');
  var $moNavClose = $('.cdj_mo_nav .mo_nav_header .mo_nav_close');
  
  $iconMoNav.on('click',function (){
    $('.cdj_mo_nav').addClass('on');
    $('html, body').addClass('bg_noScroll');
  });
  
  $moNavClose.on('click',function (){
    $('.cdj_mo_nav').removeClass('on');
    $('html, body').removeClass('bg_noScroll');
  });
  
  
});

