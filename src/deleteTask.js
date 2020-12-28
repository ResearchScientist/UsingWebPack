import addComment from "./addTask";
export default cs;

const cs = document.getElementById('commentsection');
cs.addEventListener("click", function() {
  console.log('changing colour');
  cs.style.backgroundColor = 'orange';
  p.style.backgroundColor = 'orange';
  console.log(addComment);
});
