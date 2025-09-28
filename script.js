document.addEventListener('DOMContentLoaded', () => {
    const products = [
        // Create an array of 45 placeholder products
        ...Array.from({ length: 45 }, (_, i) => ({
            id: i + 1,
            name: `Product ${i + 1}`,
            price: `$${(Math.random() * 100 + 10).toFixed(2)}`,
            imageUrl: `https://picsum.photos/400/250?random=${i + 1}`
        }))
    ];

    const productGrid = document.getElementById('product-grid');

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        // Add AOS animation attributes
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-duration', '800');
        card.setAttribute('data-aos-delay', (index % 5) * 100);

        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;
        productGrid.appendChild(card);
    });

    // Initialize AOS after products are added to the DOM
    AOS.init({
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false, // Whether elements should animate out while scrolling past them
    });
});
