window.addEventListener
(
    'scroll', () =>
    {
        document.querySelector('nav').classList.toggle('scrolled',
        window.scrollY > 0)
    }
)

window.addEventListener
(
    'load', () =>
    {
        document.body.className = window.localStorage.getItem('theme');
    }
)

var swiper = new Swiper(".mySwiper",
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
)

var root = document.querySelector(':root');

const theme_button = document.querySelector('.logo');
const theme_model = document.querySelector('.theme_panel');

const color_settings = document.querySelectorAll('.color_options span')

const light_mode = document.querySelector('.background-1')
const dark_mode = document.querySelector('.background-2')

const red_theme = document.querySelector('.color-2')

const ViewThemeModel = () => {
        theme_model.style.display = 'grid';
}

const HideThemeModel = (e) => {
    if(e.target.classList.contains('theme_panel')){
        theme_model.style.display = 'none';
    }
}

dark_mode.addEventListener
(
    'click', () =>
    {
        let bodyclass = document.body.className;

        if(!bodyclass)
        {
            bodyclass = 'dark';
            document.body.className = bodyclass;

            window.localStorage.setItem('theme', bodyclass);
        }
        else
        {
            bodyclass = "dark";
            document.body.className = bodyclass;

            window.localStorage.setItem('theme', bodyclass);
        }
    }
);

light_mode.addEventListener
(
    'click', () =>
    {
        let bodyclass = document.body.className;

        if(!bodyclass)
        {
            bodyclass = 'light';
            document.body.className = bodyclass;

            window.localStorage.setItem('theme', bodyclass);
        }
        else
        {
            bodyclass = "light";
            document.body.className = bodyclass;

            window.localStorage.setItem('theme', bodyclass);
        }
    }
);

color_settings.forEach(color => {
    color.addEventListener('click', () => {
        let PrimaryHue
        if(color.classList.contains('color-1')){
            PrimaryHue = 210;
        } else if(color.classList.contains('color-2')){
            PrimaryHue = 710;
        } else if(color.classList.contains('color-3')){
            PrimaryHue = 110;
        } else if(color.classList.contains('color-4')){
            PrimaryHue = 1110;
        } else if(color.classList.contains('color-5')){
            PrimaryHue = 1710;
        } else if(color.classList.contains('color-6')){
            PrimaryHue = 2210;
        }

        root.style.setProperty('--primary-color-hue', PrimaryHue);
    })
})

theme_button.addEventListener('click', ViewThemeModel);
theme_model.addEventListener('click', HideThemeModel);