import * as _ from 'lodash';
import { Greeter } from './components/Greeter/index';

function component() {
  let element = document.createElement('h1');
  element.innerHTML = _.join(['Halo', 'one', 'world.', Greeter('drew')], ' ');
  return element;
}

document.body.appendChild(component());
