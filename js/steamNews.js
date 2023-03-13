const sectionNewsSteam = document.querySelector("#divSteamNews");
const spinner = document.querySelector(".loader-wrapper");

const fetchData = async () => {

  return new Promise(async (resolve, reject) => {

    try {
      await delay(.1);
      const res = await fetch("../steamNews.json");
      const dados = await res.json();
      resolve(dados);
    } catch (err) {
      reject("Houve um problema no carregamento do feed.");
    }

  })

}

fetchData().then((dados) => {

  spinner.style.display = "none";

  dados.games.forEach((element) => {
    generateNewsCard(element);
  })
});

fetchData().catch((error) => {
  spinner.style.display = "none";
  const msg = document.createElement('span');
  msg.className = "error"
  msg.innerHTML = error;
  sectionNewsSteam.appendChild(msg);
})

function generateNewsCard(object) {

  const newCard = document.createElement("div");
  newCard.className = "newCard-item";

  const newCardDescription = document.createElement("div");
  newCardDescription.className = "newCardDescription-item";

  const newCardImg = document.createElement("div");
  newCardImg.className = "newCardImg-item";

  const newImg = document.createElement("img");
  newImg.className = "cardImg-item";
  newImg.src = object.urlImgGame;

  const nameGame = document.createElement("h2");
  nameGame.className = "nameGame"
  nameGame.innerHTML = object.gameName;

  const newsTitle = document.createElement("h3");
  newsTitle.className = "newsGameTitle"
  newsTitle.innerHTML = object.newsGameTitle;

  const newsDescription = document.createElement("p");
  newsDescription.className = "newsGameDescription"
  newsDescription.innerHTML = object.newsGameDescription;

  newCardDescription.appendChild(nameGame);
  newCardDescription.appendChild(newsTitle);
  newCardDescription.appendChild(newsDescription);
  newCardImg.appendChild(newImg);

  newCard.appendChild(newCardDescription);
  newCard.appendChild(newCardImg);

  sectionNewsSteam.appendChild(newCard);

}

function delay(value) {
  return new Promise(resolve => setTimeout(resolve, 1000 * value));
}