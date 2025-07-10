// Всі теги у HTML являються об'єктом

// Тег html є DOM


// const titleElement
// const titleRef


// Селектор тега
// document.querySelector() - Метод elem.querySelector це сучасний стандарт для пошуку DOМ-вузлів. Вони дозволяють знайти вузол або групу вузлів по CSS-селектору будь-якої складності.
// Повертає null
// // const titleEl = document.querySelector("#qwerty");
// // console.log(titleEl);



// // Селектор тега по атрибуту id=""
// // document.getElementById() - Метод який шукає елемент по id
// const titleEl = document.getElementById("qwerty")
// console.log(titleEl);


// // Метод elem.querySelectorAll використовується, коли ми свідомо знаємо, що підходящих елементів більше одного.
// const linkEl = document.querySelectorAll("a"); // Повертає псевдомасив всіх вибраних елементів. Сюди передаємо тег кого ми шукаємо, як метод find()
// console.log(linkEl);
// linkEl.forEach(x  => console.log(x))

// const listEl = document.querySelector("ul");
// console.log(listEl);

// const linkRef = listEl.querySelectorAll("a");
// console.log(linkRef);
// linkRef.forEach(x => console.log(x));



// const listEl = document.querySelector("ul");
// console.log(listEl.parentNode); // Повертає елемент батька
// console.log(listEl.children); // Повертає всі дочірні елементи
// console.log(listEl.firstElementChild); // Повертає перший елемент
// console.log(listEl.lastElementChild); // Повертає останній елемент
// console.log(listEl.previousElementSibling); // Повертає попередній елемент
// console.log(listEl.nextElementSibling); // Повертає наступний елемент
// // console.log(listEl[2]); // Повертає індекс знайденого елемента, але треба шукати по елементу



// const imagesEl = document.querySelector("img");
// console.log(imagesEl);
// imagesEl.hidden = true; // Невидимий

// const inputEl = document.querySelector("input");
// console.log(inputEl.value);
// inputEl.checked = true;

// imagesEl.src = "./img/image2.png";
// imagesEl.alt = "fox";
// console.log(imagesEl);


const titleEl = document.querySelector(".title");
console.log(titleEl.textContent);
// elem.textContent властивість, містить текстовий контент всередині елемента. Доступно для запису. при чому незалежно що буде передано в textContent, дані завжди будуть записані як текст
titleEl.textContent = "Новий заголовок сторінки";
console.log(titleEl.textContent);

// Через document.style можна робити стилі, але у вигляді camelCase
// Використовується для отримання й установки інлайнових стилів. Повертає об'єкт CSSStyleDeclaration, який містить список всіх властивостей певних тільки в інлайновому стилі елемента, а не весь СЅЅ. Властивість можна як читати так і записувати. При записі, властивості записуються в саmelCase, тобто background-color перетворюється в element.style.backgroundColor тощо.
titleEl.style.color = "red";
titleEl.style.fontSize = "50px";

console.log(titleEl);


document.body.style.background = "skyblue";


console.log(titleEl.classList.contains("title")); // Повертає true або false. Перевіряє, чи є класс у елемента чи ні

titleEl.classList.add("qwe"); // Додає клас
titleEl.classList.add("aasdasdasd"); 
titleEl.classList.remove("aasdasdasd"); // Прибирає клас

console.log(titleEl);

titleEl.classList.replace("qwe", "text"); // Замінює клас на назначений клас, (існуючийКлас, новийКлас)

const btnEl = document.querySelector(".btn");
console.log(btnEl);

btnEl.addEventListener("click", () => { // .addEventListener() - Об'єкт подій
    titleEl.classList.toggle("text");
})


