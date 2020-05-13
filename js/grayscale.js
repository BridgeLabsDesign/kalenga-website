$(document).ready(function () {
  $('#tile-one').hover(function () {
    $('#tile-one-link').addClass('active-tile');
    $('#tile-one').addClass('bolden');
  },
    function () {
      $('#tile-one-link').removeClass('active-tile');
      $('#tile-one').removeClass('bolden');
    });

  $('#tile-two').hover(function () {
    $('#tile-two-link').addClass('active-tile');
    $('#tile-two').addClass('bolden');

  },
    function () {
      $('#tile-two-link').removeClass('active-tile');
      $('#tile-two').removeClass('bolden');
    });
  $("#btn-play").on("click", function () {
    $('#home-header').removeClass('container');
    $('#home-header').removeClass('home-bg');
    $('#videoBG').addClass('videoActive');
    $('#videoBG').trigger('play');
    $('#header-container-playing').fadeOut(1);
    $('#header-container').fadeOut(500);
    $('#header-container-playing').removeClass('hide-element').fadeIn(1000);
  });

  $("#btn-stop").on("click", function () {
    $('#header-container-playing').fadeOut(500);
    $('#header-container').fadeIn(500);
    $('#header-container-playing').addClass('hide-element');
    $('#home-header').addClass('container');
    $('#home-header').addClass('home-bg');
    $('#videoBG').removeClass('videoActive');
    $('#videoBG').trigger('stop');
  });

  (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 70)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 100
    });

    // Collapse Navbar
    var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
        $("#mainNav").addClass("navbar-shrink");
        $("#musa-logo").attr("src", "../img/logo-black.png");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
        $("#musa-logo").attr("src", "../img/logo.png");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);



    var Shuffle = window.Shuffle;
    var element = document.querySelector('.my-shuffle-container');
    var sizer = element.querySelector('.my-sizer-element');

    var shuffleInstance = new Shuffle(element, {
      itemSelector: '.picture-item',
      sizer: sizer // could also be a selector: '.my-sizer-element'
    });
    // shuffleInstance.filter('animal');
    $("#all").on("click", function () {
      shuffleInstance.filter();
    });
    $("#btn-linkedin").on("click", function () {
      shuffleInstance.filter('linkedin');
    });
    $("#btn-youtube").on("click", function () {
      shuffleInstance.filter('youtube');
    });
    $("#btn-twitter").on("click", function () {
      shuffleInstance.filter('twitter');
    });
    $("#btn-soundcloud").on("click", function () {
      shuffleInstance.filter('soundcloud');
    });
    $("#btn-medium").on("click", function () {
      shuffleInstance.filter('medium');
    });

  })(jQuery); // End of use strict
});