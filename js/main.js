import { search, filter, pagination, currentPage, setCurrentPage } from "./products.js";
import { displayProducts, displayPageNumbers, displayAdminTable, Toggle } from "./ui.js";

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumbers = document.getElementById('pageNumbers');

function render() {
    const result = filter(search());
    const { pagination_items, pages } = pagination(result);
    displayProducts(pagination_items);
    displayPageNumbers(pages);
}


document.getElementById('searchBar').addEventListener('input', () => {
    setCurrentPage(1);
    render();
});

document.getElementById('filter').addEventListener('change', () => {
    setCurrentPage(1);
    render();
});

document.getElementById('productPerPage').addEventListener('change', () => {
    setCurrentPage(1);
    render();
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        render();
    } else {
        alert('you are in the first page !!!')
    }
});

nextBtn.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
    render();
});

pageNumbers.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-page]');
    if (!btn) return;
    setCurrentPage(Number(btn.dataset.page));
    render();
});

Toggle();
render();
