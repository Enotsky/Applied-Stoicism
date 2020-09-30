// VARIABLES
var t = "Квест";
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
    target1: 1,
    target2: 2
  },
  {
    n: 1,
    question: "Окей, начнем. Как дела вообще?",
    answer1: "Всё ровно",
    answer2: "Ну есть сложности",
    target1: 2,
    target2: 3
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
    question: "Хм, а в чем заключается сложность",
    answer1: "Не понятно, что делать",
    answer2: "Надо делать, а я не хочу :("
  }

];

// Assining texts
title.innerHTML = t;
update(0);

option1.addEventListener("click", function(){update(library[localStorage.getItem('i')].target1)}, false);
option2.addEventListener("click", function(){update(library[localStorage.getItem('i')].target2)}, false);
