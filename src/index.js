import {showThings} from './show.js';
import {kittens,lions} from './cats.js';
import {toys,food} from './things.js';
import {makeButton} from './button.js';

console.log(showThings(lions));

const button = makeButton("I'm cute as a button");
document.body.appendChild(button);


//button.addEventListener("click", e => {
//  import("./footer").then(footerModule => {
//    document.body.appendChild(footerModule.footer);
//  });
//});

button.addEventListener("click",e => {
  document.body.appendChild(footer);
});