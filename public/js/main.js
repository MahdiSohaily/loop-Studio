const btn = document.querySelector('.toggle');
const customNav = document.querySelector('.customNav');
const top_nav = document.querySelector('.top-nav');

btn.addEventListener('click', (event) => {
  const item = event.target;
  item.classList.toggle('show');
  if (item.classList.contains('show')) {
    item.src = './images/icon-close.svg';
    customNav.classList.add('open');
    top_nav.classList.add('mob-nav');
  } else {
    item.src = './images/icon-hamburger.svg';
    customNav.classList.remove('open');
    top_nav.classList.remove('mob-nav');
  }
});
