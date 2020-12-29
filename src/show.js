import {kittens,lions} from './cats';
import {toys,food} from './things';

function showThings(things) {
  for (let i = 0; i < things.length; i++) {
    const thing = things[i];
    console.log(thing);
  }
};

export {showThings,kittens,lions,toys,food};