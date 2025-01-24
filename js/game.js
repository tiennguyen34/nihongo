document.addEventListener("DOMContentLoaded", function () {
    const gameTypeSelect = document.getElementById("game-type-select");
    const themeSelect = document.getElementById("theme-select");
    const startButton = document.getElementById("start");
    const selectionScreen = document.querySelector(".game-selection");
    const gameScreen = document.getElementById("game-screen");
    const gameFrame = document.getElementById("game-frame");
    const backButton = document.getElementById("back-to-selection");
    const warningMessage = document.getElementById("warning-message");

    // Save user selections
    gameTypeSelect.addEventListener("change", function () {
        localStorage.setItem("selectedGameType", gameTypeSelect.value);
        document.getElementById("theme-selection").classList.remove("hide");
    });

    themeSelect.addEventListener("change", function () {
        localStorage.setItem("selectedTheme", themeSelect.value);
        warningMessage.classList.add("hide");
    });

    // Restore selections if user goes back
    if (localStorage.getItem("selectedGameType")) {
        gameTypeSelect.value = localStorage.getItem("selectedGameType");
        document.getElementById("theme-selection").classList.remove("hide");
    }
    if (localStorage.getItem("selectedTheme")) {
        themeSelect.value = localStorage.getItem("selectedTheme");
    }

    // Start game with validation
    startButton.addEventListener("click", function () {
        if (!themeSelect.value) {
            warningMessage.classList.remove("hide");
            return;
        }
        let gameType = gameTypeSelect.value;
        let theme = themeSelect.value;
        let gameFolder = `games/${gameType}_${theme}`;

        selectionScreen.classList.add("hide");
        gameScreen.classList.remove("hide");
        gameFrame.src = `${gameFolder}/index.html`;
    });

    // Back to selection screen
    backButton.addEventListener("click", function () {
        selectionScreen.classList.remove("hide");
        gameScreen.classList.add("hide");
        gameFrame.src = "";
    });
});
