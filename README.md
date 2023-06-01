# mer-portfolio
Vue 3 - реактивный фреймворк JS, позволяющий использовать как JSON структуру при написании JS кода, так и обычный стиль JS. 

Для связи с сервером используется библиотека axios.

Рабочий билд находится в папке public.
Разработка ведется в папке src:
components
MyHeader - полоса вверху сайта
ProductCard - компонент карточки товара в каталоге
ProductInfo - страница с описанием товара

components/UI
MyBtn - кастомная кнопка

pages - страницы по отдельным адресам
AboutUs - страница информации о компании
LoginPage - страница входа
ProductsPage - страница с товарами (каталог)

router
router - маршруты сайта и какие pages должны по ним открываться

store
store - глобальное хранилищие данных

style

Используется препроцессор SCSS - улучшенная версия CSS, где можно использовать переменные и функции
_colors - глобальный файл цветов в приложении
_reset - сброс стилей браузеров для кроссплатформенности
_scrollbars - вид скроллбара в приложении
global - импорты и глобальные переменные

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
