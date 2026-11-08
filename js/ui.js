import { currentPage } from "./products.js";

export function displayProducts(products) {
    let catalogue = document.getElementById("catalogue");
    let sizeButtonClass = "flex items-center justify-center h-[36px] w-[65.5px] border border-[#4B567C] text-[#4B567C] rounded-md hover:border-[#DC2626] hover:text-[#DC2626] hover:bg-[#FEF2F2] cursor-pointer";
    let allCards = "";

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let Buttons = "";
        if (product.categorie === "Clothing") {
            Buttons = `
                <div class="flex flex-row gap-2">
                    <button class="${sizeButtonClass}">S</button>
                    <button class="${sizeButtonClass}">M</button>
                    <button class="${sizeButtonClass}">L</button>
                    <button class="${sizeButtonClass}">XL</button>
                </div>
            `;
        }
        let card = `
            <div class="product-card flex flex-col w-[318px] bg-[#FFFFFF] shadow rounded-md transition" draggable="true" data-id="${product.id}">
    <div class="product-img">
        <img src="${product.img}" alt="${product.name}" class="rounded-md w-full h-full object-cover" draggable="false">
    </div>
                <div class="flex flex-col gap-3 p-4">
                    <div class="flex flex-row items-center justify-between">
                        <span class="font-sans font-light text-lg">${product.categorie}</span>
                    </div>
                    <h2 class="font-sans text-xl">${product.name}</h2>
                    <strong class="font-sans font-bold text-xl">${product.price} DH</strong>

                    ${Buttons}

                    <button data-action="add-to-cart" data-id="${product.id}" class="flex flex-row justify-center items-center rounded-md w-full h-[44px] bg-[#DC2626] gap-4 text-white">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.74951 9.00011H9.00011M9.00011 9.00011H14.2507M9.00011 9.00011V3.74951M9.00011 9.00011V14.2507" stroke-linecap="round" stroke="white"/>
</svg>

                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        `;
        allCards = allCards + card;
    }
    catalogue.innerHTML = allCards;
    applyView();
}

// document.getElementById('listeBtn').addEventListener('click', () => {
//     const change = document.getElementById('prod');
//     const catalogue = document.getElementById("catalogue");
//     catalogue.classList.remove('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4 gap-4')
//     change.classList.remove('flex-col')
//     change.classList.add('flex-row', 'gape-4', 'w-full')
//     catalogue.classList.add('flex', 'gape-4', 'flex-col')
// })
let listView = false;

function applyView() {
    const catalogue = document.getElementById('catalogue');
    const cards = catalogue.querySelectorAll('.product-card');
    const images = catalogue.querySelectorAll('.product-img');

    if (listView) {
        catalogue.classList.remove('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4');
        catalogue.classList.add('flex', 'flex-col');
        cards.forEach(card => {
            card.classList.remove('flex-col', 'w-[318px]');
            card.classList.add('flex-row', 'w-full');
        });
        images.forEach(img => img.classList.add('w-[30%]', 'shrink-0'));
    } else {
        catalogue.classList.remove('flex', 'flex-col');
        catalogue.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4');
        cards.forEach(card => {
            card.classList.remove('flex-row', 'w-full');
            card.classList.add('flex-col', 'w-[318px]');
        });
        images.forEach(img => img.classList.remove('w-40', 'shrink-0'));
    }
}
export function Toggle() {
    document.getElementById('gridBtn').addEventListener('click', () => {
        listView = false;
        applyView();
    });

    document.getElementById('listeBtn').addEventListener('click', () => {
        listView = true;
        applyView();
    });
}

export function displayAdminTable(products) {
    const tbody = document.getElementById('adminTableBody');
    let rows = "";

    products.forEach(product => {
        let sizes = "—";
        if (product.categorie === "Clothing") {
            sizes = "S, M, L, XL";
        }

        rows += `
            <tr class="border-t border-[#E2E8F0]">
                <td class="p-4">
                    <div class="flex flex-row gap-2 items-center">
                        <img src="${product.img}" alt="${product.name}"
                            class="rounded-md w-[48px] h-[48px] object-cover shrink-0">
                        <div class="flex flex-col">
                            <span class="font-semibold">${product.name}</span>
                            <small class="font-light">In stock</small>
                        </div>
                    </div>
                </td>
                <td class="p-4 text-center">${product.categorie}</td>
                <td class="p-4 text-center">${product.price} DH</td>
                <td class="p-4 text-center">${sizes}</td>
                <td class="p-4">
                    <div class="flex flex-row gap-4 items-center justify-center">
                        <button class ="cursor-pointer" type="button" aria-label="Edit product" data-action="edit" data-id="${product.id}">
                            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.2499 3.74935L11.2551 3.75453M11.2551 3.75453L14.2452 6.74429M11.2551 3.75453L12.891 2.11841C13.2876 1.72199 13.8254 1.49932 14.3861 1.49939C14.9469 1.49946 15.4847 1.72226 15.8811 2.11879C16.2776 2.51531 16.5003 3.05308 16.5002 3.61378C16.5002 4.17448 16.2773 4.71219 15.8808 5.10861L14.2452 6.74429M11.2551 3.75453L2.8806 12.13C2.70645 12.3036 2.57766 12.5174 2.50556 12.7525L1.51473 16.0164C1.49534 16.0813 1.49388 16.1502 1.51049 16.2158C1.5271 16.2814 1.56117 16.3413 1.60908 16.3892C1.65699 16.437 1.71696 16.471 1.78262 16.4875C1.84828 16.504 1.91718 16.5024 1.98202 16.4829L5.24706 15.4929C5.48196 15.4215 5.69573 15.2935 5.86961 15.1202L14.2452 6.74429M14.2452 6.74429L14.2502 6.7493"
                                    stroke-linecap="round" stroke="#64748B" />
                            </svg>

                        </button>
                        <button class ="cursor-pointer" type="button" aria-label="Delete product" data-action="delete" data-id="${product.id}">
                            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.5 8.24993V12.7503M10.5 8.24993V12.7503M14.25 4.49963V15.0005C14.25 15.3983 14.092 15.7799 13.8107 16.0612C13.5294 16.3425 13.1478 16.5006 12.75 16.5006H5.25C4.85218 16.5006 4.47064 16.3425 4.18934 16.0612C3.90804 15.7799 3.75 15.3983 3.75 15.0005V4.49963M14.25 4.49963H12M14.25 4.49963H15.75M3.75 4.49963H2.25M3.75 4.49963H6M6 4.49963H12M6 4.49963V2.99951C6 2.60165 6.15804 2.22009 6.43934 1.93876C6.72064 1.65744 7.10218 1.49939 7.5 1.49939H10.5C10.8978 1.49939 11.2794 1.65744 11.5607 1.93876C11.842 2.22009 12 2.60165 12 2.99951V4.49963"
                                    stroke-linecap="round" stroke="#DC2626" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = rows;
}



export function displayPageNumbers(pages) {
    const pageNumbers = document.getElementById('pageNumbers');
    let html = "";
    for (let i = 1; i <= pages; i++) {
        let style = "w-9 h-9 rounded-md shadow cursor-pointer";
        if (i === currentPage) {
            style += " bg-[#DC2626] text-white";
        }
        html += `<button data-page="${i}" class="${style}">${i}</button>`;
    }
    pageNumbers.innerHTML = html;
}