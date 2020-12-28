export default addComment;

document.body.onload = addComment;

function addComment() {
  let p = document.createElement("p");
  document.body.appendChild(p);
};
