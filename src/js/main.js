if (window.innerWidth > 1150) {
    const navSearchBtn = document.getElementById('nav-search-btn');
    navSearchBtn.addEventListener('click', function() {
        this.classList.add('nav__btn--active');
    })
}

const navDropdownTitle = document.getElementById('dropdown-title');
const navDropdownLinks = document.getElementById('dropdown-links');

navDropdownTitle.addEventListener('mouseover', function() {
    navDropdownLinks.classList.add('nav__dropdown-wrap--active')
});

navDropdownLinks.addEventListener('mouseover', function() {
    navDropdownLinks.classList.add('nav__dropdown-wrap--active')
});

navDropdownTitle.addEventListener('mouseout', function() {
    navDropdownLinks.classList.remove('nav__dropdown-wrap--active')
});

navDropdownLinks.addEventListener('mouseout', function() {
    navDropdownLinks.classList.remove('nav__dropdown-wrap--active')
});