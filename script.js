const productList = document.getElementById("productList");

function displayProducts(items) {
    productList.innerHTML = "";
    items.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p class="price">${product.price} TL</p>
            <a class="whatsapp-btn" target="_blank"
            href="https://wa.me/905000000000?text=Merhaba%20${product.name}%20ürünü%20için%20sipariş%20vermek%20istiyorum">
            WhatsApp'tan Sipariş Ver
            </a>
        `;
        productList.appendChild(div);
    });
}

displayProducts(products);

function searchProducts() {
    const value = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );
    displayProducts(filtered);
}

function filterProducts() {
    const category = document.getElementById("categoryFilter").value;
    if (category === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

function sortProducts() {
    const option = document.getElementById("sortOption").value;
    let sorted = [...products];

    if (option === "priceLow") {
        sorted.sort((a,b) => a.price - b.price);
    } else if (option === "priceHigh") {
        sorted.sort((a,b) => b.price - a.price);
    }

    displayProducts(sorted);
}

function goHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
