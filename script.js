const memeImgContainerClass = 'meme-image-container';
const memeImgClass = 'meme-image';
const containerImgsClass = 'container-imgs';
const tinyImagesClass = 'tiny-images';
const memeInsertClass = 'meme-insert';

const createImg = (id, parent, name) => {
  const img = document.createElement('img');
  img.id = id;
  img.className = tinyImagesClass;
  img.setAttribute('src', `imgs/${name}`);
  parent.appendChild(img);
};

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

const imageRemove = () => {
  const memeImage = document.getElementById(memeImgClass);
  for (let index = 0; index < memeImage.childElementCount; index += 1) {
    if (memeImage.children[index].classList.contains(tinyImagesClass)) {
      memeImage.children[index].remove();
    }
  }
};

const displayImage = () => {
  const memeImage = document.getElementById(memeImgClass);
  const inputImage = document.getElementById(memeInsertClass);
  const img = document.createElement('img');
  img.id = 'image';
  img.className = tinyImagesClass;
  inputImage.addEventListener('change', () => {
    imageRemove();
    if (inputImage.files.length === 0) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result;
    };
    reader.readAsDataURL(inputImage.files[0]);
    memeImage.appendChild(img);
  });
};

const createBorder = () => {
  const memeImageContainer = document.getElementById(memeImgContainerClass);
  const fire = document.getElementById('fire');
  const water = document.getElementById('water');
  const earth = document.getElementById('earth');
  fire.addEventListener('click', (e) => {
    memeImageContainer.style.border = `3px dashed ${e.target.style.backgroundColor}`;
  });
  water.addEventListener('click', (e) => {
    memeImageContainer.style.border = `5px double ${e.target.style.backgroundColor}`;
  });
  earth.addEventListener('click', (e) => {
    memeImageContainer.style.border = `6px groove ${e.target.style.backgroundColor}`;
  });
};

const addPreviewImage = () => {
  const inputImage = document.getElementById(memeInsertClass);
  const tinyImages = document.getElementsByClassName(tinyImagesClass);
  const memeImage = document.getElementById(memeImgClass);
  for (let index = 0; index < tinyImages.length; index += 1) {
    tinyImages[index].addEventListener('click', () => {
      imageRemove();
      createImg(`meme-${index + 1}`, memeImage, `meme${index + 1}.png`);
      const img = document.getElementById(`meme-${index + 1}`);
      img.setAttribute('id', 'image');
      memeImage.setAttribute('src', `imgs/meme${index + 1}.png`);
      inputImage.value = '';
    });
  }
};

createDiv('input-div', document.body);
createDiv('meme-image-container', document.body);
const memeImageContainer = document.getElementById(memeImgContainerClass);
const div = document.getElementById('input-div');
createH1('hero-title', div);
createInput('text-input', div, 'text', '60');
createInput('meme-insert', div, 'file');
createDiv('meme-image', memeImageContainer);

window.onload = () => {
  const memeImage = document.getElementById(memeImgClass);
  createDiv('meme-text', memeImage);
  showText();
  displayImage();
  createDiv('btn-div', document.body);
  const btnDiv = document.getElementById('btn-div');
  createButton('fire', btnDiv, 'Fire', 'rgb(255, 0, 0)');
  createButton('water', btnDiv, 'Water', 'rgb(0, 0, 255)');
  createButton('earth', btnDiv, 'Earth', 'rgb(0, 128, 0)');
  createBorder();
  createDiv('container-imgs', document.body);
  const containerImgs = document.getElementById(containerImgsClass);
  createImg('meme-1', containerImgs, 'meme1.png');
  createImg('meme-2', containerImgs, 'meme2.png');
  createImg('meme-3', containerImgs, 'meme3.png');
  createImg('meme-4', containerImgs, 'meme4.png');
  addPreviewImage();
};
