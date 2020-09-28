// FUNCTIONS

/// Removing the quest block
function kill(parent, child) {
  parent.removeChild(child);
}

/// Delaying removal
function bye(parent, child, text){
  text.innerHTML = "Ну оооок :(";
  setTimeout(kill, 2000, parent, child);
  console.log("clicked");
}

function update(i){
  text.innerHTML = library[i].question;
  option1.innerHTML = library[i].answer1;
  option2.innerHTML = library[i].answer2;
}



// VARIABLES
var i = 0;
var t = "Квест"
var q = "Могу посоветовать тебе какое-нибудь упражнение из области прикладного "+
"стоицизма. Для этого нужно ответить на пару вопросов. Хочешь?";
var op1 = "Давай";
var op2 = "Да ну не";

// OBJECTS

/// Addressing the existing objects
var page = document.getElementById('content');
var block = document.getElementById('quest-block');

/// Adding new objects
var title = document.createElement('h2');
title.classList.add('unit-title');
block.appendChild(title);

var text = document.createElement("p");
block.appendChild(text);

var option1 = document.createElement("button");
option1.classList.add("option-btn");
block.appendChild(option1);

var option2 = document.createElement("button");
option2.classList.add("option-btn");
block.appendChild(option2);

// LIBRARY
library = [
  {
    n: 0,
    question: "Могу посоветовать тебе какое-нибудь упражнение из области "+
    "прикладного стоицизма. Для этого нужно ответить на пару вопросов. Хочешь?",
    answer1: "Давай",
    answer2: "Да ну не",
    delta1: 1,
    delta2: 2
  },
  {
    n: 1,
    question: "Окей, начнем. Как дела вообще?",
    answer1: "Всё ровно",
    answer2: "Ну есть сложности",
    delta1: 3
  },
  {
    n: 2,
    question: "Ну ооооок :(",
    answer1: "Пока",
    answer2: "Auf Wiedersehen",
  },
  {
    n: 3,
    question: "Хм, а в чем заключается сложность",
    answer1: "Не понятно, что делать",
    answer2: "Надо делать, а я не хочу :("
  }

];

// Assining texts
title.innerHTML = t;
update(i);


option1.addEventListener("click", function (){i = library[i].delta1; update(i)}, false);
option2.addEventListener("click", function (){bye(page, block, text)}, false);
