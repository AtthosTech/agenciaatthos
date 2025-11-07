document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidade do Menu Mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Ocultar menu mobile ao clicar em um link (âncora)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Funcionalidade do Acordeão (Blog/Central de Ajuda)
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

    if (collapsibleHeaders.length > 0) {
        collapsibleHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const isActive = header.classList.contains('active');
                
                // Pega o ícone para rotacionar
                const icon = header.querySelector('iconify-icon');

                // Fecha outros acordeões abertos
                collapsibleHeaders.forEach(otherHeader => {
                    if (otherHeader !== header && otherHeader.classList.contains('active')) {
                        otherHeader.classList.remove('active');
                        otherHeader.nextElementSibling.style.maxHeight = '0';
                        otherHeader.nextElementSibling.style.padding = '0 1.5rem';
                        // Rotação do ícone
                        otherHeader.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                    }
                });
                
                // Abre ou fecha o acordeão atual
                if (isActive) {
                    header.classList.remove('active');
                    content.style.maxHeight = '0';
                    content.style.padding = '0 1.5rem'; 
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    header.classList.add('active');
                    // Abre para a altura do conteúdo e aplica o padding
                    content.style.maxHeight = content.scrollHeight + 'px'; 
                    content.style.padding = '1.5rem'; 
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });

        // Abre o link do hash (#) na URL ao carregar a página (ex: #veiculares)
        if (window.location.hash) {
            const targetId = window.location.hash;
            // Busca o header dentro do div com o ID alvo
            const targetHeader = document.querySelector(targetId + ' .collapsible-header');
            if (targetHeader) {
                // Simula o clique para abrir e rolar
                targetHeader.click();
                setTimeout(() => {
                    targetHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 500);
            }
        }
    }
});