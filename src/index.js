'use strict'

//form list rendering
const form = document.forms["form"];
const ul = document.querySelector(".list");
const emptyArray = [];

form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();
  const {
    target: { textInfo },
  } = e;
  const text = textInfo.value.trim();
  const pattern = /^[A-Z][a-z]{2,10}$/;
  if (pattern.test(text)) {
    let li = handlerElem('li', {className:['list-item']}, document.createTextNode(text))
    let btn = handlerElem('button', {onClick: btnHandler.bind(li), attributs:[text], typeEvent:['click']},  document.createTextNode('send'))
    emptyArray.push(text)
    li.append(btn)
    ul.append(li)
  }
  this.reset()
}

 function btnHandler({target}) {
   console.log(target);
   this.remove()
   emptyArray.splice(emptyArray.indexOf(target), 1)
 }

function handlerElem(type, {className = [], attributs = '', onClick, typeEvent}, ...Children) {
  const elem = document.createElement(type)
  if(className.length) {
    elem.classList.add(className)
  }
  if(attributs) {
    elem.dataset.val = attributs
  }
  if(onClick) {
    elem.addEventListener(typeEvent, onClick)
  }
  elem.append(...Children)
  return elem
}





//Паттерн имя изображения
const pattern = /^[^<>:;,?"*|/]{1,}\.(png|jpg)$/;
const str = "some_45%##cs&.jpg";

console.log(pattern.test(str));


// Первые буквы инициалов
function firstLetter(stark = "John Snow") {
  return stark.split(" ").reduce((acc, el) => {
    acc += el.slice(0, 1);
    return acc;
  }, "");
}

//settimuot
function eventLoop(i = 0) {
  let timer = setTimeout(() => {
   console.log(i);
    ++i
    eventLoop(i)
 }, 500);
  return i > 10 && clearTimeout(timer)
}
eventLoop();


//Promise return fruits
let res = fetch('./src/date.json').then(data => data.json()).then((data) => data.reduce((acc, el) => {
  if(el.size === 'Large' && el.color === 'Red') {
   acc.push(el.fruit)
  }
  return acc
  }, [])).then((el) => console.log(el.join(' ')))