import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
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
galleryEL.addEventListener("click", onGalleryItemClick);
function onGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const options = {
    captionsData: "alt",
    captionDelay: 250,
  };
  const lightbox = new SimpleLightbox(".gallery a", options);
  galleryEL.removeEventListener("click", onGalleryItemClick);
}
