# 🌷 Ural Flowers — Лендинг для продажи тюльпанов

Одностраничный сайт для продажи тюльпанов оптом в Челябинске от **Ural Flowers**.

## 📁 Структура проекта

```
tulpan/
├── index.html          # Главная HTML-страница
├── styles.css          # Стили (свежая весенняя гамма)
├── script.js           # JavaScript функционал (фильтры, поиск)
├── images/             # Папка для фотографий тюльпанов
└── README.md           # Этот файл
```

## 🚀 Как запустить

Просто откройте файл `index.html` в браузере:

- Двойной клик по файлу
- Или перетащите файл в окно браузера
- Или через VS Code: right-click → "Open with Live Server" (если установлен)

Ничего устанавливать не нужно!

## 📝 Как изменить контакты

Откройте `index.html` и найдите:

```html
<!-- Телефон в шапке -->
<span>+7 999 293-58-29</span>

<!-- Ссылка на WhatsApp -->
<a href="https://wa.me/79992935829">

<!-- Ссылка на Авито -->
<a href="https://avito.ru/chelyabinsk/rasteniya/tyulpany_optom-995861454">
```

Замените на свои данные.

## 🌷 Как добавить новые сорта

Откройте `script.js` и найди массив `products`. Добавь новый сорт:

```javascript
{
    id: 51,                    // уникальный номер
    name: 'Название сорта',     // например "Розовый тюльпан"
    category: 'simple',         // simple, double, lily, fringed, parrot
    color: 'pink',              // red, pink, white, yellow, orange, purple, green
    price: 75,                  // цена в рублях
    description: 'Описание сорта',
    features: ['Высокий', 'Ароматный'],
    popular: true               // показать звездочку ★
}
```

**Категории:**
- `simple` — Простые классические
- `double` — Махровые пышные
- `lily` — Лилиецветные с острыми лепестками
- `fringed` — Бахромчатые
- `parrot` — Попугайные с волнистыми лепестками

## 📸 Как добавить фото

1. Положи фото в папку `images/`
2. Назови файл `tulip-1.jpg` (для сорта с id=1), `tulip-2.jpg` и т.д.
3. В `script.js` замени:

```javascript
// Было:
<span class="product-card__emoji">${colorEmoji}</span>

// Станет:
<img src="images/tulip-${product.id}.jpg" alt="${product.name}">
```

**Рекомендации для фото:**
- Формат: JPG или WEBP
- Размер: минимум 800x800 px
- Квадрат 1:1
- Размер файла: до 500 KB

## 📱 Как разместить на GitHub Pages

1. Создай репозиторий на GitHub
2. Загрузи файлы:
   ```bash
   git remote add origin https://github.com/username/tulpan.git
   git push -u origin master
   ```
3. Включи GitHub Pages: Settings → Pages → Source: main branch
4. Сайт будет доступен: `https://username.github.io/tulpan/`

## 📊 Каталог сортов

Сейчас каталог содержит **50 сортов** в 5 категориях с фильтрацией и поиском.

## 🎨 Цветовая схема

- **Оранжевый** — основной цвет (#FF8C42)
- **Жёлтый** — акценты (#FFD23F)
- **Зелёный** — свежесть (#4CAF50)
- **Коралловый** — дополнителный (#FF7043)

## 💡 Советы

- Для быстрого редактирования используй VS Code
- Для проверки на мобильных — F12 → Ctrl+Shift+M (Device Toolbar)
- Фото можно делать обычным телефоном, главное хороший свет
