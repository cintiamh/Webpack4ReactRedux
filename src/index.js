import './style.css';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');

  element.innerHTML = 'Hello, webpack!';
  element.classList.add('hello');

  button.innerHTML = 'Click Me!';

  element.appendChild(button);

  return element;
}

document.body.appendChild(component());
