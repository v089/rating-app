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
const fourth = document.querySelector(".fourth-slider");
const fiveth = document.querySelector(".fiveth-slider");
const buttonSecond = document.getElementById("loadMore");
const buttonThird = document.getElementById("loadMore1");
const buttonFourth = document.getElementById("loadMore2");
const buttonFiveth = document.getElementById("loadMore3")

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
buttonFourth.addEventListener("click", () => {
  if (fourth.style.display === "none" || fourth.style.display === "") {
      fourth.style.display = "block";
      buttonFourth.innerText = "Скрыть"
  } else {
      fourth.style.display = "none"; // Скрываем элемент
      buttonFourth.innerText = "Показать еще"
  }
});
buttonFiveth.addEventListener("click", () => {
  if (fiveth.style.display === "none" || fiveth.style.display === "") {
      fiveth.style.display = "block";
      buttonFiveth.innerText = "Скрыть"
  } else {
      fiveth.style.display = "none"; // Скрываем элемент
      buttonFiveth.innerText = "Показать еще"
  }
});