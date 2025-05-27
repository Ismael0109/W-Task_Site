const els = document.querySelectorAll(
    '#DivPort1 img, #DivPort2 img, #DivPort3 img, ' +
    '#LinhaHrzlPort1, #LinhaHrzlPort3, #LinhaHrzlPort4, ' +
    '#LinhaHrzlPort2, #LinhaHrzlPort6, #LinhaHrzlPort5, ' +
    '#DivPort1 .DivPortBotao button, #DivPort2 .DivPortBotao button, #DivPort3 .DivPortBotao button, ' +
    '#DivPortConteudo1 h2, #DivPortConteudo2 h2, #DivPortConteudo3 h2'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ChegadaAtiva');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.01
  });
  
  els.forEach(el => {
    observer.observe(el);
  });
  