const btnAbrir = document.querySelector('#open');
const btnAbrirImg = document.querySelector("#openI");
const miDialogo = document.querySelector('#dialog');
const btnCerrar = document.querySelector('#close');

btnAbrir.addEventListener('click', () => {
  miDialogo.showModal();
});

btnAbrirImg.addEventListener('click', () => {
  miDialogo.showModal();
});


btnCerrar.addEventListener('click', () => {
  miDialogo.close();
});