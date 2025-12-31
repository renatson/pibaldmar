document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializa as animações de entrada (AOS)
    AOS.init({
        duration: 800,
        easing: 'ease-out-back',
        once: true
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Feedback tátil para Mobile (vibração leve)
        card.addEventListener('click', function(e) {
            if (navigator.vibrate) {
                navigator.vibrate(15);
            }

            // Captura o link e adiciona um pequeno delay para a animação ser vista
            const target = this.getAttribute('href');
            e.preventDefault();

            setTimeout(() => {
                window.location.href = target;
            }, 250);
        });

        // Suporte para efeito de toque em dispositivos que não usam hover
        card.addEventListener('touchstart', () => {
            card.classList.add('active-effect');
        });
        
        card.addEventListener('touchend', () => {
            card.classList.remove('active-effect');
        });
    });
});