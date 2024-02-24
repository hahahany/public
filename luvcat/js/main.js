document.addEventListener('DOMContentLoaded', () => {
    
    const allMenu = document.getElementById('allMenu');

    document.querySelector('.menuButton').addEventListener('click', function () {
        allMenu.classList.add('open');
     });

    document.querySelector('.closeBtn').addEventListener('click', function () {
        allMenu.classList.remove('open');
    });
});
