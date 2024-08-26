document.getElementById('startButton').addEventListener('click', function() {
    // Change the content of the page to indicate the game is starting
    document.querySelector('.container').innerHTML = `
        <h1>Get Ready!</h1>
        <p>The game is about to start...</p>
        <div class="loading-spinner"></div>
    `;

    // Simulate a delay to show a loading effect before starting the game
    setTimeout(function() {
        // Redirect to the game page or start the game logic
        // For example, you can redirect to another page:
        window.location.href = "game.html"; // Redirect to the actual game page
    }, 3000); // 3 seconds delay before starting the game
});