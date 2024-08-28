document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.option-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim().toLowerCase();
            switch(buttonText) {
                case 'story':
                    window.location.href = 'substory.html';
                    break;
                case 'kuis':
                    window.location.href = 'game.html';
                    break;
                case 'puzzle':
                    window.location.href = 'starpuzzle.html';
                    break;
                case 'coming soon':
                    window.location.href = 'musik.html';
                    break;
                }
        });
    });
});
