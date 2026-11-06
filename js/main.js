import { getProductData } from "./api.js";

let Products = [];
Products = await getProductData();

function search() {
    const searched = [];
    const searchInput = document.getElementById('searchBar').value.toLowerCase().trim();
    for (let i = 0; i < Products.length; i++) {
        if (Products[i].name.toLowerCase().includes(searchInput)) {
            searched.push(Products[i]);
        }
    }
    return searched;
}

let currentPage = 1
function pagination(list) {
    const select = document.getElementById('productPerPage');
    let productsPage = Number(select.value)
    let pages = Math.ceil(list.length / productsPage)
    if (currentPage > pages) currentPage = pages
    let start = (currentPage - 1) * productsPage
    let end = currentPage * productsPage
    const pagination_items = list.slice(start, end)
    return { pagination_items, pages, start }
}

function displayProducts(Products) {
    let cataloge = document.getElementById("catalogue");
    cataloge.innerHTML = Products.map(Product => {
        return `<div class="flex flex-col w-[318px]  bg-[#FFFFFF] shadow rounded-md transition" draggable="true">
                        <div>
                            <img src="${Product.img}" alt="${Product.name}" class="rounded-md">
                        </div>
                        <div class="flex flex-col gap-3 p-4">
                            <div class="flex flex-row items-center justify-between">
                                <span class="font-sans font-light text-lg">${Product.categorie}</span>
                                <svg width="8" height="15" viewBox="0 0 8 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.167 7.166C2.167 7.62619 1.79383 7.99925 1.3335 7.99925C0.873171 7.99925 0.5 7.62619 0.5 7.166C0.5 6.70581 0.873171 6.33275 1.3335 6.33275C1.79383 6.33275 2.167 6.70581 2.167 7.166ZM2.167 1.33325C2.167 1.79344 1.79383 2.1665 1.3335 2.1665C0.873171 2.1665 0.5 1.79344 0.5 1.33325C0.5 0.873059 0.873171 0.5 1.3335 0.5C1.79383 0.5 2.167 0.873059 2.167 1.33325ZM2.167 12.9987C2.167 13.4589 1.79383 13.832 1.3335 13.832C0.873171 13.832 0.5 13.4589 0.5 12.9987C0.5 12.5386 0.873171 12.1655 1.3335 12.1655C1.79383 12.1655 2.167 12.5386 2.167 12.9987ZM7.168 7.166C7.168 7.62619 6.79483 7.99925 6.3345 7.99925C5.87417 7.99925 5.501 7.62619 5.501 7.166C5.501 6.70581 5.87417 6.33275 6.3345 6.33275C6.79483 6.33275 7.168 6.70581 7.168 7.166ZM7.168 1.33325C7.168 1.79344 6.79483 2.1665 6.3345 2.1665C5.87417 2.1665 5.501 1.79344 5.501 1.33325C5.501 0.873059 5.87417 0.5 6.3345 0.5C6.79483 0.5 7.168 0.873059 7.168 1.33325ZM7.168 12.9987C7.168 13.4589 6.79483 13.832 6.3345 13.832C5.87417 13.832 5.501 13.4589 5.501 12.9987C5.501 12.5386 5.87417 12.1655 6.3345 12.1655C6.79483 12.1655 7.168 12.5386 7.168 12.9987Z"
                                        stroke-linecap="round" stroke="#64748B" />
                                </svg>
                            </div>
                            <h2 class="font-sans text-xl">${Product.name}</h2>
                            <strong class="font-sans font-bold text-xl">${Product.price} DH</strong>
                            <div class="flex flex-row justify-between">
                                <button
                                    class="flex items-center justify-center h-[36px] w-[65.5px] border border-[#4B567C] text-[#4B567C] rounded-md hover:border-[#DC2626] hover:text-[#DC2626] hover:bg-[#FEF2F2] cursor-pointer">S</button>
                                <button
                                    class="flex items-center justify-center h-[36px] w-[65.5px] border border-[#4B567C] text-[#4B567C] rounded-md hover:border-[#DC2626] hover:text-[#DC2626] hover:bg-[#FEF2F2] cursor-pointer">M</button>
                                <button
                                    class="flex items-center justify-center h-[36px] w-[65.5px] border border-[#4B567C] text-[#4B567C] rounded-md hover:border-[#DC2626] hover:text-[#DC2626] hover:bg-[#FEF2F2] cursor-pointer">L</button>
                                <button
                                    class="flex items-center justify-center h-[36px] w-[65.5px] border border-[#4B567C] text-[#4B567C] rounded-md hover:border-[#DC2626] hover:text-[#DC2626] hover:bg-[#FEF2F2] cursor-pointer">XL</button>
                            </div>
                            <button
                                class=" flex flex-row justify-center items-center rounded-md h-[44px] bg-[#DC2626] gap-4 text-white">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.5 5.7506H5.7506M5.7506 5.7506H11.0012M5.7506 5.7506V0.5M5.7506 5.7506V11.0012"
                                        stroke-linecap="round" stroke="white" />
                                </svg>
                                <span>Add to cart</span>
                            </button>
                        </div>
                    </div>
                    `
    }).join('');
}

document.getElementById('searchBar').addEventListener('input', () => {
    displayProducts(search());
});

displayProducts(Products);