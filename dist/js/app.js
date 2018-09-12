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

	$('.scroll-to, .email-us, .home-link').click(function(event){

			event.preventDefault();
			// calculate destination place
			var dest=0;
			if($(this.hash).offset().top > $(document).height()-$(window).height()){
					dest=$(document).height()-$(window).height();
			}else{
					dest=$(this.hash).offset().top;
			}
			// go to destination
			$('html,body').animate({scrollTop:dest}, 1000,'swing');

			// BURGER MENU
			$('#mobi-nav').addClass('hide-nav');
			$('.burger').removeClass('is-active');

	});

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
     
// A.2. END -----------------------------------------------------------------------------------------------------------
    
	 
// A.2. END -----------------------------------------------------------------------------------------------------------
  
// A.4. SHOW HIDE LOGO ------------------------------------------------------------------------------------------------

	var t = $(".wrapper").offset().top;

	$(document).scroll(function(){

		if (document.documentElement.clientWidth > 300) { 

			// Hide the logo, and show as you scroll
			if($(this).scrollTop() > t)
			{   
				$('#masthead').addClass('not-top');
				$('.social-media').addClass('not-top');

			}else{
				$('#masthead').removeClass('not-top');
				$('.social-media').removeClass('not-top');
			}							
		}

	});

// A.4. END -----------------------------------------------------------------------------------------------------------
    
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
    equalheight = function(container){
        var currentTallest = 0,
            currentRowStart = 0,
            topPosition = 0,
            currentDiv = 0,
            rowDivs = [],
            $el;
        $(container).each(function() {

            $el = $(this);
            $($el).height('auto');
            topPosition = $el.position().top;

            if (currentRowStart != topPosition) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
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
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };

    $(window).load(function() {
        
        //equalheight('.section__articles .col-md-6');
        //equalheight('.section__articles .col-md-6 .article__body h3');
        
        if($(window).width() >= 480) {}
        
    });

    $(window).resize(function() {
        
        //equalheight('.section__articles .col-md-6');
        //equalheight('.section__articles .col-md-6 .article__body h3');
        
    });
    
// A.9. END -----------------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FILE END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});