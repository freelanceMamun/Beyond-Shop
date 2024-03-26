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

const select = document.querySelectorAll('.select');
const options_list = document.querySelector('.options-list');
const options = document.querySelectorAll('.option');

//show & hide options list
select.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const list = button.querySelector('.options-list .option img');

    const seleced = document.querySelector('.active-language');
    toggleLangu(button);

    languageCutton(button);
    // Remove the show-dropdown class from other items
    if (seleced && seleced !== button) {
      toggleItem(seleced);
    }
  });
});

const toggleLangu = (item) => {
  // 3.1. Select each dropdown content

  if (item.classList.contains('active-language')) {
    item.classList.remove('active-language');
  } else {
    item.classList.add('active-language');
  }
};

options.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const img = element.querySelector('img').attributes;
    const text = element.querySelector('span').innerText;
    const parentNode = element.parentNode.parentElement.querySelector('a');

    const prevdata = element.innerHTML;
    element.innerHTML = parentNode.innerHTML;
    parentNode.innerHTML = prevdata;
  });
});

let languageCutton = (button) => {};

// ===== Wishlist Action Toggle

const wishlistButton = document.querySelectorAll('.save-wisthlist');

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

// ======= Price range Shop filter  ======
const rangeInput = document.querySelectorAll('.range-input input'),
  priceInput = document.querySelectorAll('.price-input input'),
  range = document.querySelector('.slider .progress');
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === 'input-min') {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + '%';
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range-min') {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
    }
  });
});

// const shopSearchButton = document.querySelector('.search-btn');
// shopSearchButton.addEventListener('click', (e) => {
//   e.preventDefault('');
//   document.querySelector('.shop_search').classList.toggle('active-search-shop');
// });

//=== Active Navtigtion
