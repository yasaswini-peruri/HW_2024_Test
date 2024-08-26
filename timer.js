function startTimer() {
    // Get the display element
    const display = document.getElementById('timerDisplay');

    // Set a timeout for 5 seconds (5000 milliseconds)
    setTimeout(() => {
        display.textContent = 'Time is up!';
    }, 5000);

    // Optionally, update the display immediately
    display.textContent = 'Timer started. Waiting for 5 seconds...';
}
