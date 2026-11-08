export function loadProducts() {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : null;
}

export function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}