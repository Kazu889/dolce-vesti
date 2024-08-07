document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');

    const products = [
        { category: 'women', image: 'images/product1.jpg', title: 'Women\'s Shoe 1', price: '$100', description: 'High quality women\'s shoe.' },
        { category: 'women', image: 'images/product2.jpg', title: 'Women\'s Shoe 2', price: '$120', description: 'Comfortable and stylish.' },
        { category: 'women', image: 'images/product3.jpg', title: 'Women\'s Clothing 1', price: '$90', description: 'Elegant and durable.' },
        { category: 'women', image: 'images/product4.jpg', title: 'Women\'s Clothing 2', price: '$110', description: 'Perfect for casual wear.' },
        { category: 'women', image: 'images/product5.jpg', title: 'Women\'s Accessory 1', price: '$70', description: 'Stylish and functional.' },
        { category: 'women', image: 'images/product6.jpg', title: 'Women\'s Accessory 2', price: '$80', description: 'Elegant and practical.' },
        // Add more products as needed
    ];

    const productGrid = document.querySelectorAll('.product-grid');

    productGrid.forEach(grid => {
        const category = grid.parentElement.id;
        products.filter(product => product.category === category || category === 'sale').forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="view-details">View Details</button>
            `;
            grid.appendChild(card);

            card.querySelector('.view-details').addEventListener('click', () => {
                modalImage.src = product.image;
                modalTitle.textContent = product.title;
                modalPrice.textContent = product.price;
                modalDescription.textContent = product.description;
                modal.style.display = 'flex';
            });
        });
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
