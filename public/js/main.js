const btn = document.querySelector('.toggle');
const customNav = document.querySelector('.customNav');
const top_nav = document.querySelector('.top-nav');

btn.addEventListener('click', (event) => {
    const item = event.target;
    item.classList.toggle('show');
    if(item.classList.contains('show')) {
        customNav.classList.add('open');
        top_nav.classList.add('mob-nav');
    }
})
