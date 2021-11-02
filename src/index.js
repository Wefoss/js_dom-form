
//form list rendering
const form = document.forms["form"];
const ul = document.querySelector(".list");
const emptyArray = [];

form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();
  let li = document.createElement("li");
  const {
    target: { textInfo },
  } = e;
  const item = textInfo.value.trim();
  const pattern = /^[A-Z][a-z]{2,10} [A-Z][a-z]{2,12}$/;
  if (pattern.test(item)) {
    li.append(document.createTextNode(item));
    ul.append(li);
    emptyArray.push(item);
  }
  form.reset();
}


//Паттерн имя изображения
const pattern = /.{1,}\.(png|jpg)$/;
const str = "some_45%#^%#^&.jpg";

console.log(pattern.test(str));



// Первые буквы инициалов
function firstLetter(stark = "John Snow") {
  return stark.split(" ").reduce((acc, el) => {
    acc += el.slice(0, 1);
    return acc;
  }, "");
}
