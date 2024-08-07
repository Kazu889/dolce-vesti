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

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <button class="view-details">View Details</button>
        `;
        card.querySelector('.view-details').addEventListener('click', () => {
            modalImage.src = product.image;
            modalTitle.textContent = product.title;
            modalPrice.textContent = product.price;
            modalDescription.textContent = product.description;
            modal.style.display = 'flex';
        });
        return card;
    }

    function loadProducts() {
        const grids = {
            women: document.getElementById('women-products'),
            sale: document.getElementById('sale-products')
        };

        Object.values(grids).forEach(grid => grid.innerHTML = '');

        products.forEach(product => {
            if (grids[product.category]) {
                grids[product.category].appendChild(createProductCard(product));
            }
        });
    }

    function toggleNav() {
        navLinks.classList.toggle('active');
    }

    function closeModalHandler() {
        modal.style.display = 'none';
    }

    function outsideClickHandler(e) {
        if (e.target === modal) {
            closeModalHandler();
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    hamburger.addEventListener('click', toggleNav);
    closeModal.addEventListener('click', closeModalHandler);
    window.addEventListener('click', outsideClickHandler);

    loadProducts();
});
