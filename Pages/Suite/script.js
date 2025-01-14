// Este arquivo contém o código JavaScript para a página Suite do sistema de design.
// O ícone será adicionado a todas as páginas do projeto.

document.addEventListener('DOMContentLoaded', () => {
    const switchToggle = document.querySelector('.switch-toggle');
    let darkModeToggleCount = 0;

    // Ativa o modo escuro automaticamente ao carregar a página
    document.body.classList.add('dark-mode');
    switchToggle.classList.add('switch-toggle-right');

    // Adiciona um evento de clique ao botão de alternância
    switchToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        switchToggle.classList.toggle('switch-toggle-right');
        switchToggle.style.transition = 'transform 0.3s, background-color 0.3s';

        if (document.body.classList.contains('dark-mode')) {
            darkModeToggleCount++;
        }

        if (darkModeToggleCount === 2) {
            const linksContainer = document.querySelector('.links');
            if (!document.querySelector('.link-item.login')) {
                const loginButton = document.createElement('div');
                loginButton.className = 'link-item login';
                loginButton.textContent = 'Login';
                loginButton.addEventListener('click', () => {
                    window.location.href = 'Login/index.html';
                });
                linksContainer.appendChild(loginButton);
            }
        }
    });

    // Adiciona o ícone a todas as páginas
    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.href = '../src/icon/Group_6643-removebg-preview.png';
    iconLink.type = 'image/x-icon';
    document.head.appendChild(iconLink);
});