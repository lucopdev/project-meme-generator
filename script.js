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

// const createImg = (id, parent, src) => {
//   const memeImageContainer = document.getElementById('meme0-image-container');
//   const img = document.createElement('img');
//   img.src = src;
//   parent.appendChild(img);
// };

const showText = () => {
  const memeDiv = document.getElementById('meme-image-container');
  const input = document.getElementById('text-input');
  const displayText = document.getElementById('meme-text');
  input.addEventListener('input', () => {
    displayText.innerHTML = input.value;
  });
};
const displayImage = () => {
  const inputImage = document.getElementById('meme-insert');
  const memeImageContainer = document.getElementById('meme-image-container');
  inputImage.addEventListener('change', () => {
    if (inputImage.files.length <= 0) {
      return;
    }
    console.log(inputImage.files);
    let reader = new FileReader();
    reader.onload = () => {
      memeImageContainer.style.backgroundImage = `url(${reader.result})`;
    };
    reader.readAsDataURL(inputImage.files[0]);
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
  displayImage();
};
