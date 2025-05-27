
//L1 e L2
function ajustarTopDasLinhas() {
    const alturaJanela = window.innerHeight;
    const baseAltura = 690;
    const incrementoPx = 10;
    const incrementoTop = 2;

    // Calcula o quanto deve adicionar
    const diferenca = Math.max(0, alturaJanela - baseAltura);
    const unidadesIncrementais = Math.floor(diferenca / incrementoPx);

    const novoTop1 = 170 - (unidadesIncrementais * incrementoTop);
    const novoTop2 = 172 - (unidadesIncrementais * incrementoTop);

    // Aplica o top calculado às linhas
    const linha1 = document.getElementById("LinhaHrzlPort1");
    const linha2 = document.getElementById("LinhaHrzlPort2");

    if (linha1) linha1.style.top = `${novoTop1}%`;
    if (linha2) linha2.style.top = `${novoTop2}%`;
  }

  // Chama a função ao carregar e redimensionar a janela
  window.addEventListener("load", ajustarTopDasLinhas);
  window.addEventListener("resize", ajustarTopDasLinhas);



 function ajustarTopDasLinhasMax500() {
    const alturaJanela = window.innerHeight;
    if (alturaJanela >= 499) return;
    const baseAltura = 400;
    const incrementoPx = 10;
    const incrementoTop = 6;

    // Calcula o quanto deve adicionar
    const diferenca = Math.max(0, alturaJanela - baseAltura);
    const unidadesIncrementais = Math.floor(diferenca / incrementoPx);

    const novoTop1 = 295 - (unidadesIncrementais * incrementoTop);
    const novoTop2 = 297 - (unidadesIncrementais * incrementoTop);

    // Aplica o top calculado às linhas
    const linha1 = document.getElementById("LinhaHrzlPort1");
    const linha2 = document.getElementById("LinhaHrzlPort2");

    if (linha1) linha1.style.top = `${novoTop1}%`;
    if (linha2) linha2.style.top = `${novoTop2}%`;
  }

  // Chama a função ao carregar e redimensionar a janela
  window.addEventListener("load", ajustarTopDasLinhasMax500);
  window.addEventListener("resize", ajustarTopDasLinhasMax500);


  function ajustarTopDasLinhasMin500() {
    const alturaJanela = window.innerHeight;
    if (alturaJanela >= 680) return;
    const baseAltura = 500;
    const incrementoPx = 5;
    const incrementoTop = 2;

    // Calcula o quanto deve adicionar
    const diferenca = Math.max(0, alturaJanela - baseAltura);
    const unidadesIncrementais = Math.floor(diferenca / incrementoPx);

    const novoTop1 = 235 - (unidadesIncrementais * incrementoTop);
    const novoTop2 = 237 - (unidadesIncrementais * incrementoTop);

    // Aplica o top calculado às linhas
    const linha1 = document.getElementById("LinhaHrzlPort1");
    const linha2 = document.getElementById("LinhaHrzlPort2");

    if (linha1) linha1.style.top = `${novoTop1}%`;
    if (linha2) linha2.style.top = `${novoTop2}%`;
  }

  // Chama a função ao carregar e redimensionar a janela
  window.addEventListener("load", ajustarTopDasLinhasMin500);
  window.addEventListener("resize", ajustarTopDasLinhasMin500);