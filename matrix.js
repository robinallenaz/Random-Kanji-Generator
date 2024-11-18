document.addEventListener('DOMContentLoaded', () => {
    const matrix = document.getElementById('matrix');
    
    // Mixed character set with emphasis on kanji
    const characters = [
        // Kanji (nature and elements)
        '桜', '花', '風', '月', '星', '雨', '雪', '空',
        '山', '川', '海', '木', '火', '水', '地', '日',
        // Common kanji
        '愛', '心', '春', '夏', '秋', '冬', '光', '夢',
        // Hiragana (selected)
        'あ', 'い', 'う', 'え', 'お',
        // Katakana (selected)
        'ア', 'イ', 'ウ', 'エ', 'オ'
    ].join('');
    
    const colors = [
        '#ffd6e0', // soft pink
        '#ffb7c5', // light pink
        '#ff8fab', // medium pink
        '#dda0dd', // plum
    ];

    // Track active characters
    const activeCharacters = new Set();

    function removeCharacter(character) {
        character.remove();
        activeCharacters.delete(character);
    }

    function createCharacter(initialCreation = false) {
        // Don't create if we already have max characters
        if (activeCharacters.size >= 8) return;

        const character = document.createElement('div');
        character.className = 'character';
        
        // Set initial position
        if (initialCreation) {
            character.style.left = `${(Math.random() * 98)}vw`;
            character.style.top = `${(Math.random() * 90)}vh`;
        } else {
            character.style.left = `${(Math.random() * 98)}vw`;
            character.style.top = '-5%';
        }
        
        // Set animation durations
        const fallDuration = 20 + Math.random() * 10;
        const driftDuration = 10 + Math.random() * 8;
        const spinDuration = 15 + Math.random() * 8;
        
        character.style.animation = `
            fall ${fallDuration}s linear forwards,
            drift ${driftDuration}s ease-in-out infinite alternate,
            spin ${spinDuration}s linear infinite
        `;
        
        // More varied drift distances
        const driftAmount = Math.random() * 300 + 100; // 100-400px drift
        character.style.setProperty('--drift-left', `${-driftAmount}px`);
        character.style.setProperty('--drift-right', `${driftAmount}px`);
        
        // Set size and style
        character.style.fontSize = `${Math.random() * 25 + 12}px`; // 12-37px
        character.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Weighted random selection favoring kanji
        const rand = Math.random();
        const charArray = [...characters];
        let selectedChar;
        if (rand < 0.7) { // 70% chance of kanji (first 24 characters)
            selectedChar = charArray[Math.floor(Math.random() * 24)];
        } else { // 30% chance of kana (last 10 characters)
            selectedChar = charArray[Math.floor(Math.random() * 10) + 24];
        }
        character.textContent = selectedChar;
        
        // Clean up character when animation ends
        character.addEventListener('animationend', (e) => {
            if (e.animationName === 'fall') {
                removeCharacter(character);
            }
        });

        // Add to tracking set and DOM
        activeCharacters.add(character);
        matrix.appendChild(character);

        // Backup cleanup after max duration
        setTimeout(() => {
            if (activeCharacters.has(character)) {
                removeCharacter(character);
            }
        }, fallDuration * 1000 + 1000); // Add 1 second buffer
    }

    // Initial characters
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createCharacter(true), i * 1500);
    }

    // Periodic cleanup check (every 30 seconds)
    setInterval(() => {
        if (activeCharacters.size > 8) {
            const oldestCharacters = Array.from(activeCharacters).slice(0, activeCharacters.size - 8);
            oldestCharacters.forEach(removeCharacter);
        }
    }, 30000);

    // Controlled spawn rate
    function spawnCharacter() {
        createCharacter(false);
        const nextSpawnTime = 2500 + Math.random() * 1500; // 2.5-4 seconds between spawns
        setTimeout(spawnCharacter, nextSpawnTime);
    }
    
    setTimeout(spawnCharacter, 8000);
});
