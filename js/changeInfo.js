// guardara las direcciones de las imagenes
let content = {};

// agarrando las cajas
const boxes = document.querySelectorAll('.requisitos__box');

// agarrando la caja que estaria cambiando
const container = document.getElementById('content');

boxes.forEach((box) => {
  const src = box.querySelector('img').src;
  const text = box.querySelector('h2').textContent.trim();
  const contentText = box.querySelector('h3').textContent.trim();

  content = {
    ...content,
    [box.id]: { src: src, text: text, contentText: contentText },
  };

  box.addEventListener('click', async () => {
    const id = box.id;

    boxes.forEach((item) => item.classList.remove('bg-blue-green', 'c-white'));

    if (id === box.id) {
      box.classList.add('bg-blue-green', 'c-white');
      console.log(box);
    }

    container.querySelector('h2').innerText = content[id].text;
    container.querySelector('h3').innerText = content[id].contentText;
  });
});

console.log(content);
