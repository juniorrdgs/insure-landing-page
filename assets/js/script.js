let hambIcon = document.querySelector('.mobile-hamb');
let closeIcon = document.querySelector('.mobile-close');
let mobileMenu = document.querySelector('.mobile-nav');

const openMenu = () => {
    hambIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    mobileMenu.style.display = 'flex';
}

const closeMenu = () => {
    closeIcon.style.display = 'none';
    hambIcon.style.display = 'block';
    mobileMenu.style.display = 'none';
}