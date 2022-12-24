const createDiv = (id, parent) => {
  const div = document.createElement('div');
  div.id = id;
  parent.appendChild(div);
};

const createH1 = (id, parent) => {
  const h1 = document.createElement('h1');
  h1.id = id;
  h1.innerText = 'Gerador de memes';
  parent.appendChild(h1);
};

const createInput = (id, parent, type) => {
  const input = document.createElement('input');
  input.id = id;
  input.type = type;
  parent.appendChild(input);
};

// const createButton = (id) => {
//   const div = document.getElementById('input-div');
//   const button = document.createElement('button');
//   button.id = id;
//   button.innerHTML = 'Criar';
//   div.appendChild(button);
// };

// const createImg = (id, parent, src) => {
//   const img = document.createElement('img');
//   img.src = src;
//   img.id = id;
//   parent.appendChild(img);
// };

// const removeImg = (id) => {
//   const memeImageContainer = document.getElementById('meme-image-container');
//   const img = document.getElementById(id);
//   memeImageContainer.removeChild(img);
// };

const showText = () => {
  const input = document.getElementById('text-input');
  const displayText = document.getElementById('meme-text');
  input.addEventListener('input', () => {
    displayText.innerHTML = input.value;
  });
};

const displayImage = () => {
  const memeImage = document.getElementById('meme-image');
  const inputImage = document.getElementById('meme-insert');
  const img = document.createElement('img');
  img.id = 'image';
  memeImage.appendChild(img);

  inputImage.addEventListener('change', () => {
    if (inputImage.files.length <= 0) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result;
    };
    reader.readAsDataURL(inputImage.files[0]);
  });
};

window.onload = () => {
  createDiv('input-div', document.body);
  createDiv('meme-image-container', document.body);
  const memeImageContainer = document.getElementById('meme-image-container');
  const div = document.getElementById('input-div');
  createH1('hero-title', div);
  createInput('text-input', div);
  createInput('meme-insert', div, 'file');
  createDiv('meme-image', memeImageContainer);
  const memeImage = document.getElementById('meme-image');
  createDiv('meme-text', memeImage);
  showText();
  displayImage();
};
