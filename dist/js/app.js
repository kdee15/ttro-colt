// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

jQuery(document).ready(function($) {
/*
 * JavaScript Templates Runtime
 * https://github.com/blueimp/JavaScript-Templates
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define */

;(function ($) {
    'use strict'
    var tmpl = function (id, data) {
        var f = tmpl.cache[id]
        return data ? f(data, tmpl) : function (data) {
            return f(data, tmpl)
        }
    }
    tmpl.cache = {}
    tmpl.encReg = /[<>&"'\x00]/g // eslint-disable-line no-control-regex
    tmpl.encMap = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
    }
    tmpl.encode = function (s) {
        return (s == null ? '' : '' + s).replace(
            tmpl.encReg,
            function (c) {
                return tmpl.encMap[c] || ''
            }
        )
    }
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return tmpl
        })
    } else if (typeof module === 'object' && module.exports) {
        module.exports = tmpl
    } else {
        $.tmpl = tmpl
    }
}(this))
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. MOBILE CLASS
// ==
// ====== INDEX  ======================================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------
    
  var deviceAgent = navigator.userAgent.toLowerCase();

  $('html').addClass('desktop');
  
  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('ios');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/android/)) {
    $('html').removeClass('desktop');
    $('html').addClass('android');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/blackberry/)) {
    $('html').removeClass('desktop');
    $('html').addClass('blackberry');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/(symbianos|^sonyericsson|^nokia|^samsung|^lg)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('mobile');
  }
    
// A.1. END -----------------------------------------------------------------------------------------------------------
  
// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. BURGER MENU
// == B. HOMEPAGE CAROUSEL
// ==
// ====== INDEX  ======================================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. BURGER MENU --------------------------------------------------------------------------------------------------- 
    
$('.reveal').click(function(e) {
    
    var target = $(this).attr('href');
    
    if ($(target).hasClass('hidden') ) {
        
        $(target).removeClass('hidden');
        $('.reveal').addClass('close');

    } else {
        
        $(target).addClass('hidden');
        $('.reveal').removeClass('close');

    }
    
    e.preventDefault();
    
  });
    
    
$('.c-hamburger').click(function(e) {
    
    var target = $(this).attr('href');
    
    if ($(target).hasClass('hidden') ) {
        
        $(target).removeClass('hidden');
        $('.c-hamburger').addClass('is-active');
        $('body').addClass('fixed');
        
    } else {
        
        $(target).addClass('hidden');
        $('.c-hamburger').removeClass('is-active');
        $('body').removeClass('fixed');
        
    }
    
    e.preventDefault();
    
  });
    
// A.1. END -----------------------------------------------------------------------------------------------------------
    
 
// A.2. END -----------------------------------------------------------------------------------------------------------

	// A.2.2. MODAL POPUPS ----------------------------------

	var modalContent = '';	
	$('.modal-open').on('click', function(){
			modalContent = $(this).attr('name');
			if($('#'+modalContent).hasClass('on')){
					$('#'+modalContent).removeClass('on');
					$('body').removeClass('modal-open');
			}else{
					hideAllContent();
					showmodalContent(modalContent);
			}
	});

	function hideAllContent(){
        $('.o-modal-full').removeClass('on');
        $('body').removeClass('modal-open');
	};
	
	function showmodalContent(modalContentDiv){
        $('#'+modalContentDiv).addClass('on');
        $('body').addClass('modal-open');
	};

	// A.2.2. END -------------------------------------------

// A.2. END -----------------------------------------------------------------------------------------------------------
    
// A.5. SCREEN SIZE CHECK ---------------------------------------------------------------------------------------------
    
	var screen = $( window ).width();
	console.log('I am a device, and my width is: ' + screen);
    
// A.5. END -----------------------------------------------------------------------------------------------------------
    
// A.3. SCROLL TO LINK ------------------------------------------------------------------------------------------------


// A.3. END -----------------------------------------------------------------------------------------------------------
    
// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.2. GENERAL SHOW --------------------------------------------------------------------------------------------------
    
$('.showhide').click(function(e) {
    
    var target = $(this).attr('href');
    
    if ($(target).hasClass('hidden') ) {
        
        $(target).removeClass('hidden');
        $('.showhide').addClass('close');
        
    } else {
        
        $(target).addClass('hidden');
        $('.showhide').removeClass('close');
        
    } 
     
    e.preventDefault(); 
    
  });
    
// A.2. END -----------------------------------------------------------------------------------------------------------
    
// A.2. END -----------------------------------------------------------------------------------------------------------

	// A.2.1. TOGGLE DIV ----------------------------

	var currentContent = '';	
	$('.toggle-div').on('click', function(){
			currentContent = $(this).attr('name');
			if($('#'+currentContent).hasClass('on')){
					$('#'+currentContent).removeClass('on');
					$('body').removeClass('modal-open');
			}else{
					hideAllContent();
					showCurrentContent(currentContent);
			}
	});

	function hideAllContent(){
        $('.toggle-content').removeClass('on');
        $('body').removeClass('modal-open');
	};
	
	function showCurrentContent(currentContentDiv){
        $('#'+currentContentDiv).addClass('on');
        $('body').addClass('modal-open');
	};

	// A.2.1. END -------------------------------------------

	// A.2.3. MOBILE SHOWHIDE -------------------------------

	(function($){
		if($('html').hasClass('mobile')){
			$('.a-config').on('click', function(){
				//e.preventDefault();
				if($('.a-config').hasClass('active')){
					$('.a-config').removeClass('active');
					$('body').removeClass('fixed');
				} else {
					$('.a-config').addClass('active');
					$('body').addClass('fixed');
				}
			});
		}
	})(jQuery)

	// A.2.3. END -------------------------------------------

// A.2. END -----------------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. SWIPER CAROUSEL
// ==
// ====== INDEX  ======================================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------

var mySwiper = new Swiper ('.features-carousel', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
})

// A.1. END -----------------------------------------------------------------------------------------------------------

// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------

var mySwiper = new Swiper ('.tips-carousel', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
})

// A.1. END -----------------------------------------------------------------------------------------------------------

// A.1. WITH NO LOOP DESKTOP ------------------------------------------------------------------------------------------

var mySwiper = new Swiper ('.no-loop', {

  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 15,
  noSwiping: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
      noSwiping: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
      loop: true,
      noSwiping: false,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      noSwiping: false,
    }
  }
})
// A.1. END -----------------------------------------------------------------------------------------------------------

// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------

var mySwiper = new Swiper ('.images-carousel', {

  direction: 'horizontal',
  loop: true,
  lazy: true,
  slidesPerView: 2,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
})
// A.1. END -----------------------------------------------------------------------------------------------------------

// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------

var mySwiper = new Swiper ('.single-carousel', {

  direction: 'horizontal',
  loop: true,
  lazy: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

var mySwiper = new Swiper ('.single-carousel-2', {

  direction: 'horizontal',
  loop: true,
  lazy: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  }
})
// A.1. END -----------------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.9. AUTO HEIGHT ---------------------------------------------------------------------------------------------------

/*
    http://codepen.io/micahgodbolt/pen/FgqLc

    Thanks to CSS Tricks for pointing out this bit of jQuery
    http://css-tricks.com/equal-height-blocks-in-rows/
    It's been modified into a function called at page load and then each time the page is resized.
    One large modification was to remove the set height before each new calculation.
*/

var equalheight;
equalheight = function (container) {
  var currentTallest = 0,
      currentRowStart = 0,
      topPosition = 0,
      currentDiv = 0,
      rowDivs = [],
      $el;
  $(container).each(function () {

    $el = $(this);
    $($el).height('auto');
    topPosition = $el.position().top;

    if (currentRowStart != topPosition) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPosition;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

$(document).ready(function() {

  equalheight('.tips-block .reason-card .m-card-title');
  equalheight('.features-block .reason-card .m-card-title');
  equalheight('.tips-block .reason-card .m-card-body');
  equalheight('.features-block .reason-card .m-card-body');

  if($(window).width() >= 767) {

    equalheight('.reasons-block .reason-card .m-card-title');
    equalheight('.reasons-block .reason-card .m-card-body');

  }

  if($(window).width() <= 767) {

    equalheight('.carousel-block .single-carousel .m-card-body');
    equalheight('.carousel-block .single-carousel-2 .m-card-body');

  }

});

$(window).resize(function() {

  equalheight('.tips-block .reason-card .m-card-title');
  equalheight('.features-block .reason-card .m-card-title');
  equalheight('.tips-block .reason-card .m-card-body');
  equalheight('.features-block .reason-card .m-card-body');

  if($(window).width() >= 767) {

    equalheight('.reasons-block .reason-card .m-card-title');
    equalheight('.reasons-block .reason-card .m-card-body');

  }

  if($(window).width() <= 767) {

    equalheight('.carousel-block .single-carousel .m-card-body');
    equalheight('.carousel-block .single-carousel-2 .m-card-body');

  }

});

// A.9. END -----------------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FILE END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});