const footer = document.querySelector("#footer");
footer.style.width = "100%";
footer.style.height = "50px";
footer.style.backgroundColor = "#03154E";
footer.style.color = "white";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "center";



let str = "Projeto " + "Javascript " + "realizado " + "por " + "Jonathan Alves";
const span = document.createElement('span');
span.innerHTML = str;
footer.appendChild(span);

const vetor = ["Sem fins lucrativos",
  "Estudo de Programação",
  "Projeto Infnet",
  "Desenvolvedor Full Stack",
  "Projeto Javascript realizado por Jonathan Alves"];


const INTERVAL = 2000;
setInterval(() => {
  vetor.forEach((item, index) => {
    setTimeout(() => {
      span.innerHTML = item;
    }, INTERVAL * index);
  });
}, 10000)





