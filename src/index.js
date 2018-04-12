import './style.css';

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');

  element.innerHTML = 'Hello, webpack!';
  element.classList.add('hello');

  button.innerHTML = 'Click Me!';

  element.appendChild(button);

  return element;
}

document.body.appendChild(component());
