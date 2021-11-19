	// menu
$('.burger-menu').on('click', function(e) {
  $('body').toggleClass("fixedbody");
  e.stopPropagation();
});

// onclick-faq-icon
$('.card-header').click(function() {
    $( this).toggleClass( "span" );
});





// singlePage nav-animation

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});

// scroll-top-button
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $("#scrollToTopBtn").fadeIn("slow");
    } else {
        $("#scrollToTopBtn").fadeOut("slow");
    }
});
$("#scrollToTopBtn").bind("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1200);
    return false;
});

// copyform-js
function copy() {
  var copyText = document.getElementById("copyClipboard");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  $('#copied-success').fadeIn(800);
  $('#copied-success').fadeOut(800);
}
















 // menu-newClass
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $(".smart-scroll").addClass("scrollUp");
    } else {
        $(".smart-scroll").removeClass("scrollUp");
    }
});






  //animation-particle
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);


  //progress
  var delay = 500;
  $(".progress-bar").each(function(i){
      $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: delay,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now)+'%');
          }
      });
  });

  // readmoreLess
   
    $( "#button-1" ).click(function() {
      $( "#moretext" ).slideToggle( "slow" );
      if ($('#button-1').text() == "Read more") {
        $(this).text("Read less")
      } else {
        $(this).text("Read more")
      }
    });



// important
//Change pos/background/padding/add shadow on nav when scroll event happens 

// $(function(){
//   var navbar = $('.navbar');
  
//   $(window).scroll(function(){
//     if($(window).scrollTop() <= 40){
//       navbar.removeClass('navbar-scroll');
//     } else {
//       navbar.addClass('navbar-scroll');
//     }
//   });
// });
