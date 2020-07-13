const iconBars = document.querySelector('.bars-icon');
const dropMenu = document.querySelector('.drop-menu-container');
const btnBars = document.getElementById('btn-bars');

iconBars.addEventListener('click', () => {
    
        dropMenu.classList.toggle('responsive');
});