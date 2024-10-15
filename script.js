const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    centeredSlides: true, // Включаем центрирование слайдов
    slidesPerView: 'auto', // Устанавливаем количество видимых слайдов
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar

  });





const second = document.querySelector(".second-slider");
const third = document.querySelector(".third-slider");
const buttonSecond = document.getElementById("loadMore");
const buttonThird = document.getElementById("loadMore1");

buttonSecond.addEventListener("click", () => {
    if (second.style.display === "none" || second.style.display === "") {
        second.style.display = "block";
        buttonSecond.innerText = "Скрыть"
    } else {
        second.style.display = "none"; // Скрываем элемент
        buttonSecond.innerText = "Показать еще"
    }
});
buttonThird.addEventListener("click", () => {
  if (third.style.display === "none" || third.style.display === "") {
      third.style.display = "block";
      buttonThird.innerText = "Скрыть"
  } else {
      third.style.display = "none"; // Скрываем элемент
      buttonThird.innerText = "Показать еще"
  }
});