document.addEventListener('DOMContentLoaded', () => {
    const matrix = document.getElementById('matrix');
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    // Enhanced sakura color palette
    const colors = [
        '#ffd6e0', // soft pink
        '#ffb7c5', // light pink
        '#ff8fab', // medium pink
        '#ff69b4', // bright pink
        '#dda0dd', // plum
        '#e6e6fa'  // lavender
    ];

    function createCharacter() {
        const character = document.createElement('div');
        character.className = 'character';
        
        // Position and movement
        character.style.left = `${Math.random() * 100}vw`;
        const fallDuration = Math.random() * 8 + 4; // 4-12 seconds
        character.style.animationDuration = `${fallDuration}s, ${fallDuration * 0.8}s`; // fall and spin durations
        
        // Random horizontal drift
        const drift = Math.random() * 200 - 100; // -100px to +100px
        character.style.setProperty('--drift', `${drift}px`);
        
        // Size and appearance
        character.style.fontSize = `${Math.random() * 60 + 20}px`;
        character.style.color = colors[Math.floor(Math.random() * colors.length)];
        character.textContent = characters[Math.floor(Math.random() * characters.length)];
        
        // Cleanup
        character.addEventListener('animationend', () => {
            character.remove();
        });
        
        matrix.appendChild(character);
    }

    // Create initial set of characters with staggered start
    for (let i = 0; i < 30; i++) {
        setTimeout(createCharacter, Math.random() * 3000);
    }

    // Continue creating characters
    setInterval(createCharacter, 300); // Slightly slower creation rate
});
