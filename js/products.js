import { getProductData } from "./api.js";
import { loadProducts, saveProducts } from "./storage.js";


export const Products = loadProducts() || await getProductData();

export function search() {
    const searched = [];
    const searchInput = document.getElementById('searchBar').value.toLowerCase().trim();
    for (let i = 0; i < Products.length; i++) {
        if (Products[i].name.toLowerCase().includes(searchInput)) {
            searched.push(Products[i]);
        }
    }
    return searched;
}

export function filter(list) {
    const option = document.getElementById('filter').value;
    const res = [];
    list.forEach(product => {
        if (option === "All" || product.categorie === option) {
            res.push(product);
        }
    });
    return res;
}
export let currentPage = 1;

export function setCurrentPage(page) {
    currentPage = page;
}

export function pagination(list) {
    const select = document.getElementById('productPerPage');
    let productsPage = Number(select.value)
    let pages = Math.ceil(list.length / productsPage)
    if (currentPage > pages) {
        currentPage = pages
    }
    let start = (currentPage - 1) * productsPage
    let end = currentPage * productsPage
    const pagination_items = list.slice(start, end)
    return { pagination_items, pages, start }
}

export function addProduct() {
    const categorie = document.querySelector('input[name="category"]:checked');
    const name = document.getElementById('Name');
    const price = document.getElementById('Price');

    let product = {
        "id": Date.now(),
        "img": "img/Product photo.png",
        "categorie": categorie.value,
        "name": name.value.trim(),
        "price": Number(price.value)
    }
    Products.push(product);
    saveProducts(Products);
}