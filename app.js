document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const favoritesList = document.getElementById('favorites-list');

    // Simulação de dados de produtos
    const products = [
        { id: 1, name: 'Watch 1', description: 'Description 1', price: 100, image: 'images/watch1.jpg' },
        { id: 2, name: 'Watch 2', description: 'Description 2', price: 200, image: 'images/watch2.jpg' },
        { id: 3, name: 'Watch 3', description: 'Description 3', price: 300, image: 'images/watch3.jpg' },
    ];

    // Função para renderizar produtos
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <button onclick="addToFavorites(${product.id})">Add to Favorites</button>
            `;
            productList.appendChild(productElement);
        });
    }

    // Função para adicionar produto ao carrinho
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    }

    // Função para adicionar produto aos favoritos
    function addToFavorites(productId) {
        const product = products.find(p => p.id === productId);
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Product added to favorites!');
    }

    // Função para renderizar itens do carrinho
    function renderCartItems() {
        if (cartItems) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                `;
                cartItems.appendChild(cartItemElement);
            });
        }
    }

    // Função para renderizar itens favoritos
    function renderFavorites() {
        if (favoritesList) {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favoritesList.innerHTML = '';
            favorites.forEach(item => {
                const favoriteItemElement = document.createElement('div');
                favoriteItemElement.className = 'favorite-item';
                favoriteItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                `;
                favoritesList.appendChild(favoriteItemElement);
            });
        }
    }

    renderProducts();
    renderCartItems();
    renderFavorites();
});
