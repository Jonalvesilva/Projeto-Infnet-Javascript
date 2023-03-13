const bannerPrincipal = document.querySelector(".bannerPrincipalImg");
let indice = 1;

const urlListaBanners = {
  0: "img/banners/banner1.jpg",
  1: "img/banners/banner2.jpg",
  2: "img/banners/banner3.webp",
  3: "img/banners/banner4.png",
  4: "img/banners/banner5.webp",
  5: "img/banners/banner6.jpg",
}

bannerPrincipal.setAttribute('src', urlListaBanners[indice]);


setInterval(() => {
  const tamanhoIndice = Object.keys(urlListaBanners).length;

  if (indice > tamanhoIndice - 1) {
    indice = 0;
    bannerPrincipal.setAttribute('src', urlListaBanners[indice]);
    indice++;
  } else {
    bannerPrincipal.setAttribute('src', urlListaBanners[indice]);
    indice++;
  }
}
  , 5000);



