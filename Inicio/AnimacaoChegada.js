const els = document.querySelectorAll(
    '#card1, #card2, #card3, .card, .card-img-top, .card-body, #card-img-top2, #card-img-top3, #card-img-top1, #cardbody2, #cardbody3'
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
  