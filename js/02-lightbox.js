import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);
const galleryEL = document.querySelector(".gallery");
const galleryItemEl = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");
galleryEL.innerHTML = galleryItemEl;
// window.addEventListener("click", onGalleryItemClick);
// function onGalleryItemClick(e) {
  // e.preventDefault();
  const options = {
    captionsData: "alt",
    captionDelay: 250,
  };
  const lightbox = new SimpleLightbox(".gallery a", options);
  // window.removeEventListener("click", onGalleryItemClick);
// }
