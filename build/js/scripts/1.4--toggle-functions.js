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