var names = {
  'Joyce': [4, 5, 11, 29],
  'Aacyane': [7, 16, 22, 36],
  'Larisse': [13, 21, 66, 96],
  'Mikael': [6, 14, 108, 200],
  'Romário': [10, 25, 43, 51, 55, 60, 63, 78, 82, 99, 102, 104, 105, 106, 121, 134, 140, 142, 146, 148, 165, 172, 195, 198],
  'Torquato': [77, 130],
  'Paulista': [33, 128],
  'Rita': [8, 50],
  'Jaiel': [154, 107, 79, 9],
  'Nova': [125, 72],
  'Samuel': [49, 23, 76, 103],
  'Hellen': [44, 120],
  'Gerisson': [26, 68],
  'Fátima': [12, 48, 97, 156],
  'Júnior': [45, 74],
  'Elaine': [1, 57],
  'Padrinho': [84, 15, 62, 40],
  'Jardel': [28, 100],
  'Fábio': [19, 20],
  'Alexandre': [115, 176, 183, 3, 17],
  'Suzi': [70, 95],
  'Kelly': [113, 192, 27, 80],
  'Laura': [31, 101],
  'Isabela Noleto': [91, 24, 116, 147],
  'Caroline Cunha': [38, 56, 86],
  'Gerleane': [39],
  'Roberto': [167, 37],
  'Jonathan': [87, 88, 89, 90],
  'A Rita': [73, 123, 59, 169],
  'Manin k': [41, 34, 110, 122],
  'Rayka': [53],
  
};
var wc = 0;

function sortNum() {
  document.getElementById("sortear").style.display = "none";
  document.querySelector(".name").style.display = "none";
  document.querySelector(".base").style.display = "none";
  const x = document.getElementById("num");
  const y = document.getElementById("name");
  var numeroFinal = Math.floor(Math.random() * 200) + 1;
  const tempoTotal = 1500; // Tempo total da animação em milissegundos (2 segundos)
  const intervalo = 50; // Intervalo de atualização da animação em milissegundos
  let contador = 0;

  function getNameFromNumber(number) {
    for (const name in names) { if (names[name].includes(number)) { return name; } }
    return null; // ou "Número não encontrado" ou qualquer outra mensagem que desejar
  }

  function animarNumero() {
    y.classList.remove("visible");
    if (contador <= tempoTotal / intervalo) {
      const t = contador / (tempoTotal / intervalo);
      const valorIntermediario = Math.floor(Math.random() * 200) + 1; // Número aleatório entre 1 e 200
      var foundName = getNameFromNumber(valorIntermediario);
      x.innerText = valorIntermediario;
      y.innerHTML = foundName;
      contador++; setTimeout(animarNumero, intervalo);
    } else {
      while (foundName == null) {
        numeroFinal = Math.floor(Math.random() * 40) + 1;
        foundName = getNameFromNumber(numeroFinal);
        var foundName2 = getNameFromNumber(numeroFinal);
        console.log(wc);
      }
      wc++;
      y.classList.add("visible");
      x.innerText = numeroFinal;
      y.innerHTML = foundName;
      names[foundName].splice(names[foundName].indexOf(numeroFinal), 1);
      document.getElementById("resortear").style.display = "flex";
      document.querySelector(".name").style.display = "flex";
      if (wc == 1) {
        document.querySelector(".fwinner").innerHTML = "Parabéns <b>" + foundName + "</b>!";
        document.querySelector(".base").style.display = "flex";
      } else if (wc == 2){
      document.querySelector(".swinner").innerHTML = "Parabéns <b>" + foundName2 + "</b>!";
      document.querySelector(".base").style.display = "flex";
      document.querySelector("#swinner").classList.toggle("visible");
      document.querySelector(".resortear").style.display = "none";
      }
    }
  }
  animarNumero();
}

function collApse(){
  document.querySelector(".right").classList.remove("expanded");
  document.querySelector(".left").classList.add("visible");
  sortNum();
}
function expand(){
  document.querySelector(".right").classList.add("expanded");
  document.querySelector(".left").classList.remove("visible");
  sortNum();
}