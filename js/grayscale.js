

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(-41.291582, 174.770486));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-41.291582, 174.770486), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
    
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

   
}


var horizontalLine = document.getElementById("horizontal");
var verticalLine = document.getElementById("vertical");
var dot = document.getElementById("dot");
var outercircle = document.getElementById("outercircle");
var indicator = document.getElementById("indicator");

var track = function(e) {
  horizontalLine.y1.baseVal.value = e.clientY;
  horizontalLine.y2.baseVal.value = e.clientY;
  verticalLine.x1.baseVal.value = e.clientX;
  verticalLine.x2.baseVal.value = e.clientX;

  dot.cx.baseVal.value = e.clientX;
  dot.cy.baseVal.value = e.clientY;
  
  outercircle.cx.baseVal.value = e.clientX;
  outercircle.cy.baseVal.value = e.clientY;
  
  indicator.innerHTML = "x: " + e.clientX + " | y: " + e.clientY;
  //console.log(e.clientX,e.clientY);
}

window.addEventListener("mousemove", track);
window.addEventListener("touchmove", track);
//document.onmousemove = track();

//document.addEventListener("touchstart", function(e) {
//}