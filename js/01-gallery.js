import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1 Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2 Реалізація делегування на ul.gallery і отримання url великого зображення.
// 3 Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4 Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5 Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

const galleryEL = document.querySelector(".gallery");
console.log(galleryEL);
const galleryItemEl = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");
    // console.log(galleryItemEl)
galleryEL.innerHTML = galleryItemEl;
