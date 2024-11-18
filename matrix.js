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

    function createCharacter(initialCreation = false) {
        const character = document.createElement('div');
        character.className = 'character';
        
        // Wider distribution across the screen
        if (initialCreation) {
            character.style.left = `${(Math.random() * 98)}vw`;
            character.style.top = `${(Math.random() * 90)}vh`;
            character.style.animation = `
                fall ${20 + Math.random() * 10}s linear infinite,
                drift ${10 + Math.random() * 8}s ease-in-out infinite alternate,
                spin ${15 + Math.random() * 8}s linear infinite
            `;
        } else {
            character.style.left = `${(Math.random() * 98)}vw`;
        }
        
        // More varied drift distances
        const driftAmount = Math.random() * 300 + 100; // 100-400px drift
        character.style.setProperty('--drift-left', `${-driftAmount}px`);
        character.style.setProperty('--drift-right', `${driftAmount}px`);
        
        // More varied sizes
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
        
        character.addEventListener('animationend', () => {
            character.remove();
        });
        
        matrix.appendChild(character);
    }

    // Initial characters
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createCharacter(true), i * 1500);
    }

    // Controlled spawn rate
    let nextSpawnTime = 2500;
    function spawnCharacter() {
        const currentCharacters = document.getElementsByClassName('character').length;
        if (currentCharacters < 8) {
            createCharacter(false);
        }
        nextSpawnTime = 2500 + Math.random() * 1500; // 2.5-4 seconds between spawns
        setTimeout(spawnCharacter, nextSpawnTime);
    }
    
    setTimeout(spawnCharacter, 8000);
});
