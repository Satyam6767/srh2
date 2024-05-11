// popup

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    // Show popup on page load
    overlay.style.display = 'block';

    // Close popup when close button is clicked
    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    // Handle form submission
    document.getElementById('popupForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        console.log('Name:', name);
        console.log('Email:', email);
        overlay.style.display = 'none';
    });
});

$(document).ready(function () {

    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});





window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// -------------------------for country flag and mobile-------------------------------------

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


// -----------------------------for increasing number------------------------------------



document.addEventListener("DOMContentLoaded", function () {
    startCount('.count1', 350, 4000);
    startCount('.count2', 1080, 1000);
    startCount('.count3', 22, 5000);
});

function startCount(selector, maxValue, duration) {
    const countElement = document.querySelector(selector);
    const step = 1;
    let currentCount = 0;
    const interval = duration / (maxValue / step);
    let timer;

    timer = setInterval(function () {
        currentCount += step;
        countElement.textContent = currentCount;
        if (currentCount >= maxValue) {
            clearInterval(timer);
        }
    }, interval);
}


