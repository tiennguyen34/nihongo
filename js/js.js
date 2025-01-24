let flashcardData = {}; // Vocabulary data
let currentIndex = 0; // Current flashcard index
let currentTheme = "食品・日用品 / Thực phẩm・hàng tiêu dùng"; // Default selected theme

// Load flashcard data from JSON
async function loadFlashcardData() {
    try {
        const response = await fetch('js/flashcard_data.json');
        if (!response.ok) throw new Error('Failed to load flashcard data');
        flashcardData = await response.json();
        populateThemeSelector();
        updateFlashcard(); // Ensure the default flashcard is shown
    } catch (error) {
        console.error(error);
    }
}

// Populate the theme selector dropdown
function populateThemeSelector() {
    const themeSelect = document.getElementById('theme');
    themeSelect.innerHTML = '<option value="">-- テーマを選んでください --</option>';
    
    Object.keys(flashcardData).forEach(theme => {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme;
        themeSelect.appendChild(option);
    });
    
    themeSelect.value = currentTheme; // Set default theme in selector
    themeSelect.addEventListener('change', () => {
        currentTheme = themeSelect.value;
        currentIndex = 0;
        updateFlashcard();
    });
}

// Update flashcard display
function updateFlashcard() {
    if (!currentTheme || !flashcardData[currentTheme] || flashcardData[currentTheme].length === 0) return;
    
    const flashcard = flashcardData[currentTheme][currentIndex];
    document.getElementById('flashcard-image').src = flashcard.image;
    document.getElementById('flashcard-word').textContent = flashcard.word;
    document.getElementById('flashcard-meaning').textContent = flashcard.meaning;
    document.getElementById('flashcard-pronunciation').textContent = flashcard.pronunciation;
}

// Flip the flashcard
function flipCard() {
    document.getElementById('flashcard').classList.toggle('flip');
}

// Navigate to the next flashcard
function nextbtn() {
    if (currentTheme && currentIndex < flashcardData[currentTheme].length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first flashcard
    }
    updateFlashcard();
}

// Navigate to the previous flashcard
function prevbtn() {
    if (currentTheme && currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = flashcardData[currentTheme].length - 1; // Loop to last flashcard
    }
    updateFlashcard();
}

// Initialize flashcard data on page load
loadFlashcardData();
