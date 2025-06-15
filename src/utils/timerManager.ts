let timerIntervalId: number | null = null;

export function startCountdownTimer() {
    const timerEl = document.getElementById("countdown-timer");
    if (!timerEl) {
        console.warn("Timer element not found");
        return;
    }

    if (timerIntervalId !== null) {
        clearInterval(timerIntervalId);
    }

    let timeLeft = (() => {
        const val = sessionStorage.getItem("timePerQuestion");
        const parsed = parseInt(val ?? "", 10);
        return isNaN(parsed) || parsed <= 0 ? 30 : parsed;
    })();

    timerEl.textContent = formatTime(timeLeft);
    console.log(timerEl.textContent);

    timerIntervalId = window.setInterval(() => {
        timeLeft--;
        timerEl.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerIntervalId!);
            console.log("⏰ Time is up!");
            // Optional: auto-submit or move on here
        }
    }, 1000);
}

function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}