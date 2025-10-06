const pages = document.querySelectorAll('.page');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  pages.forEach(page => {
    const boxTop = page.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      page.classList.add('visible');
    } else {
      page.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
