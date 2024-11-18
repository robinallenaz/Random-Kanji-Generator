document.addEventListener('DOMContentLoaded', () => {
    const matrix = document.getElementById('matrix');
    const characters = '桜花風月星雨雪空';
    
    const colors = [
        '#ffd6e0', // soft pink
        '#ffb7c5', // light pink
        '#ff8fab', // medium pink
        '#dda0dd', // plum
    ];

    function createCharacter(initialCreation = false) {
        const character = document.createElement('div');
        character.className = 'character';
        
        // Distribute initial characters across the screen width and height
        if (initialCreation) {
            character.style.left = `${(Math.random() * 80) + 10}vw`;
            character.style.top = `${(Math.random() * 50)}vh`;
            character.style.animation = `
                fall ${15 + Math.random() * 5}s linear infinite,
                drift ${8 + Math.random() * 4}s ease-in-out infinite alternate,
                spin ${12 + Math.random() * 4}s linear infinite
            `;
        } else {
            character.style.left = `${(Math.random() * 80) + 10}vw`;
        }
        
        // Wind drift effect with varied distances
        const driftAmount = Math.random() * 100 + 50; // 50-150px drift
        character.style.setProperty('--drift-left', `${-driftAmount}px`);
        character.style.setProperty('--drift-right', `${driftAmount}px`);
        
        // Randomize sizes slightly
        character.style.fontSize = `${Math.random() * 20 + 15}px`;
        character.style.color = colors[Math.floor(Math.random() * colors.length)];
        character.textContent = characters[Math.floor(Math.random() * characters.length)];
        
        // Cleanup
        character.addEventListener('animationend', () => {
            character.remove();
        });
        
        matrix.appendChild(character);
    }

    // Create initial set of characters with better distribution
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createCharacter(true), i * 800);
    }

    // Continue creating characters at a varied rate
    let nextSpawnTime = 1200;
    function spawnCharacter() {
        createCharacter(false);
        nextSpawnTime = 1000 + Math.random() * 500;
        setTimeout(spawnCharacter, nextSpawnTime);
    }
    
    setTimeout(spawnCharacter, 7000);
});
