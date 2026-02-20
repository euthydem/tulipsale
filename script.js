/**
 * Tulpan Landing Page - Interactive Features
 */

// ===== Product Data =====
const products = [
    // Популярные сорта
    {
        id: 1,
        name: 'Красный барон',
        category: 'simple',
        color: 'red',
        price: 70,
        description: 'Классический ярко-красный тюльпан, символ весны',
        features: ['Высокий', 'Долговечный'],
        popular: true
    },
    {
        id: 2,
        name: 'Апельсин',
        category: 'simple',
        color: 'orange',
        price: 75,
        description: 'Насыщенный оранжевый цвет, напоминающий апельсин',
        features: ['Яркий', 'Высокий'],
        popular: true
    },
    {
        id: 3,
        name: 'Белый рай',
        category: 'simple',
        color: 'white',
        price: 80,
        description: 'Изысканные белые бутоны, идеальные для букетов',
        features: ['Элегантный', 'Ароматный'],
        popular: true
    },
    {
        id: 4,
        name: 'Розовая мечта',
        category: 'simple',
        color: 'pink',
        price: 75,
        description: 'Нежный розовый оттенок, очень популярный',
        features: ['Нежный', 'Универсальный'],
        popular: true
    },
    {
        id: 5,
        name: 'Желтый корона',
        category: 'simple',
        color: 'yellow',
        price: 70,
        description: 'Солнечно-желтый цветок с крупным бутоном',
        features: ['Крупный', 'Яркий'],
        popular: true
    },
    {
        id: 6,
        name: 'Фондан',
        category: 'double',
        color: 'pink',
        price: 90,
        description: 'Махровый розовый сорт, напоминающий пион',
        features: ['Махровый', 'Пышный'],
        popular: false
    },
    {
        id: 7,
        name: 'Монте Карло',
        category: 'double',
        color: 'yellow',
        price: 95,
        description: 'Махровый желтый, один из самых популярных',
        features: ['Махровый', 'Ароматный'],
        popular: true
    },
    {
        id: 8,
        name: 'Блэк паррот',
        category: 'parrot',
        color: 'purple',
        price: 100,
        description: 'Попугайный тёмно-фиолетовый сорт с бахромой',
        features: ['Экзотический', 'Бахромчатый'],
        popular: false
    },
    {
        id: 9,
        name: 'Голден паррот',
        category: 'parrot',
        color: 'yellow',
        price: 100,
        description: 'Золотисто-жёлтый попугайный с волнистыми лепестками',
        features: ['Волнистые лепестки', 'Яркий'],
        popular: false
    },
    {
        id: 10,
        name: 'Вест поинт',
        category: 'lily',
        color: 'yellow',
        price: 85,
        description: 'Лилиецветный жёлтый с острыми лепестками',
        features: ['Изящный', 'Высокий'],
        popular: false
    },
    {
        id: 11,
        name: 'Мэрилин',
        category: 'lily',
        color: 'white',
        price: 85,
        description: 'Белый лилиецветный с легким розовым оттенком',
        features: ['Изящный', 'Нежный'],
        popular: false
    },
    {
        id: 12,
        name: 'Блю герон',
        category: 'fringed',
        color: 'purple',
        price: 95,
        description: 'Бахромчатый фиолетовый сорт с белой каймой',
        features: ['Бахрома', 'Уникальный'],
        popular: false
    },
    {
        id: 13,
        name: 'Касабланка',
        category: 'fringed',
        color: 'white',
        price: 95,
        description: 'Белый бахромчатый с нежной каемкой',
        features: ['Бахрома', 'Белоснежный'],
        popular: false
    },
    {
        id: 14,
        name: 'Парад',
        category: 'simple',
        color: 'red',
        price: 75,
        description: 'Ярко-красный с прочным стеблем',
        features: ['Прочный', 'Высокий'],
        popular: false
    },
    {
        id: 15,
        name: 'Янтарный',
        category: 'simple',
        color: 'orange',
        price: 75,
        description: 'Теплый янтарно-оранжевый оттенок',
        features: ['Теплый тон', 'Универсальный'],
        popular: false
    },
    {
        id: 16,
        name: 'Павловна',
        category: 'double',
        color: 'red',
        price: 90,
        description: 'Махровый красный с белой каемкой',
        features: ['Махровый', 'Контрастный'],
        popular: false
    },
    {
        id: 17,
        name: 'Ламбада',
        category: 'fringed',
        color: 'red',
        price: 95,
        description: 'Красный бахромчатый с яркой бахромой',
        features: ['Бахрома', 'Яркий'],
        popular: false
    },
    {
        id: 18,
        name: 'Гринленд',
        category: 'fringed',
        color: 'green',
        price: 100,
        description: 'Зеленый бахромчатый с розовыми штрихами',
        features: ['Уникальный', 'Бахрома'],
        popular: false
    },
    {
        id: 19,
        name: 'Рококо',
        category: 'parrot',
        color: 'pink',
        price: 100,
        description: 'Попугайный розовый с волнистыми краями',
        features: ['Волнистый', 'Пышный'],
        popular: false
    },
    {
        id: 20,
        name: 'Эстель',
        category: 'double',
        color: 'white',
        price: 90,
        description: 'Махровый белый с зеленоватым оттенком',
        features: ['Махровый', 'Ароматный'],
        popular: false
    },
    {
        id: 21,
        name: 'Хонг синдром',
        category: 'lily',
        color: 'red',
        price: 85,
        description: 'Лилиецветный красный с заостренными лепестками',
        features: ['Изящный', 'Высокий'],
        popular: false
    },
    {
        id: 22,
        name: 'Балерина',
        category: 'lily',
        color: 'white',
        price: 85,
        description: 'Белый лилиецветный, изящный как танцовщица',
        features: ['Изящный', 'Белоснежный'],
        popular: false
    },
    {
        id: 23,
        name: 'Мазурка',
        category: 'parrot',
        color: 'orange',
        price: 100,
        description: 'Оранжевый попугайный с волнистыми лепестками',
        features: ['Волнистый', 'Яркий'],
        popular: false
    },
    {
        id: 24,
        name: 'Арлекин',
        category: 'parrot',
        color: 'red',
        price: 100,
        description: 'Красно-белый попугайный пестрый сорт',
        features: ['Пестрый', 'Экзотический'],
        popular: false
    },
    {
        id: 25,
        name: 'Негрита',
        category: 'simple',
        color: 'purple',
        price: 75,
        description: 'Глубокий фиолетовый оттенок',
        features: ['Глубокий цвет', 'Элегантный'],
        popular: false
    },
    {
        id: 26,
        name: 'Лайлак',
        category: 'simple',
        color: 'purple',
        price: 75,
        description: 'Нежный сиреневый оттенок',
        features: ['Нежный', 'Ароматный'],
        popular: false
    },
    {
        id: 27,
        name: 'Сакура',
        category: 'simple',
        color: 'pink',
        price: 75,
        description: 'Розовый как цветение сакуры',
        features: ['Нежный', 'Японский'],
        popular: false
    },
    {
        id: 28,
        name: 'Крем',
        category: 'simple',
        color: 'white',
        price: 75,
        description: 'Кремово-белый нежный оттенок',
        features: ['Нежный', 'Универсальный'],
        popular: false
    },
    {
        id: 29,
        name: 'Морнинг сан',
        category: 'double',
        color: 'yellow',
        price: 90,
        description: 'Махровый желто-оранжевый как утреннее солнце',
        features: ['Махровый', 'Яркий'],
        popular: false
    },
    {
        id: 30,
        name: 'Снежный король',
        category: 'simple',
        color: 'white',
        price: 80,
        description: 'Крупный белый бутон королевской красоты',
        features: ['Крупный', 'Белоснежный'],
        popular: false
    },
    {
        id: 31,
        name: 'Аляска',
        category: 'simple',
        color: 'white',
        price: 75,
        description: 'Чисто-белый с легким зеленоватым оттенком у основания',
        features: ['Чисто-белый', 'Прочный'],
        popular: false
    },
    {
        id: 32,
        name: 'Огненный птица',
        category: 'parrot',
        color: 'red',
        price: 100,
        description: 'Огненно-красный попугайный с волнистыми лепестками',
        features: ['Огненный', 'Волнистый'],
        popular: false
    },
    {
        id: 33,
        name: 'Кенди принцесс',
        category: 'lily',
        color: 'pink',
        price: 85,
        description: 'Розовый лилиецветный с белыми кончиками',
        features: ['Изящный', 'Двухцветный'],
        popular: false
    },
    {
        id: 34,
        name: 'Фэнтези',
        category: 'fringed',
        color: 'purple',
        price: 95,
        description: 'Фиолетовый бахромчатый с белой бахромой',
        features: ['Бахрома', 'Магический'],
        popular: false
    },
    {
        id: 35,
        name: 'Капучино',
        category: 'double',
        color: 'orange',
        price: 90,
        description: 'Коричневато-оранжевый махровый как кофе',
        features: ['Махровый', 'Необычный'],
        popular: false
    },
    {
        id: 36,
        name: 'Шампань',
        category: 'simple',
        color: 'white',
        price: 85,
        description: 'Игристый белый с легким розовым переливом',
        features: ['Элегантный', 'Праздничный'],
        popular: false
    },
    {
        id: 37,
        name: 'Магнетта',
        category: 'simple',
        color: 'purple',
        price: 75,
        description: 'Интенсивный фиолетово-пурпурный',
        features: ['Интенсивный', 'Высокий'],
        popular: false
    },
    {
        id: 38,
        name: 'Аптейт',
        category: 'simple',
        color: 'orange',
        price: 75,
        description: 'Яблочно-оранжевый аппетитный цвет',
        features: ['Яркий', 'Сочный'],
        popular: false
    },
    {
        id: 39,
        name: 'Роял фир',
        category: 'fringed',
        color: 'red',
        price: 95,
        description: 'Красный королевский с золотистой бахромой',
        features: ['Бахрома', 'Королевский'],
        popular: false
    },
    {
        id: 40,
        name: 'Белый элегант',
        category: 'lily',
        color: 'white',
        price: 85,
        description: 'Изящный белый лилиецветный',
        features: ['Изящный', 'Высокий'],
        popular: false
    },
    {
        id: 41,
        name: 'Розовый император',
        category: 'double',
        color: 'pink',
        price: 90,
        description: 'Розовый махровый императорской красоты',
        features: ['Махровый', 'Пышный'],
        popular: false
    },
    {
        id: 42,
        name: 'Солнечный свет',
        category: 'simple',
        color: 'yellow',
        price: 70,
        description: 'Яркий желтый как луч солнца',
        features: ['Яркий', 'Доступный'],
        popular: false
    },
    {
        id: 43,
        name: 'Миджет',
        category: 'double',
        color: 'red',
        price: 85,
        description: 'Компактный махровый красный сорт',
        features: ['Махровый', 'Компактный'],
        popular: false
    },
    {
        id: 44,
        name: 'Валентино',
        category: 'simple',
        color: 'red',
        price: 75,
        description: 'Классический красный для букетов',
        features: ['Классика', 'Для букетов'],
        popular: false
    },
    {
        id: 45,
        name: 'Перл',
        category: 'double',
        color: 'white',
        price: 90,
        description: 'Жемчужно-белый махровый сорт',
        features: ['Махровый', 'Жемчужный'],
        popular: false
    },
    {
        id: 46,
        name: 'Вишневый сад',
        category: 'simple',
        color: 'red',
        price: 75,
        description: 'Вишнево-красный глубокого оттенка',
        features: ['Глубокий цвет', 'Высокий'],
        popular: false
    },
    {
        id: 47,
        name: 'Мандарин',
        category: 'simple',
        color: 'orange',
        price: 75,
        description: 'Мандариново-оранжевый сочный цвет',
        features: ['Сочный', 'Яркий'],
        popular: false
    },
    {
        id: 48,
        name: 'Лаванда',
        category: 'simple',
        color: 'purple',
        price: 75,
        description: 'Лавандово-фиолетовый ароматный сорт',
        features: ['Ароматный', 'Нежный'],
        popular: false
    },
    {
        id: 49,
        name: 'Сноу принцесс',
        category: 'double',
        color: 'white',
        price: 90,
        description: 'Снежно-белая принцесса среди тюльпанов',
        features: ['Махровый', 'Белоснежный'],
        popular: false
    },
    {
        id: 50,
        name: 'Тигр',
        category: 'parrot',
        color: 'orange',
        price: 100,
        description: 'Оранжевый попугайный с полосами',
        features: ['Полосатый', 'Экзотический'],
        popular: false
    }
];

// Category names in Russian
const categoryNames = {
    simple: 'Простые',
    double: 'Махровые',
    lily: 'Лилиецветные',
    fringed: 'Бахромчатые',
    parrot: 'Попугайные'
};

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
let currentFilter = 'all';
let currentSearch = '';
let visibleProducts = 12;
let filteredProducts = [...products];

// ===== DOM Elements =====
const productsGrid = document.getElementById('productsGrid');
const filterTabs = document.querySelectorAll('.filter-tab');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMore');
const popularCards = document.querySelectorAll('.popular-card');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

// ===== Functions =====

/**
 * Create product card HTML
 */
function createProductCard(product) {
    const categoryClass = product.category;
    const badgeText = categoryNames[product.category];
    const colorEmoji = colorEmojis[product.color] || '🌷';

    return `
        <article class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-card__image">
                <span class="product-card__emoji">${colorEmoji}</span>
                <span class="product-card__badge ${categoryClass}">${badgeText}</span>
                ${product.popular ? '<span class="product-card__popular">★ Популярный</span>' : ''}
            </div>
            <div class="product-card__content">
                <span class="product-card__category">${badgeText}</span>
                <h3 class="product-card__title">${product.name}</h3>
                <p class="product-card__desc">${product.description}</p>
                <div class="product-card__features">
                    ${product.features.map(f => `<span class="product-card__feature">${f}</span>`).join('')}
                </div>
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
    // Filter products
    filteredProducts = products.filter(product => {
        const matchesFilter = currentFilter === 'all' || product.category === currentFilter;
        const matchesSearch = product.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                             product.description.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Get products to show
    const productsToShow = filteredProducts.slice(0, visibleProducts);

    // Render
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="catalog__empty">
                <p>Тюльпаны не найдены. Попробуйте изменить фильтр или поисковый запрос.</p>
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
 * Filter products by category
 */
function filterByCategory(category) {
    currentFilter = category;
    visibleProducts = 12;
    renderProducts();

    // Update active tab
    filterTabs.forEach(tab => {
        if (tab.dataset.filter === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
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

// Filter tabs
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterByCategory(tab.dataset.filter);
    });
});

// Popular cards
popularCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        filterByCategory(card.dataset.filter);
        smoothScrollTo('#catalog');
    });
});

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
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }

    lastScroll = currentScroll;
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// ===== Export for potential use =====
window.TulpanApp = {
    products,
    filterByCategory,
    searchProducts,
    renderProducts
};
