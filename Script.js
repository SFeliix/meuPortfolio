document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. EFEITO DIGITAÇÃO TÁTICO (HERO) ---
    const typingElement = document.getElementById("typing-text");
    const targetText = typingElement.getAttribute("data-text");
    typingElement.innerHTML = "";
    let currentIdx = 0;

    function typeEffect() {
        if (currentIdx <= targetText.length) {
            // Cria um efeito visual de caractere aleatório antes de fixar a letra real
            if (currentIdx < targetText.length) {
                typingElement.innerHTML = targetText.substring(0, currentIdx) + "<span style='color: var(--gold);'>_</span>";
            } else {
                typingElement.innerHTML = targetText.substring(0, currentIdx);
            }
            currentIdx++;
            setTimeout(typeEffect, 70); // Velocidade da digitação
        }
    }
    
    // Inicia a digitação após  delay inicial
    setTimeout(typeEffect, 400);


    // --- 2. ANIMAR AO ROLAR A PÁGINA  ---
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Para de observar após animar uma vez
            }
        });
    }, {
        threshold: 0.15 // Ativa quando 15% aparece na tela
    });

    scrollElements.forEach(el => {
        elementObserver.observe(el);
    });

});