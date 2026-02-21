/**
 * Tulpan Landing Page - Interactive Features
 */

// ===== Product Data =====
const products = [
    {
        id: 1,
        name: 'Antarktika',
        color: 'white',
        price: 70,
        description: 'Чисто-белый тюльпан с крупным плотным бокалом. Идеален для свадеб и минималистичных букетов.',
        popular: true
    },
    {
        id: 2,
        name: 'Denmark',
        color: 'orange',
        price: 70,
        description: 'Насыщенный оранжевый цвет, напоминающий апельсин',
        popular: true
    },
    {
        id: 3,
        name: 'Memphis',
        color: 'white',
        price: 80,
        description: 'Изысканные белые бутоны, идеальные для букетов',
        popular: true
    },
    {
        id: 4,
        name: 'Creme Fraiche',
        color: 'white',
        price: 75,
        description: 'Нежный кремово-молочный оттенок с лёгким теплым подтоном. Выглядит мягко и дорого.',
        popular: true
    },
    {
        id: 5,
        name: 'Coalition',
        color: 'red',
        price: 70,
        description: 'Глубокий насыщенно-красный тюльпан с плотным классическим бутоном. Смотрится строго и дорого.',
        popular: true
    },
    {
        id: 6,
        name: 'Verona',
        color: 'pink',
        price: 70,
        description: 'Пионовидный тюльпан с махровыми лепестками. Пышный, нежно-кремовый, очень «инстаграмный».',
        popular: false
    },
    {
        id: 7,
        name: 'Roman Power',
        color: 'pink',
        price: 95,
        description: 'Яркий, сочный малиново-розовый оттенок с плотным бокалом. Эффектный и заметный.',
        popular: true
    },
    {
        id: 8,
        name: 'Alibi',
        color: 'purple',
        price: 70,
        description: 'Классический бокаловидный тюльпан с холодным лилово-сиреневым оттенком. Цвет может уходить в мягкий фиолетовый при разном освещении.',
        popular: false
    },
    {
        id: 9,
        name: 'Luba',
        color: 'pink',
        price: 70,
        description: 'Насыщенный ярко-розовый тюльпан с крупным бутоном. Выглядит живо и празднично.',
        popular: false
    },
    {
        id: 10,
        name: 'Timeless',
        color: 'red',
        price: 70,
        description: 'Красный крупный бутон с белой окантовкой',
        popular: false
    },
    {
        id: 11,
        name: 'Strong Gold',
        color: 'yellow',
        price: 85,
        description: 'Насыщенный солнечно-жёлтый тюльпан. Очень стойкий и один из самых популярных',
        popular: true
    },
    {
        id: 12,
        name: 'Pink Flag',
        color: 'pink',
        price: 95,
        description: 'Классический ярко-розовый сорт с крупным бутоном. Универсален для букетов.',
        popular: false
    },
    {
        id: 13,
        name: 'Esta Bonita',
        color: 'pink',
        price: 70,
        description: 'Нежный лососево-розовый оттенок с мягким переходом цвета. Очень «тёплый» сорт.',
        popular: true
    },
    {
        id: 14,
        name: 'Louvre',
        color: 'purple',
        price: 70,
        description: 'Глубокий фиолетово-пурпурный оттенок. Элегантный, необычный.',
        popular: true
    },
    {
        id: 15,
        name: 'Queensday',
        color: 'orange',
        price: 70,
        description: 'Яркий оранжевый, сочный и солнечный. Отличный весенний акцент.',
        popular: false
    },
    {
        id: 16,
        name: 'Birindisi',
        color: 'pink',
        price: 90,
        description: 'Нежно-розовый с белой каймой по краю лепестков. Лёгкий и романтичный сорт.',
        popular: false
    },
    {
        id: 17,
        name: 'Castela',
        color: 'purple',
        price: 70,
        description: 'Изящный сорт с крупным бутоном',
        popular: false
    },
    {
        id: 18,
        name: 'Greenland',
        color: 'green',
        price: 100,
        description: 'Зеленый бахромчатый с розовыми штрихами',
        popular: false
    }
];

// Color emoji for cards
const colorEmojis = {
    red: '🌹',
    pink: '🌸',
    white: '🤍',
    yellow: '💛',
    orange: '🧡',
    purple: '💜',
    green: '💚'
};

// ===== State =====
let currentSearch = '';
let visibleProducts = 12;
let filteredProducts = [...products];

// ===== DOM Elements =====
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMore');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

// ===== Functions =====

/**
 * Create product card HTML
 */
function createProductCard(product) {
    const colorEmoji = colorEmojis[product.color] || '🌷';

    // Использует реальное фото если есть, иначе emoji
    const hasImage = true; // <-- ПОСТАВЬ true КОГДА ДОБАВИШЬ ФОТО
    const imageContent = hasImage
        ? `<img src="images/tulip-${product.id}.jpg" alt="${product.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="product-card__emoji" style="display:none">${colorEmoji}</span>`
        : `<span class="product-card__emoji">${colorEmoji}</span>`;

    return `
        <article class="product-card" data-id="${product.id}">
            <div class="product-card__image">
                ${imageContent}
                ${product.popular ? '<span class="product-card__popular">★ Популярный</span>' : ''}
            </div>
            <div class="product-card__content">
                <h3 class="product-card__title">${product.name}</h3>
                <p class="product-card__desc">${product.description}</p>
                <div class="product-card__footer">
                    <div class="product-card__price">${product.price}₽ <span>/ шт</span></div>
                </div>
            </div>
        </article>
    `;
}

/**
 * Render products
 */
function renderProducts() {
    // Filter products by search
    filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
               product.description.toLowerCase().includes(currentSearch.toLowerCase());
    });

    // Get products to show
    const productsToShow = filteredProducts.slice(0, visibleProducts);

    // Render
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="catalog__empty">
                <p>Тюльпаны не найдены. Попробуйте изменить поисковый запрос.</p>
            </div>
        `;
    } else {
        productsGrid.innerHTML = productsToShow.map(createProductCard).join('');
    }

    // Update load more button
    if (filteredProducts.length <= visibleProducts) {
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.classList.remove('hidden');
    }
}

/**
 * Search products
 */
function searchProducts(query) {
    currentSearch = query;
    visibleProducts = 12;
    renderProducts();
}

/**
 * Load more products
 */
function loadMore() {
    visibleProducts += 12;
    renderProducts();
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('mobile-nav-open');
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    mobileNav.classList.remove('active');
    document.body.classList.remove('mobile-nav-open');
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ===== Event Listeners =====

// Search input
searchInput.addEventListener('input', (e) => {
    searchProducts(e.target.value);
});

// Load more button
loadMoreBtn.addEventListener('click', loadMore);

// Mobile menu
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Mobile nav links
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
        const target = link.getAttribute('href');
        smoothScrollTo(target);
    });
});

// Header scroll effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// ===== Export =====
window.TulpanApp = {
    products,
    searchProducts,
    renderProducts
};
