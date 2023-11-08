/* 1) Дан массив из объектов с полями title и text. 
Заполните массив сами произвольными данными. Ваша задача отрисовать данные на странице в соответствующих тегах 
(h2 - для title, p - для text)*/


// const data = [
//     { title: "Header 1", text: "Text 1" },
//     { title: "Header 2", text: "Text 2" },
//     { title: "Header 3", text: "Text 3" },
//   ];
  
  
//   function Parentdata() {
//     const container = document.getElementById("data-container");
  
//     container.innerHTML = "";
  
//     data.forEach(function (item) {
//       const titleElement = document.createElement("h2");
//       titleElement.textContent = item.title;
  
//       const textElement = document.createElement("p");
//       textElement.textContent = item.text;
  
//       container.appendChild(titleElement);
//       container.appendChild(textElement);
//     }, );
//   }
  
//   Parentdata();
  


/* 2) Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, 
но только если в момент клика нажата клавиша Ctrl. */

// const element = document.getElementsByClassName('second-task'); 

// element.addEventListener('click', function (event) {
//   if (event.ctrlKey) {
//     element.style.color = 'red'; 
//   }
// });



/* 3) Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст 
записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3' */


// const element = document.getElementsByClassName('third-task');

// element.addEventListener('click', function (event) {
//   if (event.ctrlKey) {
//     element.textContent = '1';
//   } else if (event.altKey) {
//     element.textContent = '2';
//   } else if (event.shiftKey) {
//     element.textContent = '3';
//   }
// });




/* 4)  Даны абзацы с числами. То есть, несколько подобных элементов <p>1</p>. По нажатию на 
абзац в нем должен появится квадрат числа, которое он содержит. */


// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function(paragraph) {
//   paragraph.addEventListener('click', function() {
//     const number = parseFloat(paragraph.textContent);
//     if (!isNaN(number)) {
//       paragraph.textContent = number * number;
//     }
//   });
// });



/* 5) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку в 
console.log выводился ее src. */

// const imageWrapArr = document.getElementsByClassName('image-wrap');

// for (let imageWrap of imageWrapArr) {
//   const img = imageWrap.getElementsByTagName('img')[0];
//   const imgTextEl = imageWrap.getElementsByClassName('text')[0];

//   img.addEventListener('mouseover', function(e) {
//     imgTextEl.textContent = 'Mouse over image: ' + e.target.src;
//   });

//   img.addEventListener('mouseleave', function(e) {
//     imgTextEl.textContent = 'Mouse left image: ' + e.target.src;
//   });
// }


/* 6) Даны ссылки с заполненным href. Например <a href="https://google.com">Сайт гугл</a>. 
Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках. */


        const links = document.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('mouseover', function() {
                const currentText = this.textContent;
                const href = this.getAttribute('href');

                this.textContent = currentText + ' (' + href + ')';
            });

            link.addEventListener('mouseout', function() {
                const href = this.getAttribute('href');
                this.textContent = this.textContent.replace(' (' + href + ')', '');
            });
        });
