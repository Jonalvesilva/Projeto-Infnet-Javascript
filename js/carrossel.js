const carrossel = document.querySelector("#carrossel");

const jogos = {
  0: {
    name: "Resident Evil 4",
    url: "../img/carrosselImg/re4.webp"
  },

  1: {
    name: "The Legend of Zelda: Tears of Kingdom",
    url: "../img/carrosselImg/zelda.jpg"
  },

  2: {
    name: "Final Fantasy XVI",
    url: "../img/carrosselImg/ff.jpg"
  },

  3: {
    name: "Star Wars: Jedi Survivor",
    url: "../img/carrosselImg/star.jpg"
  },

  4: {
    name: "Starfield",
    url: "../img/carrosselImg/starfield.jpg"
  },

  5: {
    name: "Street Fighter 6",
    url: "../img/carrosselImg/sf.jpg"
  },

  6: {
    name: "Diablo 4",
    url: "../img/carrosselImg/diablo.webp"
  },

  7: {
    name: "Suicide Squad",
    url: "../img/carrosselImg/suicide.webp"
  },

  8: {
    name: "Naruto Ultimate Ninja Storm Connections",
    url: "../img/carrosselImg/naruto.jpg"
  },

  9: {
    name: "Spider Man 2",
    url: "../img/carrosselImg/sp2.jpg"
  }

}

for (let indice = 0; indice < 10; indice++) {

  const newImg = new Image();

  newImg.src = jogos[indice].url;
  newImg.className = "carrossel-image";
  carrossel.appendChild(newImg);

}

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: true
    },
    1000: {
      items: 5,
      nav: true,
    }
  }
})