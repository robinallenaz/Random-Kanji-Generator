document.addEventListener('DOMContentLoaded', () => {
    const matrix = document.getElementById('matrix');
    
    // Mixed character set with kanji, hiragana, and katakana
    const characters = [
        // Kanji (reduced set)
        '桜', '花', '風', '空',
        // Hiragana
        'あ', 'い', 'う', 'え', 'お',
        'さ', 'き', 'く', 'け', 'こ',
        // Katakana
        'ア', 'イ', 'ウ', 'エ', 'オ',
        'サ', 'シ', 'ス', 'セ', 'ソ'
    ].join('');
    
    const colors = [
        '#ffd6e0', // soft pink
        '#ffb7c5', // light pink
        '#ff8fab', // medium pink
        '#dda0dd', // plum
    ];

    function getRandomSize() {
        // Create a distribution favoring smaller sizes but allowing for occasional large ones
        const rand = Math.random();
        if (rand < 0.6) { // 60% small
            return Math.random() * 30 + 12; // 12-42px
        } else if (rand < 0.85) { // 25% medium
            return Math.random() * 50 + 42; // 42-92px
        } else { // 15% large
            return Math.random() * 208 + 92; // 92-300px
        }
    }

    function createCharacter(initialCreation = false) {
        const character = document.createElement('div');
        character.className = 'character';
        
        // Wider distribution across the screen
        if (initialCreation) {
            character.style.left = `${(Math.random() * 95)}vw`;
            character.style.top = `${(Math.random() * 70)}vh`;
            character.style.animation = `
                fall ${15 + Math.random() * 8}s linear infinite,
                drift ${8 + Math.random() * 6}s ease-in-out infinite alternate,
                spin ${12 + Math.random() * 6}s linear infinite
            `;
        } else {
            character.style.left = `${(Math.random() * 95)}vw`;
        }
        
        // More varied drift distances based on size
        const size = getRandomSize();
        const driftAmount = (Math.random() * 200 + 100) * (size / 50); // Larger characters drift more
        character.style.setProperty('--drift-left', `${-driftAmount}px`);
        character.style.setProperty('--drift-right', `${driftAmount}px`);
        
        // Apply size and style
        character.style.fontSize = `${size}px`;
        character.style.color = colors[Math.floor(Math.random() * colors.length)];
        character.textContent = characters[Math.floor(Math.random() * characters.length)];
        
        // Adjust opacity based on size
        const opacity = size > 100 ? 0.3 : size > 50 ? 0.5 : 0.85;
        character.style.opacity = opacity;
        
        character.addEventListener('animationend', () => {
            character.remove();
        });
        
        matrix.appendChild(character);
    }

    // Initial characters (increased from 4 to 6)
    for (let i = 0; i < 6; i++) {
        setTimeout(() => createCharacter(true), i * 1000);
    }

    // Faster spawn rate for new characters
    let nextSpawnTime = 1500;
    function spawnCharacter() {
        createCharacter(false);
        nextSpawnTime = 1200 + Math.random() * 800; // 1.2-2 seconds between spawns
        setTimeout(spawnCharacter, nextSpawnTime);
    }
    
    setTimeout(spawnCharacter, 7000);
});
