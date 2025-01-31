document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow');
    const loadingScreen = document.querySelector('.loading-screen');
    const container = document.querySelector('.container');

    // Создание снега
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.width = snowflake.style.height = `${Math.random() * 5 + 2}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowContainer.appendChild(snowflake);
    }

    // Анимация загрузки
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        container.classList.remove('hidden');
        container.classList.add('visible');
    }, 3000); // 3 секунды на загрузку
});
