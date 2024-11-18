document.addEventListener('DOMContentLoaded', () => {
    const matrix = document.getElementById('matrix');
    // Reduced character set for more subtle effect
    const characters = '桜花風月星雨雪空';
    
    // Soft, sakura-inspired colors
    const colors = [
        '#ffd6e0', // soft pink
        '#ffb7c5', // light pink
        '#ff8fab', // medium pink
        '#dda0dd', // plum
    ];

    function createCharacter() {
        const character = document.createElement('div');
        character.className = 'character';
        
        // Position
        character.style.left = `${Math.random() * 100}vw`;
        
        // Wind drift effect
        const driftLeft = -(Math.random() * 150 + 50); // -50px to -200px
        const driftRight = Math.random() * 150 + 50;   // 50px to 200px
        character.style.setProperty('--drift-left', `${driftLeft}px`);
        character.style.setProperty('--drift-right', `${driftRight}px`);
        
        // Size and appearance (smaller size range for subtlety)
        character.style.fontSize = `${Math.random() * 20 + 15}px`; // 15-35px
        character.style.color = colors[Math.floor(Math.random() * colors.length)];
        character.textContent = characters[Math.floor(Math.random() * characters.length)];
        
        // Cleanup
        character.addEventListener('animationend', () => {
            character.remove();
        });
        
        matrix.appendChild(character);
    }

    // Create initial set of characters (reduced count)
    for (let i = 0; i < 8; i++) {
        setTimeout(createCharacter, Math.random() * 5000);
    }

    // Continue creating characters at a slower rate
    setInterval(createCharacter, 1200); // Increased interval for fewer characters
});
