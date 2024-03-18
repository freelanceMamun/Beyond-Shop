(function ($) {
  'use strict';

  $(window).on('load', function () {
    // ------- Prealoder ------
    $('#preloader').delay(300).fadeOut('slow');
  });

  $(document).ready(function () {
    // ------------- sticky header --------------

    function sticky_header() {
      var wind = $(window);
      var sticky = $('header');
      wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
          sticky.removeClass('sticky');
        } else {
          sticky.addClass('sticky');
        }
      });
    }

    // ------------- back to top --------------

    // $(window).on('scroll', function () {
    //   if ($(this).scrollTop() > 600) {
    //     $('.back-to-top').fadeIn(200);
    //   } else {
    //     $('.back-to-top').fadeOut(200);
    //   }
    // });

    // $('.back-to-top').on('click', function (event) {
    //   event.preventDefault();
    //   $('html, body').animate(
    //     {
    //       scrollTop: 0,
    //     },
    //     1500
    //   );
    // });

    // ------------- Hamburger menu --------------

    // $('.hamburger-menu').on('click', function () {
    //   $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
    //   $('.hamburger-menu .line-center').toggleClass('current');
    //   $('.hamburger-menu .line-bottom').toggleClass('current');
    // });

    // ------------- slider --------------

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        390: {
          items: 1,
        },
        575: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
      },
      navText: [
        "<i class='fa-solid fa-chevron-left'></i>",
        "<i class='fa-solid fa-chevron-right'></i>",
      ],
    });
  });
})(jQuery);

// ====== Language Dropdowen

// const dropdowenelement = document.querySelector('.drop_element');

// const LanguageBtn = document.querySelector('.dropdown-toggle');

// LanguageBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (!dropdowenelement.classList.contains('active-dropdown')) {
//     dropdowenelement.classList.add('active-dropdown');
//   } else {
//     dropdowenelement.classList.remove('active-dropdown');
//   }
// });

// =======  Carousel Slider

const select = document.querySelector('.select');
const options_list = document.querySelector('.options-list');
const options = document.querySelectorAll('.option');

//show & hide options list
select.addEventListener('click', () => {
  options_list.classList.toggle('active');
});

const element = `<span>
<img src="img/Ellipse-2.svg" style="width: 20px" alt="">
EN
</span>`;

const element2 = `
<div class="option">
                      <img src="img/Flag_of_Canada_(leaf).svg.png" style="width: 20px ; padding-right: 2px" alt="">
                      <span>CN</span>
                    </div>`;

//select option
options.forEach((option) => {
  option.addEventListener('click', () => {
    options.forEach((option) => {
      option.classList.remove('selected');
    });

    select.querySelector('span').innerHTML = option.innerHTML;

    if (!options_list.classList.contains('active')) {
      options_list.classList.add('active');
      option.innerHTML = element2;
    } else {
      options_list.classList.remove('active');
      option.innerHTML = element;
    }

    option.classList.add('selected');
  });
});

// ===== Wishlist Action Toggle

const wishlistButton = document.querySelectorAll('.save-wisthlist');

console.log(wishlistButton);

wishlistButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (!button.classList.contains('active-button')) {
      button.classList.add('active-button');
    } else {
      button.classList.remove('active-button');
    }
  });
});

// -============= Active Category

// const CategoryList = document.querySelectorAll('.categories-list  ul li a');

// CategoryList.forEach((button)=>{
//   button.addEventListener('click',(e)=>)
// })

const dropdownItems = document.querySelectorAll('.categories-list  ul li a');

dropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    const showDropdown = document.querySelector('.active');

    toggleItem(item);
    // Remove the show-dropdown class from other items
    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown);
    }
  });
});

const toggleItem = (item) => {
  // 3.1. Select each dropdown content

  if (item.classList.contains('active')) {
    item.classList.remove('active');
  } else {
    item.classList.add('active');
  }
};

// const list = document.querySelectorAll('.nav__item');
// list.forEach((item) => {
//   item.addEventListener('click', () => {
//     list.forEach((item) => item.classList.remove('active'));
//     item.classList.add('active');
//   });
// });
