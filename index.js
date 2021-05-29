import './style.css';

const navElem = document.querySelector('#nav');
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector('#contents');
const contentItems = Array.from(contentsElem.children);

const scrollSpyObserver = new IntersectionObserver(
  entries => {
    const { target } = entries.find(entry => entry.isIntersecting) || {};
    const index = contentItems.indexOf(target);
    console.log(index);
    Array.from(navElem.children).forEach((item, i) => {
      if (i !== index) item.classList.remove('on');
      else item.classList.add('on');
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
);
contentItems.forEach(item => scrollSpyObserver.observe(item));

navElem.addEventListener('click', e => {
  const targetElem = e.target;
  if (targetElem.tagName === 'BUTTON') {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }
});
