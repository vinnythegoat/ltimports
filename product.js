document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.getElementById('product-details');

    // Simulação de dados de produtos (mesmo array de `app.js`)
    const products = [
        { id: 1, name: 'Watch 1', description: 'Description 1', price: 100, image: 'imagens/download.jpeg' },
        { id: 2, name: 'Watch 2', description: 'Description 2', price: 200, image: 'images/watch2.jpg' },
        { id: 3, name: 'Watch 3', description: 'Description 3', price: 300, image: 'images/watch3.jpg' },
        { id: 4, name: 'Watch 4', description: 'Description 4', price: 400, image: 'images/watch4.jpg' },
        { id: 5, name: 'Watch 5', description: 'Description 5', price: 500, image: 'images/watch5.jpg' },
        { id: 6, name: 'Watch 6', description: 'Description 6', price: 600, image: 'images/watch6.jpg' },
        { id: 7, name: 'Watch 7', description: 'Description 7', price: 700, image: 'images/watch7.jpg' },
        { id: 8, name: 'Watch 8', description: 'Description 8', price: 800, image: 'images/watch8.jpg' },
    ];

    const selectedProductId = localStorage.getItem('selectedProduct');
    const product = products.find(p => p.id == selectedProductId);

    if (product) {
        productDetails.innerHTML = `
            <div class="product-detail">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <button onclick="addToFavorites(${product.id})">Add to Favorites</button>
            </div>
        `;
    } else {
        productDetails.innerHTML = '<p>Product not found.</p>';
    }

    // Função para adicionar produto ao carrinho
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    }

    // Função para adicionar produto aos favoritos
    window.addToFavorites = function(productId) {
        const product = products.find(p => p.id === productId);
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Product added to favorites!');
    }
});
