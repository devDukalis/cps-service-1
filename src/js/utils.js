/* TOGGLE TEXT */
document.getElementById("read-next").addEventListener("click", function () {
  let hiddenText = document.getElementById("hidden-text");

  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block"; // Показываем текст
    this.textContent = "Скрыть"; // Меняем текст кнопки
  } else {
    hiddenText.style.display = "none"; // Скрываем текст
    this.textContent = "Читать далее"; // Меняем текст кнопки обратно
  }
});

/* TOGGLE HEADER */
let header = document.getElementById("header");

function toggleHeaderVisibility() {
  if (window.innerWidth >= 1120) {
    header.classList.add("visually-hidden");
  } else {
    header.classList.remove("visually-hidden");
  }
}

// Проверяем ширину окна при загрузке страницы
toggleHeaderVisibility();

// Добавляем обработчик события для изменения размера окна
window.addEventListener("resize", toggleHeaderVisibility);

/* SHOW TITLE RIGHT CONTAINER */
let titleRightContainer = document.getElementById("title-right-container");

function showTitleRightContainer() {
  if (window.innerWidth >= 1120) {
    titleRightContainer.classList.remove("visually-hidden");
  } else {
    titleRightContainer.classList.add("visually-hidden");
  }
}

// Проверяем ширину окна при загрузке страницы
showTitleRightContainer();

// Добавляем обработчик события для изменения размера окна
window.addEventListener("resize", showTitleRightContainer);

/* SELECT/DESELECT SERVICES */
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".nav-services__list-item");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Удаляем класс active у всех элементов
      listItems.forEach((li) => li.classList.remove("active"));
      // Добавляем класс active к текущему элементу
      this.classList.add("active");
    });
  });
});
