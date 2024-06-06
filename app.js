document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const favoritesList = document.getElementById('favorites-list');

    // Simulação de dados de produtos
    const products = [
        { id: 1, name: 'Watch 1', description: 'Description 1', price: 100, image: 'imagens/download-removebg-preview.png' },
        { id: 2, name: 'Watch 2', description: 'Description 2', price: 200, image: 'images/watch2.jpg' },
        { id: 3, name: 'Watch 3', description: 'Description 3', price: 300, image: 'images/watch3.jpg' },
        { id: 4, name: 'Watch 4', description: 'Description 4', price: 400, image: 'images/watch4.jpg' },
        { id: 5, name: 'Watch 5', description: 'Description 5', price: 500, image: 'images/watch5.jpg' },
        { id: 6, name: 'Watch 6', description: 'Description 6', price: 600, image: 'images/watch6.jpg' },
        { id: 7, name: 'Watch 7', description: 'Description 7', price: 700, image: 'images/watch7.jpg' },
        { id: 8, name: 'Watch 8', description: 'Description 8', price: 800, image: 'images/watch8.jpg' },
        { id: 9, name: 'Watch 9', description: 'Description 9', price: 100, image: '' },
        { id: 10, name: 'Watch 10', description: 'Description 10', price: 200, image: 'images/watch2.jpg' },
        { id: 11, name: 'Watch 11', description: 'Description 11', price: 300, image: 'images/watch3.jpg' },
        { id: 12, name: 'Watch 12', description: 'Description 12', price: 400, image: 'images/watch4.jpg' },
        { id: 13, name: 'Watch 13', description: 'Description 13', price: 500, image: 'images/watch5.jpg' },
        { id: 14, name: 'Watch 14', description: 'Description 14', price: 600, image: 'images/watch6.jpg' },
        { id: 15, name: 'Watch 15', description: 'Description 15', price: 700, image: 'images/watch7.jpg' },
        { id: 16, name: 'Watch 16', description: 'Description 16', price: 800, image: 'images/watch8.jpg' },
    ];

    // Função para renderizar produtos
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onclick="viewProduct(${product.id})">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price}</p>
               
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

    // Função para redirecionar para a página de detalhes do produto
    window.viewProduct = function(productId) {
        localStorage.setItem('selectedProduct', productId);
        window.location.href = 'produto.html';
    }

    renderProducts();
});
