
import { name } from "./feature";

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = `hello ${name}`
  
    return element;
  }

  document.body.appendChild(component());