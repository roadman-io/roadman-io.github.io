(function () {
	"use strict";
	
	/*Datepicker*/
		$('.datepicker-here').datepicker({
		    language: 'en',
			dateFormat: 'dd/mm/yyyy',
			timeFormat: 'hh:ii aa'
		});

    jQuery(document).ready(function($){
		
		/*Home page main slider*/
		
        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: true,
			animateOut: 'fadeOut',
			responsive:{
				0:{
					nav:false,
					dots: true
				},
				767:{
					nav:true,
					dots: false
				},
				1000:{
					nav:true,
					dots: false
				}
			}
        });
        
        $(".homepage-slides").on("translate.owl.carousel", function(){
            $(".single-slide-item h3, .single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide-item .slide-btn, .single-slide-item h2").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".homepage-slides").on("translated.owl.carousel", function(){
            $(".single-slide-item h3, .single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide-item .slide-btn, .single-slide-item h2").addClass("animated fadeInDown").css("opacity", "1");
        });
		
		/*For mobile menu*/
		
		$("ul#navigation").slicknav({
            prependTo: ".mobile-menu-wrapper"
        });
		
		/*Home page1 Testimonial*/
		
		$(".testimonial").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: true
        });
		
		/*Home page2 Testimonial*/
		
		$(".testimonial2").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: true
        });
		
		/*Client Carousel*/
		
		$(".our-client").owlCarousel({
            items: 6,
            nav: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				380:{
					items:2,
					nav:true
				},
				600:{
					items:4,
					nav:false
				},
				1000:{
					items:6,
					nav:false
				}
			}
        });
		
		/*Wow animation*/

         new WOW().init();
		
		/*Tooltip*/
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip();
		});

		/*magnificPopup Start*/
		
		$(".single-popup, .gallery-group-popup2 a.latest-gallery").magnificPopup({
            type: 'image',
			mainClass: 'mfp-with-zoom',
			image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
			},
			gallery: {
			enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
			
        });
		
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			preloader: false,
			fixedContentPos: false,
			zoom: {
				enabled: true,
				duration: 300
			}
		});
		
		$('.gallery-group-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
		});
		
		/*scrollTop*/
		
		$('.scrollup').on('click',function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		
		/*On scroll*/
		
		$(window).on('scroll',function() {
		  if ($(this).scrollTop() > 0){  
			  $('header.for-sticky').addClass("sticky");
		     } else {
			  $('header.for-sticky').removeClass("sticky");
		   }
		   
		   if ($(this).scrollTop() > 300) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		   
		});
		
		
		/*Counter*/
		
		$('.counter').each(function() {
		  var $this = $(this),
			  countTo = $this.attr('data-count');
		  
		  $({ countNum: $this.text()}).animate({
			countNum: countTo
		  },
		
		  {
		
			duration: 8000,
			easing:'linear',
			step: function() {
			  $this.text(Math.floor(this.countNum));
			},
			complete: function() {
			  $this.text(this.countNum);
			}
		
		  });  
		  
		}); 

    });

    jQuery(window).on('load',function(){
		
		
        jQuery(".wshipping-site-preloader-wrapper").fadeOut(300);
		
		/*Gallery Filter*/
		
		 $(".simplefilter li").on("click", function() {
			$(".simplefilter li").removeClass("active");
			$(this).addClass("active");
		}); 
		$('.filtr-container').filterizr({
			animationDuration: 0.6,
			filter: "all",
			delay: 0,
			delayMode: 'progressive',
			easing: 'ease-out',
			filterOutCss: { // Filtering out animation
				opacity: 0,
				transform: 'scale(0.5)'
				},
			filterInCss: { // Filtering in animation
				opacity: 0,
				transform: 'scale(1)'
				},
				layout: 'sameSize',
				selector: '.filtr-container',
				setupControls: true
		});
		
    });
	
}(jQuery));	