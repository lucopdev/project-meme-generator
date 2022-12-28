const memeImgContainer = 'meme-image-container';
const memeImg = 'meme-image';

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

const createInput = (id, parent, type, maxLength) => {
  const input = document.createElement('input');
  input.id = id;
  input.type = type;
  input.maxLength = maxLength;
  parent.appendChild(input);
};

const createButton = (id, parent, innerText, bgColor) => {
  const button = document.createElement('button');
  button.id = id;
  button.innerHTML = innerText;
  button.style.backgroundColor = bgColor;
  parent.appendChild(button);
};

const showText = () => {
  const input = document.getElementById('text-input');
  const displayText = document.getElementById('meme-text');
  input.addEventListener('input', () => {
    displayText.innerHTML = input.value;
  });
};

const displayImage = () => {
  const memeImage = document.getElementById(memeImg);
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

const createBorder = () => {
  const memeImageContainer = document.getElementById(memeImgContainer);
  const fire = document.getElementById('fire');
  const water = document.getElementById('water');
  const earth = document.getElementById('earth');
  fire.addEventListener('click', (e) => {
    console.log(e.target.style.backgroundColor);
    memeImageContainer.style.border = `3px dashed ${e.target.style.backgroundColor}`;
  });

  water.addEventListener('click', (e) => {
    console.log(e.target.style.backgroundColor);
    memeImageContainer.style.border = `5px double ${e.target.style.backgroundColor}`;
  });

  earth.addEventListener('click', (e) => {
    console.log(e.target.style.backgroundColor);
    memeImageContainer.style.border = `6px groove ${e.target.style.backgroundColor}`;
  });
};

window.onload = () => {
  createDiv('input-div', document.body);
  createDiv('meme-image-container', document.body);
  const memeImageContainer = document.getElementById(memeImgContainer);
  const div = document.getElementById('input-div');
  createH1('hero-title', div);
  createInput('text-input', div, 'text', '60');
  createInput('meme-insert', div, 'file');
  createDiv('meme-image', memeImageContainer);
  const memeImage = document.getElementById(memeImg);
  createDiv('meme-text', memeImage);
  showText();
  displayImage();
  createDiv('btn-div', document.body);
  const btnDiv = document.getElementById('btn-div');
  createButton('fire', btnDiv, 'Fire', 'rgb(255, 0, 0)');
  createButton('water', btnDiv, 'Water', 'rgb(0, 0, 255)');
  createButton('earth', btnDiv, 'Earth', 'rgb(0, 128, 0)');
  createBorder();
};
