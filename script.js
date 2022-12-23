const createDiv = (id, parent) => {
  const div = document.createElement('div');
  div.id = id;
  parent.appendChild(div);
};

const createH1 = (id) => {
  const div = document.getElementById('input-div');
  const h1 = document.createElement('h1');
  h1.id = id;
  h1.innerText = 'Gerador de memes';
  div.appendChild(h1);
};

const createInput = (id, parent, type) => {
  const input = document.createElement('input');
  input.id = id;
  input.type = type;
  parent.appendChild(input);
};

const createButton = (id) => {
  const div = document.getElementById('input-div');
  const button = document.createElement('button');
  button.id = id;
  button.innerHTML = 'Criar';
  div.appendChild(button);
};

const showText = () => {
  const memeDiv = document.getElementById('meme-image-container');
  const input = document.getElementById('text-input');
  const displayText = document.getElementById('meme-text');
  input.addEventListener('input', () => {
    displayText.innerHTML = input.value;
  });
};

window.onload = () => {
  createDiv('input-div', document.body);
  const div = document.getElementById('input-div');
  createH1('hero-title');
  createInput('text-input', div);
  createInput('meme-insert', div, 'file');
  createDiv('meme-image-container', document.body);
  const memeDiv = document.getElementById('meme-image-container');
  createDiv('meme-text', memeDiv);
  showText();
};
