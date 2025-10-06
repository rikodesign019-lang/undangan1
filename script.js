let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    pages[currentPage].classList.add('hidden');
    currentPage++;
    if (currentPage >= pages.length) currentPage = pages.length - 1;
    pages[currentPage].classList.remove('hidden');
    pages[currentPage].classList.add('active');
}

window.onload = () => {
    pages[0].classList.add('active');
};
