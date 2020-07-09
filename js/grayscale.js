$(document).ready(function () {


  $("#hamburger-toggle").on("click", function () {
    document.getElementById("myNav").style.width = "100%";
  });

  $(".closebtn").on("click", function () {
    document.getElementById("myNav").style.width = "0%";
  });

  $('#talk-1-expand').on("click", function () {
    if (!$(this).hasClass('expanded')) {
      $("#talk-1-expand").attr("src", "../img/contract-btn.png");
      $(this).addClass('expanded');
    } else {
      $("#talk-1-expand").attr("src", "../img/expand-btn.png");
      $(this).removeClass('expanded');
    }
    $('#text-1').fadeToggle(1000).removeClass('hide-display');
    $('#book-speaker-1').fadeToggle(1000).removeClass('hide-display');
  });

  $('#talk-2-expand').on("click", function () {
    if (!$(this).hasClass('expanded')) {
      $("#talk-2-expand").attr("src", "../img/contract-btn.png");
      $(this).addClass('expanded');
    } else {
      $("#talk-2-expand").attr("src", "../img/expand-btn.png");
      $(this).removeClass('expanded');
    }
    $('#text-2').fadeToggle(1000).removeClass('hide-display');
    $('#book-speaker-2').fadeToggle(1000).removeClass('hide-display');
  });

  $('#talk-3-expand').on("click", function () {
    if (!$(this).hasClass('expanded')) {
      $("#talk-3-expand").attr("src", "../img/contract-btn.png");
      $(this).addClass('expanded');
    } else {
      $("#talk-3-expand").attr("src", "../img/expand-btn.png");
      $(this).removeClass('expanded');
    }
    $('#text-3').fadeToggle(1000).removeClass('hide-display');
    $('#book-speaker-3').fadeToggle(1000).removeClass('hide-display');
  });

  $('#talk-4-expand').on("click", function () {
    if (!$(this).hasClass('expanded')) {
      $("#talk-4-expand").attr("src", "../img/contract-btn.png");
      $(this).addClass('expanded');
    } else {
      $("#talk-4-expand").attr("src", "../img/expand-btn.png");
      $(this).removeClass('expanded');
    }
    $('#text-4').fadeToggle(1000).removeClass('hide-display');
    $('#book-speaker-4').fadeToggle(1000).removeClass('hide-display');
  });

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
    $('#videoBG').trigger('pause');
    $('#videoBG').removeClass('videoActive');
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

    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);



    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {

      // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })



    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src', '');
    })



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