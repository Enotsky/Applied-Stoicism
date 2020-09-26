function kill(parent, child) {
  parent.removeChild(child);
  console.log("clicked");
}

function bye(parent, child, text){
  text.innerHTML = "Ну оооок :("
  setTimeout(kill, 2000, parent, child)
}


var q = "Хочешь, я посоветую упражнение под твою задачу?";
var op1 = "Давай"
var op2 = "Да ну не"

var page = document.getElementById('content')
var block = document.getElementById("quest-block");


var text = document.getElementById("question");
text.innerHTML = q;
var ansr = document.getElementById("answer");

var option1 = document.createElement("button");
option1.classList.add("option-btn");
option1.innerHTML = op1;

var option2 = document.createElement("button");
option2.classList.add("option-btn");
option2.innerHTML = op2;

option2.addEventListener("click", function(){bye(page, block, text)}, false);

ansr.appendChild(option1);
ansr.appendChild(option2);
