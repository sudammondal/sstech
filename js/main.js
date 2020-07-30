$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixedMenu");
        } else {
            $(".header").removeClass("fixedMenu");
        }

    });

    function isoTopActive() {
        // Iso top js


        $(".filtering_item_wrap").isotope({
            itemSelector: '.filter_item',
            layoutMode: 'fitRows'
        });

        var isOacTive = $('.parteflo_button button').click(function () {
            $(".parteflo_button button").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".filtering_item_wrap").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

    }
    isoTopActive();
	
	jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

    /*---------LIGHT-BOX js-----------*/

    function lightBoxImages() {

        var selectorG = '.icon_link';
        if($(selectorG).length){
            var instanceG = $(selectorG).imageLightbox({
                quitOnDocClick:	false,
                button:         true,
                activity:       true,
                overlay:        true,
                arrows:         true,
                preloadNext:    true,
            });		
        }
    }

    lightBoxImages();

});