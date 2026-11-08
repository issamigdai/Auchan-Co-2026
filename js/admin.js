import { addProduct } from "./products.js";
import { Products } from "./products.js";
import { displayAdminTable } from "./ui.js";

const stock = document.getElementById('stock');
const N = document.getElementById('productN');
stock.textContent = Products.length
N.textContent = Products.length

const btnAdd = document.getElementById('AddProduct');
const form = document.getElementById('popupdiv');

btnAdd.addEventListener('click', () => {
    form.classList.remove('hidden');
});

document.getElementById('Annuler').addEventListener('click', () => {
    form.classList.add('hidden');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addProduct();
    displayAdminTable(Products);
    form.reset();
    form.classList.add('hidden');
});

displayAdminTable(Products);