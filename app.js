document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const favoritesList = document.getElementById('favorites-list');

    // Simulação de dados de produtos
    const products = [
        { id: 1, name: 'Watch 1', price: 100, image: 'imagens/download-removebg-preview.png' },
        { id: 2, name: 'Watch 2', price: 200, image: 'imagens/rolex-submariner-misto-preto-prem1-dadae4b0699a6c479e16698334285206-1024-1024-removebg-preview.png' },
        { id: 3, name: 'Watch 3', price: 300, image: 'imagens/relogio-luxo-premium-a-prova-dagua-e-choque-lojas-promorin-1-removebg-preview.png'},
        { id: 4, name: 'Watch 4', price: 400, image: 'imagens/download.png' },
        { id: 5, name: 'Watch 5', price: 400, image:  'imagens/re05-removebg-preview.png'},
        { id: 6, name: 'Watch 6', price: 500, image: 'imagens/re06-removebg-preview.png' },
        { id: 7, name: 'Watch 7', price: 600, image: 'imagens/re07-removebg-preview.png'},
        { id: 8, name: 'Watch 8', price: 700, image: 'imagens/re08-removebg-preview.png' },
        { id: 9, name: 'Watch 9', price: 800, image: 'imagens/re9-removebg-preview.png' },
        { id: 10, name: 'Watch 10', price: 100, image: '' },
        { id: 11, name: 'Watch 11', price: 200, image: 'images/watch2.jpg' },
        { id: 12, name: 'Watch 12', price: 300, image: 'images/watch3.jpg' },
        { id: 13, name: 'Watch 13', price: 400, image: 'images/watch4.jpg' },
        { id: 14, name: 'Watch 14', price: 500, image: 'images/watch5.jpg' },
        { id: 15, name: 'Watch 15', price: 600, image: 'images/watch6.jpg' },
        { id: 16, name: 'Watch 16', price: 700, image: 'images/watch7.jpg' },
      
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
document.getElementById('toggleButton').addEventListener('click', function() {
    var optionsMenu = document.getElementById('optionsMenu');
    if (optionsMenu.classList.contains('hidden')) {
        optionsMenu.classList.remove('hidden');
    } else {
        optionsMenu.classList.add('hidden');
    }
});

