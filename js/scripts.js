jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('nav.navbar').not('[keep=false]').addClass('sticky-nav');
                $('nav.navbar').addClass('sticky-nav');
            }
            else {
                $('nav.navbar').not('[keep=false]').removeClass('sticky-nav');
                $('nav.navbar').removeClass('sticky-nav');
            }
        });
    }());

    // Select all links with hashes
    $('a.smooth-scroll')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                }
            }
        });

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());

    // --------------------------------------------------------------------
    // Google Map
    // --------------------------------------------------------------------

    (function () {
        if ($('#googleMap').length > 0) {
            //set your google maps parameters
            var $latitude  = 41.156676, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
                $longitude = -8.643647,
                $map_zoom  = 18;
            /* ZOOM SETTING */

            //google map custom marker icon
            var $marker_url = 'img/google-map-marker.png';
            //var $marker_url = 'img/tip-marker.png';

            //we define here the style of the map
            var style = [{
                "stylers" : [{
                    "hue" : "#000"
                }, {
                    "saturation" : 100
                }, {
                    "gamma" : 1.15
                }, {
                    "lightness" : 5
                }]
            }];

            //set google map options
            var map_options = {
                center            : new google.maps.LatLng($latitude, $longitude),
                zoom              : $map_zoom,
                panControl        : true,
                zoomControl       : true,
                mapTypeControl    : false,
                streetViewControl : false,
                mapTypeId         : google.maps.MapTypeId.ROADMAP,
                scrollwheel       : true,
                stcyles2            : style,
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position : new google.maps.LatLng($latitude, $longitude),
                map      : map,
                visible  : true,
                icon     : $marker_url
            });
        }
    }());

}); // JQuery end
