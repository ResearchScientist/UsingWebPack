import cs from "./addTask";

const cs = document.getElementById('commentsection');
cs.addEventListener("click", function() {
  console.log('changing colour');
  cs.style.backgroundColor = 'orange';
});
