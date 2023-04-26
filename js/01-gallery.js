import { galleryItems } from "./gallery-items.js";
const galleryEL = document.querySelector(".gallery");
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
galleryEL.innerHTML = galleryItemEl;
galleryEL.addEventListener("click", onGalleryItemClick);
function onGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  // const bigImageRef = e.target.dataset.source;
  // console.log(bigImageRef)
  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${e.target.dataset.source}" width="800" height="600">

    </div>
`,
    {
      onShow: (instance) => window.addEventListener("keydown", closeModal),
      onClose: (instance) => window.removeEventListener("keydown", closeModal),
    }
  );
  instance.show();
  ;

  function closeModal(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
