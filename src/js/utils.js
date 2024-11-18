// TOGGLE TEXT
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
