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