document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.querySelector('.product-details');
    const productImage = document.getElementById('product-img');
    const productName = document.getElementById('product-name');
    const productDescription = document.getElementById('product-description');
    const productPrice = document.getElementById('product-price');
    const addToCartButton = document.getElementById('add-to-cart');
    const addToFavoritesButton = document.getElementById('add-to-favorites');
    const reviewsList = document.getElementById('reviews-list');
    const reviewForm = document.getElementById('review-form');
    const reviewText = document.getElementById('review-text');

    const products = [
        { id: 1, name: 'Patek Philippe Nautilus', price: 30.898, image: 'imagens/download-removebg-preview.png' },
        { id: 2, name: 'Audemars Piguet Royal Oak', price: 23.786, image: 'imagens/rolex-submariner-misto-preto-prem1-dadae4b0699a6c479e16698334285206-1024-1024-removebg-preview.png' },
        { id: 3, name: 'Omega Seamaster', price: 45.654, image: 'imagens/relogio-luxo-premium-a-prova-dagua-e-choque-lojas-promorin-1-removebg-preview.png'},
        { id: 4, name: 'TAG Heuer Carrera', price: 55.999, image: 'imagens/download.png' },
        { id: 5, name: 'Breitling Navitimer', price: 15.678, image:  'imagens/re05-removebg-preview.png'},
        { id: 6, name: 'IWC Portugieser', price: 8.987, image: 'imagens/re06-removebg-preview.png' },
        { id: 7, name: 'Jaeger-LeCoultre Reverso', price: 47.987, image: 'imagens/re07-removebg-preview.png'},
        { id: 8, name: 'Cartier Tank', price: 23.453, image: 'imagens/re08-removebg-preview.png' },
        { id: 9, name: 'Vacheron Constantin Overseas', price: 13.567, image: 'imagens/re9-removebg-preview.png' },
        { id: 10, name: 'Tudor Black Bay', price: 83.978, image: 'imagens/re10-removebg-preview.png' },
        { id: 11, name: 'Rolex Submariner', price: 98.987, image: 'imagens/re11-removebg-preview.png'},
        { id: 12, name: 'Hublot Big Bang', price: 67.098, image: 'imagens/re12-removebg-preview.png' },
        { id: 13, name: 'Panerai Luminor', price: 43.899, image: 'imagens/re13-removebg-preview.png' },
        { id: 14, name: 'Blancpain Fifty Fathoms', price: 17.897, image: 'imagens/re14-removebg-preview.png' },
        { id: 15, name: 'Breguet Classique', price: 38.567, image: 'imagens/re16-removebg-preview.png' },
        { id: 16, name: 'Zenith El Primero', price: 75.234, image: 'imagens/re18-removebg-preview.png' },
      
    ];
   
    const selectedProductId = localStorage.getItem('selectedProduct');
    const product = products.find(p => p.id == selectedProductId);

    if (product) {
        productImage.src = product.image;
        productName.textContent = product.name;
        productDescription.textContent = product.description;
        productPrice.textContent = `$${product.price}`;

        addToCartButton.addEventListener('click', () => {
            addToCart(product.id);
        });

        addToFavoritesButton.addEventListener('click', () => {
            addToFavorites(product.id);
        });
    } else {
        productDetails.innerHTML = '<p>Product not found.</p>';
    }

    // Função para adicionar produto ao carrinho
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    }
    // Função para carregar avaliações
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem(`reviews_${selectedProductId}`)) || [];
        reviewsList.innerHTML = reviews.map(review => `<p>${review}</p>`).join('');
    }

    // Função para enviar uma avaliação
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const reviews = JSON.parse(localStorage.getItem(`reviews_${selectedProductId}`)) || [];
        reviews.push(reviewText.value);
        localStorage.setItem(`reviews_${selectedProductId}`, JSON.stringify(reviews));
        reviewText.value = '';
        loadReviews();
    });

    loadReviews();
});
