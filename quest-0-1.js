// VARIABLES
var t = "Марк рекомендует";
if (localStorage.getItem('i') == null) {
  localStorage.setItem('i', 0)
}

// FUNCTIONS
/// Removing the quest block
function kill(parent, child) {
  parent.removeChild(child);
  localStorage.clear();
}

/// Delaying removal
function bye(parent, child, text){
  text.innerHTML = "Пока! :(";
  setTimeout(kill, 2000, parent, child);
  console.log("clicked");
}

function update(ind){
  if (ind == 100) {
    bye(page, block, text)
  } else {
    text.innerHTML = library[ind].question;
    option1.innerHTML = library[ind].answer1;
    option2.innerHTML = library[ind].answer2;
    localStorage.setItem('i', ind);
    console.log(localStorage.getItem('i'));
  }
}

// OBJECTS

/// Addressing the existing objects
var page = document.getElementById('content');
var block = document.getElementById('quest-block');

/// Adding new objects

var ava = document.createElement('div');
ava.classList.add('ava');
block.appendChild(ava);

var img = document.createElement('img');
img.classList.add('maurelius');
img.src = 'maimg.jpg';
ava.appendChild(img);

var dialog = document.createElement('div');
dialog.classList.add('dialog');
block.appendChild(dialog);

var title = document.createElement('h2');
title.classList.add('unit-title');
dialog.appendChild(title);

var text = document.createElement("p");
dialog.appendChild(text);

var option1 = document.createElement("button");
option1.classList.add("option-btn");
dialog.appendChild(option1);

var option2 = document.createElement("button");
option2.classList.add("option-btn");
dialog.appendChild(option2);

var exits = [5,8,9,10];

// LIBRARY
library = [
  {
    n: 0,
    question: "Привет, я Марк. У меня большой опыт работы в должности императора "+
    "и статус одного из топовых экспертов в области стоицизма. Могу посоветовать "+
    "тебе какое-нибудь прикладное стоическое упражнение. "+
    "Для этого нужно ответить на пару вопросов. Хочешь?",
    answer1: "Давай",
    answer2: "Да ну не",
    target1: 1,
    target2: 2
  },
  {
    n: 1,
    question: "Окей, начнем. Как ты в целом?",
    answer1: "Чилю",
    answer2: "Парюсь",
    target1: 3,
    target2: 4
  },
  {
    n: 2,
    question: "Ну ооооок :( Пойду тогда...",
    answer1: "Ненене, я передумал",
    answer2: "Давай-давай!",
    target1: 1,
    target2: 100
  },
  {
    n: 3,
    question: "Ну, похоже, ты уже познал стоицизм. Попробуешь какое-нибудь "+
    "случайное упражнение?",
    answer1: "Ну давай",
    answer2: "Не, давай до свидания",
    target1: exits[Math.floor(Math.random() * exits.length)],
    target2: 100
  },
  {
    n: 4,
    question: "Хммм, давай поговорим о твоей сложной ситуации. Знаешь ли ты, "+
    "что нужно делать в этой твоей сложной ситуации?",
    answer1: "Понятия не имею",
    answer2: "Да всё там понятно",
    target1: 5,
    target2: 6
  },
  {
    n: 5,
    question: "Ага! Похоже, тебе нужно принять немного "+
    "<a href='#dichotomy'>Дихотомии контроля</a>!",
    answer1: "Давай еще раз",
    answer2: "Скройся!",
    target1: 0,
    target2: 100
  },
  {
    n: 6,
    question: "Ну и что тебе мешает, раз такой умный?",
    answer1: "Эмоции",
    answer2: "Не что, а кто",
    target1: 7,
    target2: 8
  },
  {
    n: 7,
    question: "Так, то есть тебе сложно что-то предпринять в этой ситуации" +
    "потому что...",
    answer1: "Мне не нравятся сложности",
    answer2: "Уже нечего там предпринимать",
    target1: 9,
    target2: 10

  },
  {
    n: 8,
    question: "Ок, попробуй <a href='#perspective'>Перспективу другого</a>",
    answer1: "Повторим",
    answer2: "Всё, пока",
    target1: 0,
    target2: 100
  },
  {
    n: 9,
    question: "Очевидно! Это <a href='#aversion'>Уклонение</a>!",
    answer1: "Давай еще раз",
    answer2: "Исчезни!",
    target1: 0,
    target2: 100
  },
  {
    n: 10,
    question: "Ну, тогда попробуй немного "+
    "<a href='#sympathy'>Сочувствия вместо эмпатии</a>!",
    answer1: "Давай еще раз",
    answer2: "Иди отсюда!",
    target1: 0,
    target2: 100
  }

];

// Assining texts
title.innerHTML = t;
update(0);

option1.addEventListener("click", function(){update(library[localStorage.getItem('i')].target1)}, false);
option2.addEventListener("click", function(){update(library[localStorage.getItem('i')].target2)}, false);
