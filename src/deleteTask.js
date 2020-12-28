import p from "./index";

const cs = document.getElementById('commentsection');
cs.addEventListener("click", function() {
  console.log('changing colour');
  cs.style.backgroundColor = 'orange';
  p.style.backgroundColor = 'orange';
});
