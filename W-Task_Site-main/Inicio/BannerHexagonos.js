function createHexagon() {
    //Alterações a fazer 
    /*
    *Deixar a cor dos Hexágonos mais escura
    *Aumentar o tamanho dos hexágonos
    *Diminuir a Quantidade de hexágonos
    */
    const hex = document.createElement("div");
    hex.classList.add("hexagon");

    const banner = document.getElementById("banner");
    banner.appendChild(hex);

    const size = Math.random() * 50 + 35;
    hex.style.width = `${size}px`;
    hex.style.height = `${size}px`;
    hex.style.left = `${Math.random() * banner.offsetWidth}px`;
    hex.style.top = `${Math.random() * banner.offsetHeight}px`;
    hex.style.animationDuration = `${Math.random() * 5 + 3.5}s, ${Math.random() * 3 + 2}s, 8s`;
    hex.style.backgroundColor = `rgba(${100 + Math.random() * 100}, 0, 0, 0.7)`;

    setTimeout(() => hex.remove(), 8000);
}

setInterval(createHexagon, 250);

