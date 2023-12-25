// Event listener for changing the navigation bar style on scroll
window.addEventListener
(
    'scroll', () =>
    {
        document.querySelector('nav').classList.toggle
        (
            'scrolled', window.scrollY > 0    
        );
    }
);

// Event listener for setting the theme on page load
window.addEventListener
(
    'load', () =>
    {
        document.body.className = window.localStorage.getItem('theme');
    }
);

// Swiper initialization
var swiper = new Swiper
(
    ".mySwiper",
    {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination:
        {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints:
        {
            599:
            {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1023:
            {
                slidesPerView: 3,
                spaceBetween: 60
            }
        }
    }
);

// DOM elements
var root = document.documentElement;

const theme_button = document.querySelector('.logo');
const theme_model = document.querySelector('.theme_panel');
const color_settings = document.querySelectorAll('.color_options span');
const light_mode = document.querySelector('.background-1');
const dark_mode = document.querySelector('.background-2');
const icon = document.querySelector('#favicon');

// Function to change favicon
const changeFavicon = (PrimaryHue) =>
{
    if (PrimaryHue === 210)
    {
        icon.href = 'mcn-icon-blue.svg';
    }
    
    else if (PrimaryHue === 710)
    {
        icon.href = 'mcn-icon-red.svg';
    }
    
    else if (PrimaryHue === 110)
    {
        icon.href = 'mcn-icon-green.svg';
    }
    
    else if (PrimaryHue === 1110)
    {
        icon.href = 'mcn-icon-orange.svg';
    }
    
    else if (PrimaryHue === 1710)
    {
        icon.href = 'mcn-icon-magenta.svg';
    }
    
    else if (PrimaryHue === 2210)
    {
        icon.href = 'mcn-icon-yellow.svg';
    }
};

// Event listener for color options
color_settings.forEach
(
    color =>
    {
        color.addEventListener
        (
            'click', () =>
            {
                if (color.classList.contains('color-1'))
                {
                    PrimaryHue = 210;
                }
                
                else if (color.classList.contains('color-2'))
                {
                    PrimaryHue = 710;
                }
                
                else if (color.classList.contains('color-3'))
                {
                    PrimaryHue = 110;
                }
                
                else if (color.classList.contains('color-4'))
                {
                    PrimaryHue = 1110;
                }
                
                else if (color.classList.contains('color-5'))
                {
                    PrimaryHue = 1710;
                }
                
                else if (color.classList.contains('color-6'))
                {
                    PrimaryHue = 2210;
                }

                changeFavicon(PrimaryHue);

                root.style.setProperty('--primary-color-hue', PrimaryHue);
            }
        );
    }
);

theme_button.addEventListener
(
    'click', () =>
    {
        theme_model.style.display = 'grid';
    }
);

theme_model.addEventListener
(
    'click', (e) =>
    {
        if (e.target.classList.contains('theme_panel'))
        {
            theme_model.style.display = 'none';
        }
    }
);

dark_mode.addEventListener
(
    'click', () =>
    {
        document.body.className = 'dark';
        window.localStorage.setItem('theme', 'dark');
    }
);

light_mode.addEventListener
(
    'click', () =>
    {
        document.body.className = 'light';
        window.localStorage.setItem('theme', 'light');
    }
);