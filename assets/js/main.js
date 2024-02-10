/*===========show nav menu=============== */
const navMenu =document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
    /* menu show*/
    /* validate if constant existe*/
    if (navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.toggle('show-menu');
        })
    }

    /* menu hidden*/
    /* validate if constant existe*/
    if (navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu');
        })
    }

/*===========change bg header============*/
const bgHeader = () =>{
    const header = document.getElementById('header');
    //when the scroll is greater than viewport height add the scrollheader to the header tag 
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader);

/*===========dark light theme============*/
const themeButton= document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme= 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
//obtien the current theme 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
// validate if user chose 
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedTheme=== 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
//activate / deactivate the theme button

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save the theme and the current icon 
    localStorage.setItem('theme', getCurrentTheme())
    localStorage.setItem('icon', getCurrentIcon())
})