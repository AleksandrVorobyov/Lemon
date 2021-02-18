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

window.onscroll = function showHeader() {
    if (window.innerWidth < 720) {
        const nav = document.getElementById('nav');
        if (window.pageYOffset > 200) {
            nav.classList.add('nav--fixed');
        } else {
            nav.classList.remove('nav--fixed');
        }
    }
}

const burger = document.getElementById('nav-burger');
const sidebar = document.getElementById('sidebar');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
    this.classList.toggle('nav__burger--active');
    sidebar.classList.toggle('sidebar--active');
    body.classList.toggle('body--hidden');
})

const sidebarBtn = document.querySelectorAll('[data-sidebar-btn]');
sidebarBtn.forEach( function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('sidebar__table-col-link--active');
        let sidebarTable = this.closest('.sidebar__table-col-item');
        sidebarTable.querySelector('.sidebar__table-sublinks').classList.toggle('sidebar__table-sublinks--active');
    })
})
