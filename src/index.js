const images = [
  { src: "./img/1.JPG", title: "Batatabit", description: "D2-PLAN ayuda a resolver barreras del diseño de la planeación y su complejidad.", lenguajes: "Lenguajes utilizados:"},
  { src: "./img/2.JPG", title: "Cifrado Cesar", description: "Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.", lenguajes: "Lenguajes utilizados:" },
  { src: "./img/3.JPG", title: "ToroSeries", description: "Es una plataforma que te muestra las series del anime más relevantes del momento y por categorias. Se utilizó en este espacio un API para acceder y ubicar los contenidos", lenguajes: "Lenguajes utilizados:" },
  { src: "./img/4.JPG", title: "Accesibilidad", description: "Se realiza mejoras a una web para que esta pueda ser utilizados para todos los tipos de usuarios que pueden llegar a acceder a nuestro web.", lenguajes: "Lenguajes utilizados:" },
  { src: "./img/5.JPG", title: "¿Goku gana?", description: "Una web que está con el tema muy peculiar y basada en la caricatura de DBZ, tiene un carousel y mostrador de información de los personajaes.", lenguajes: "Lenguajes utilizados:" },
  { src: "./img/6.JPG", title: "ToroMovies", description: "Plataforma que está diseñada para recuperar un API de las películas más relevantes del momento. En este espacio se puede añadir a favoritos y/o eliminar los mismos.", lenguajes: "Lenguajes utilizados:" },
  { src: "./img/7.JPG", title: "CreeperGrid", description: "Se diseño una cara de Creeper del juego Minecraft con el método CSS GRID", lenguajes: "Lenguajes utilizados:" },
  { src: "./img/8.JPG", title: "100tifíco", description: "Una plataforma que recupera un API de los personajes de la caricatura futurama.", lenguajes: "Lenguajes utilizados:" },
  { src: "./img/9.png", title: "Goku portf", description: "Una web sencilla que parece portafolio, se utiliza el asincronismo usando una API y diferentes métodos para publicar contenidos en otra web.", lenguajes: "Lenguajes utilizados:" },
  { src: "./img/10.JPG", title: "Lolly pop", description: "esta web fue diseñada con Tailwind css", lenguajes: "Lenguajes utilizados:" },
  { src: "./img/11.JPG", title: "Rollup", description: "Una página web donde se usa el empaquetador RollUp con la API que tiene disponible Platzi.", lenguajes: "Lenguajes utilizados:" },
];

// const icon = [
//   { img: "./assets/html.svg", alt: "icono de html"},
//   { src: "./assets/css.svg", alt: "icono de css"},
//   { src: "./assets/js.svg", alt: "icono de js"},
//   { src: "./assets/tailwind.svg", alt: "icono de tailwind"},
// ]

// me quedé en recuperar el elemento img para que se puedan mostrar en el elemento img, todavía no he recuperado el elemento y tampoco se ha agregado a la función

let index = 0;

const imgElement = document.querySelector(".carousel-container img");
const h2Element = document.querySelector(".carousel-container h2");
const pElement = document.querySelector(".description");
const lang = document.querySelector("#works")
const iconElement = document.querySelector(".carousel-container svg")
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  const image = images[index];
  imgElement.src = image.src;
  imgElement.alt = image.title;
  h2Element.textContent = image.title;
  pElement.textContent = image.description;
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  const image = images[index];
  imgElement.src = image.src;
  imgElement.alt = image.title;
  h2Element.textContent = image.title;
  pElement.textContent = image.description;
});